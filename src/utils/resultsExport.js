// Results Export Utilities
// Handles Google Sheets logging, PDF download, and email sharing

// ============================================
// GOOGLE SHEETS INTEGRATION
// ============================================

// Replace this with your Google Apps Script Web App URL after setup
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzs8BhEiCmLFJj_YyVGbiCFX4n2nqzvfefyQRmQY-CIzCMdoODhbwRJxlj7-NNpXlDx/exec';

/**
 * Submit results to Google Sheets
 * @param {Object} data - Student results data
 */
export async function submitToGoogleSheets(data) {
  // Don't submit if URL not configured
  if (GOOGLE_SHEETS_URL === 'https://script.google.com/macros/s/AKfycbzs8BhEiCmLFJj_YyVGbiCFX4n2nqzvfefyQRmQY-CIzCMdoODhbwRJxlj7-NNpXlDx/exec') {
    console.log('Google Sheets URL not configured. Skipping submission.');
    console.log('Results data:', data);
    return { success: false, reason: 'not_configured' };
  }

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to submit to Google Sheets:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Format results data for Google Sheets submission
 */
export function formatResultsForSheet(studentInfo, scores, answers, questions, practiceType = null) {
  const timestamp = new Date().toISOString();
  const isFullTest = !practiceType;

  // Calculate totals
  let totalCorrect, totalQuestions;
  if (isFullTest) {
    totalCorrect = (scores.rw1 || 0) + (scores.rw2 || 0) + (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = 98; // 54 RW + 44 Math
  } else {
    totalCorrect = practiceType === 'readingWriting'
      ? (scores.rw1 || 0) + (scores.rw2 || 0)
      : (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = practiceType === 'readingWriting' ? 54 : 44;
  }

  // Get wrong answers details
  const wrongAnswers = getWrongAnswersDetails(answers, questions, practiceType);

  return {
    timestamp,
    studentName: studentInfo.name || 'Anonymous',
    studentEmail: studentInfo.email || '',
    testType: isFullTest ? 'Full Practice Test' : `${practiceType === 'readingWriting' ? 'R/W' : 'Math'} Practice`,

    // Scores
    rwModule1: scores.rw1 || 0,
    rwModule2: scores.rw2 || 0,
    mathModule1: scores.math1 || 0,
    mathModule2: scores.math2 || 0,
    totalCorrect,
    totalQuestions,
    percentage: Math.round((totalCorrect / totalQuestions) * 100),

    // Wrong answers summary
    wrongAnswersCount: wrongAnswers.length,
    wrongAnswersDetails: JSON.stringify(wrongAnswers),
  };
}

/**
 * Get detailed information about wrong answers
 */
export function getWrongAnswersDetails(answers, questions, practiceType = null) {
  const wrongAnswers = [];

  // Handle practice mode (flat array) vs full test (nested object)
  let allQuestions = [];
  if (practiceType) {
    // Practice mode - questions is a flat array
    allQuestions = questions;
  } else {
    // Full test - questions has readingWriting and math arrays
    allQuestions = [...(questions.readingWriting || []), ...(questions.math || [])];
  }

  allQuestions.forEach(q => {
    const userAnswer = answers[q.id];
    if (userAnswer && userAnswer !== q.correctAnswer) {
      wrongAnswers.push({
        questionId: q.id,
        module: q.module,
        domain: q.domain || 'unknown',
        section: q.type === 'multipleChoice' && q.options?.[0]?.letter ? 'RW' : 'Math',
        userAnswer: userAnswer,
        correctAnswer: q.correctAnswer,
      });
    } else if (!userAnswer) {
      // Unanswered questions
      wrongAnswers.push({
        questionId: q.id,
        module: q.module,
        domain: q.domain || 'unknown',
        section: q.type === 'multipleChoice' ? 'RW' : 'Math',
        userAnswer: '(unanswered)',
        correctAnswer: q.correctAnswer,
      });
    }
  });

  return wrongAnswers;
}

// ============================================
// DOWNLOAD AS PDF/TEXT
// ============================================

/**
 * Generate and download results as a text file
 */
export function downloadResultsAsText(studentInfo, scores, answers, questions, practiceType = null) {
  const isFullTest = !practiceType;
  const wrongAnswers = getWrongAnswersDetails(answers, questions, practiceType);

  // Calculate totals
  let totalCorrect, totalQuestions;
  if (isFullTest) {
    totalCorrect = (scores.rw1 || 0) + (scores.rw2 || 0) + (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = 98;
  } else {
    totalCorrect = practiceType === 'readingWriting'
      ? (scores.rw1 || 0) + (scores.rw2 || 0)
      : (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = practiceType === 'readingWriting' ? 54 : 44;
  }

  const percentage = Math.round((totalCorrect / totalQuestions) * 100);
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  let content = `
╔════════════════════════════════════════════════════════════╗
║               SAT PRACTICE TEST RESULTS                     ║
╚════════════════════════════════════════════════════════════╝

Student: ${studentInfo.name || 'Anonymous'}
Email: ${studentInfo.email || 'Not provided'}
Date: ${date}
Test Type: ${isFullTest ? 'Full Practice Test' : `${practiceType === 'readingWriting' ? 'Reading & Writing' : 'Math'} Practice`}

════════════════════════════════════════════════════════════
                      OVERALL SCORE
════════════════════════════════════════════════════════════

  Total Score: ${totalCorrect} / ${totalQuestions} (${percentage}%)

════════════════════════════════════════════════════════════
                    MODULE BREAKDOWN
════════════════════════════════════════════════════════════
`;

  if (isFullTest || practiceType === 'readingWriting') {
    content += `
  Reading & Writing:
    Module 1: ${scores.rw1 || 0} / 27
    Module 2: ${scores.rw2 || 0} / 27
    Section Total: ${(scores.rw1 || 0) + (scores.rw2 || 0)} / 54
`;
  }

  if (isFullTest || practiceType === 'math') {
    content += `
  Math:
    Module 1: ${scores.math1 || 0} / 22
    Module 2: ${scores.math2 || 0} / 22
    Section Total: ${(scores.math1 || 0) + (scores.math2 || 0)} / 44
`;
  }

  content += `
════════════════════════════════════════════════════════════
                  QUESTIONS TO REVIEW
════════════════════════════════════════════════════════════

`;

  if (wrongAnswers.length === 0) {
    content += '  🎉 Perfect score! No questions to review.\n';
  } else {
    content += `  Total questions to review: ${wrongAnswers.length}\n\n`;

    // Group by domain
    const byDomain = {};
    wrongAnswers.forEach(wa => {
      const domain = wa.domain || 'unknown';
      if (!byDomain[domain]) byDomain[domain] = [];
      byDomain[domain].push(wa);
    });

    Object.entries(byDomain).forEach(([domain, questions]) => {
      const domainName = domain.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content += `  ${domainName}:\n`;
      questions.forEach(q => {
        content += `    Q${q.questionId} (Module ${q.module}): Your answer: ${q.userAnswer} | Correct: ${q.correctAnswer}\n`;
      });
      content += '\n';
    });
  }

  content += `
════════════════════════════════════════════════════════════
                    STUDY TIPS
════════════════════════════════════════════════════════════

`;

  // Add domain-specific tips based on wrong answers
  const domainCounts = {};
  wrongAnswers.forEach(wa => {
    domainCounts[wa.domain] = (domainCounts[wa.domain] || 0) + 1;
  });

  const weakestDomains = Object.entries(domainCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  if (weakestDomains.length > 0) {
    content += '  Focus areas (most missed questions):\n';
    weakestDomains.forEach(([domain, count], idx) => {
      const domainName = domain.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content += `    ${idx + 1}. ${domainName} (${count} questions)\n`;
    });
  } else {
    content += '  Great job! Keep practicing to maintain your skills.\n';
  }

  content += `

════════════════════════════════════════════════════════════
Generated by SAT Practice App
════════════════════════════════════════════════════════════
`;

  // Create and download file
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SAT_Results_${studentInfo.name || 'Anonymous'}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================
// EMAIL RESULTS
// ============================================

/**
 * Open email client with pre-filled results
 */
export function emailResults(studentInfo, scores, answers, questions, practiceType = null) {
  const isFullTest = !practiceType;
  const wrongAnswers = getWrongAnswersDetails(answers, questions, practiceType);

  // Calculate totals
  let totalCorrect, totalQuestions;
  if (isFullTest) {
    totalCorrect = (scores.rw1 || 0) + (scores.rw2 || 0) + (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = 98;
  } else {
    totalCorrect = practiceType === 'readingWriting'
      ? (scores.rw1 || 0) + (scores.rw2 || 0)
      : (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = practiceType === 'readingWriting' ? 54 : 44;
  }

  const percentage = Math.round((totalCorrect / totalQuestions) * 100);
  const testType = isFullTest ? 'Full Practice Test' : `${practiceType === 'readingWriting' ? 'R/W' : 'Math'} Practice`;

  const subject = encodeURIComponent(`SAT Practice Results - ${percentage}% (${testType})`);

  let body = `SAT Practice Test Results
========================

Student: ${studentInfo.name || 'Anonymous'}
Date: ${new Date().toLocaleDateString()}
Test Type: ${testType}

OVERALL SCORE: ${totalCorrect}/${totalQuestions} (${percentage}%)

MODULE BREAKDOWN:
`;

  if (isFullTest || practiceType === 'readingWriting') {
    body += `- R/W Module 1: ${scores.rw1 || 0}/27
- R/W Module 2: ${scores.rw2 || 0}/27
`;
  }

  if (isFullTest || practiceType === 'math') {
    body += `- Math Module 1: ${scores.math1 || 0}/22
- Math Module 2: ${scores.math2 || 0}/22
`;
  }

  body += `
QUESTIONS TO REVIEW: ${wrongAnswers.length}
`;

  // Add first 10 wrong answers to email (keep it short)
  if (wrongAnswers.length > 0) {
    body += '\nMissed Questions (first 10):\n';
    wrongAnswers.slice(0, 10).forEach(wa => {
      body += `- Q${wa.questionId}: Your answer: ${wa.userAnswer}, Correct: ${wa.correctAnswer}\n`;
    });
    if (wrongAnswers.length > 10) {
      body += `... and ${wrongAnswers.length - 10} more\n`;
    }
  }

  body += '\n--\nGenerated by SAT Practice App';

  const encodedBody = encodeURIComponent(body);
  const mailtoLink = `mailto:${studentInfo.email || ''}?subject=${subject}&body=${encodedBody}`;

  window.location.href = mailtoLink;
}
