// PDF Generator for SAT Results
import { jsPDF } from 'jspdf';

// Domain categories
const RW_DOMAINS = [
  { id: 'information_ideas', name: 'Information and Ideas' },
  { id: 'craft_structure', name: 'Craft and Structure' },
  { id: 'expression_ideas', name: 'Expression of Ideas' },
  { id: 'standard_conventions', name: 'Standard English Conventions' }
];

const MATH_DOMAINS = [
  { id: 'algebra', name: 'Algebra' },
  { id: 'advanced_math', name: 'Advanced Math' },
  { id: 'problem_solving', name: 'Problem-Solving and Data Analysis' },
  { id: 'geometry', name: 'Geometry and Trigonometry' }
];

// Calculate domain scores
function calculateDomainScores(questions, answers, practiceType = null) {
  const domainScores = {};
  const domainTotals = {};

  let allQuestions = [];
  if (practiceType) {
    allQuestions = questions;
  } else {
    allQuestions = [...(questions.readingWriting || []), ...(questions.math || [])];
  }

  allQuestions.forEach(q => {
    const domain = q.domain || 'unknown';
    if (!domainScores[domain]) {
      domainScores[domain] = 0;
      domainTotals[domain] = 0;
    }
    domainTotals[domain]++;

    const userAnswer = answers[q.id];
    if (userAnswer === q.correctAnswer) {
      domainScores[domain]++;
    }
  });

  return { scores: domainScores, totals: domainTotals };
}

// Get difficulty level
function getDifficultyLevel(score, total) {
  if (total === 0) return 'N/A';
  const percentage = score / total;
  if (percentage >= 0.8) return 'Mastered';
  if (percentage >= 0.6) return 'Proficient';
  if (percentage >= 0.4) return 'Developing';
  return 'Needs Practice';
}

// Get wrong answers
function getWrongAnswers(questions, answers, practiceType = null) {
  const wrongAnswers = [];

  let allQuestions = [];
  if (practiceType) {
    allQuestions = questions;
  } else {
    allQuestions = [...(questions.readingWriting || []), ...(questions.math || [])];
  }

  allQuestions.forEach(q => {
    const userAnswer = answers[q.id];
    if (!userAnswer) {
      wrongAnswers.push({
        id: q.id,
        module: q.module,
        domain: q.domain,
        userAnswer: '(blank)',
        correctAnswer: q.correctAnswer
      });
    } else if (userAnswer !== q.correctAnswer) {
      wrongAnswers.push({
        id: q.id,
        module: q.module,
        domain: q.domain,
        userAnswer,
        correctAnswer: q.correctAnswer
      });
    }
  });

  return wrongAnswers;
}

// Draw skill bar
function drawSkillBar(doc, x, y, score, total, width = 100, height = 8) {
  const maxBars = 7;
  const scaledScore = total > 0 ? Math.round((score / total) * maxBars) : 0;
  const barWidth = (width - (maxBars - 1) * 2) / maxBars;

  for (let i = 0; i < maxBars; i++) {
    if (i < scaledScore) {
      doc.setFillColor(30, 58, 95); // Navy blue for filled
    } else {
      doc.setFillColor(224, 224, 224); // Gray for empty
    }
    doc.roundedRect(x + i * (barWidth + 2), y, barWidth, height, 1, 1, 'F');
  }
}

/**
 * Generate PDF Results Report
 */
export function generateResultsPDF(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = margin;

  const isFullTest = !practiceType;
  const isRW = practiceType === 'readingWriting';

  // Calculate scores
  let totalCorrect, totalQuestions, rwTotal, mathTotal;
  if (isFullTest) {
    rwTotal = (scores.rw1 || 0) + (scores.rw2 || 0);
    mathTotal = (scores.math1 || 0) + (scores.math2 || 0);
    totalCorrect = rwTotal + mathTotal;
    totalQuestions = 98;
  } else if (isRW) {
    totalCorrect = (scores.rw1 || 0) + (scores.rw2 || 0);
    totalQuestions = questions.length;
  } else {
    totalCorrect = (scores.math1 || 0) + (scores.math2 || 0);
    totalQuestions = questions.length;
  }
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);

  // Calculate estimated SAT scores (approximate conversion)
  // This is a simplified conversion - real SAT uses equating
  let estimatedRWScore = 0, estimatedMathScore = 0, estimatedTotalScore = 0;
  if (isFullTest) {
    // Scale scores: 200-800 per section
    estimatedRWScore = Math.round(200 + (rwTotal / 54) * 600);
    estimatedMathScore = Math.round(200 + (mathTotal / 44) * 600);
    estimatedTotalScore = estimatedRWScore + estimatedMathScore;
  }

  // ============ HEADER ============
  doc.setFillColor(30, 58, 95);
  doc.rect(0, 0, pageWidth, 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('SAT Practice Test Results', pageWidth / 2, 25, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  const testTypeText = isFullTest ? 'Full Practice Test' :
    (isRW ? 'Reading & Writing Practice' : 'Math Practice');
  doc.text(testTypeText, pageWidth / 2, 38, { align: 'center' });

  yPos = 60;

  // ============ STUDENT INFO ============
  doc.setTextColor(51, 51, 51);
  doc.setFontSize(11);
  doc.text(`Student: ${studentInfo.name || 'Anonymous'}`, margin, yPos);
  doc.text(`Date: ${new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })}`, pageWidth - margin, yPos, { align: 'right' });

  if (studentInfo.email) {
    yPos += 6;
    doc.text(`Email: ${studentInfo.email}`, margin, yPos);
  }

  yPos += 15;

  // ============ OVERALL SCORE BOX ============
  doc.setFillColor(30, 58, 95);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 55, 5, 5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text(`${totalCorrect}`, pageWidth / 2, yPos + 25, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(`of ${totalQuestions} correct (${percentage}%)`, pageWidth / 2, yPos + 38, { align: 'center' });

  if (isFullTest) {
    doc.setFontSize(12);
    doc.text(`Estimated SAT Score: ${estimatedTotalScore}`, pageWidth / 2, yPos + 50, { align: 'center' });
  }

  yPos += 65;

  // ============ SECTION SCORES ============
  doc.setTextColor(51, 51, 51);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Section Scores', margin, yPos);
  yPos += 10;

  // Draw section score boxes
  const boxWidth = isFullTest ? (pageWidth - 2 * margin - 10) / 2 : pageWidth - 2 * margin;

  if (isFullTest || isRW) {
    // R/W Section Box
    const rwBoxX = margin;
    doc.setFillColor(249, 249, 249);
    doc.setDrawColor(224, 224, 224);
    doc.roundedRect(rwBoxX, yPos, boxWidth, 50, 3, 3, 'FD');

    doc.setTextColor(51, 51, 51);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Reading & Writing', rwBoxX + 10, yPos + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Module 1: ${scores.rw1 || 0}/27`, rwBoxX + 10, yPos + 25);
    doc.text(`Module 2: ${scores.rw2 || 0}/27`, rwBoxX + 10, yPos + 35);

    doc.setFont('helvetica', 'bold');
    const rwSectionTotal = (scores.rw1 || 0) + (scores.rw2 || 0);
    doc.text(`Total: ${rwSectionTotal}/54`, rwBoxX + boxWidth - 10, yPos + 30, { align: 'right' });

    if (isFullTest) {
      doc.setFontSize(9);
      doc.setTextColor(30, 58, 95);
      doc.text(`Est. Score: ${estimatedRWScore}`, rwBoxX + boxWidth - 10, yPos + 42, { align: 'right' });
    }
  }

  if (isFullTest || !isRW) {
    // Math Section Box
    const mathBoxX = isFullTest ? margin + boxWidth + 10 : margin;
    doc.setFillColor(249, 249, 249);
    doc.setDrawColor(224, 224, 224);
    doc.roundedRect(mathBoxX, yPos, boxWidth, 50, 3, 3, 'FD');

    doc.setTextColor(51, 51, 51);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Math', mathBoxX + 10, yPos + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Module 1: ${scores.math1 || 0}/22`, mathBoxX + 10, yPos + 25);
    doc.text(`Module 2: ${scores.math2 || 0}/22`, mathBoxX + 10, yPos + 35);

    doc.setFont('helvetica', 'bold');
    const mathSectionTotal = (scores.math1 || 0) + (scores.math2 || 0);
    doc.text(`Total: ${mathSectionTotal}/44`, mathBoxX + boxWidth - 10, yPos + 30, { align: 'right' });

    if (isFullTest) {
      doc.setFontSize(9);
      doc.setTextColor(30, 58, 95);
      doc.text(`Est. Score: ${estimatedMathScore}`, mathBoxX + boxWidth - 10, yPos + 42, { align: 'right' });
    }
  }

  yPos += 60;

  // ============ KNOWLEDGE AND SKILLS ============
  doc.setTextColor(51, 51, 51);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Knowledge and Skills', margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(102, 102, 102);
  doc.text('Performance across content domains', margin, yPos);
  yPos += 12;

  // Calculate domain scores
  const domainData = calculateDomainScores(questions, answers, practiceType);

  // R/W Domains
  if (isFullTest || isRW) {
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Reading and Writing', margin, yPos);
    yPos += 8;

    RW_DOMAINS.forEach(domain => {
      const score = domainData.scores[domain.id] || 0;
      const total = domainData.totals[domain.id] || 0;
      const level = getDifficultyLevel(score, total);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 51, 51);
      doc.text(domain.name, margin, yPos);

      // Draw skill bar
      drawSkillBar(doc, margin + 80, yPos - 5, score, total, 60, 6);

      doc.setTextColor(102, 102, 102);
      doc.text(`${level} (${score}/${total})`, margin + 150, yPos);

      yPos += 10;
    });

    yPos += 5;
  }

  // Math Domains
  if (isFullTest || !isRW) {
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Math', margin, yPos);
    yPos += 8;

    MATH_DOMAINS.forEach(domain => {
      const score = domainData.scores[domain.id] || 0;
      const total = domainData.totals[domain.id] || 0;
      const level = getDifficultyLevel(score, total);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 51, 51);
      doc.text(domain.name, margin, yPos);

      // Draw skill bar
      drawSkillBar(doc, margin + 80, yPos - 5, score, total, 60, 6);

      doc.setTextColor(102, 102, 102);
      doc.text(`${level} (${score}/${total})`, margin + 150, yPos);

      yPos += 10;
    });
  }

  // ============ NEW PAGE FOR WRONG ANSWERS ============
  doc.addPage();
  yPos = margin;

  doc.setTextColor(51, 51, 51);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Questions to Review', margin, yPos);
  yPos += 10;

  const wrongAnswers = getWrongAnswers(questions, answers, practiceType);

  if (wrongAnswers.length === 0) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(46, 125, 50);
    doc.text('Perfect score! No questions to review.', margin, yPos);
  } else {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(102, 102, 102);
    doc.text(`Total questions to review: ${wrongAnswers.length}`, margin, yPos);
    yPos += 10;

    // Table header
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos, pageWidth - 2 * margin, 8, 'F');
    doc.setTextColor(51, 51, 51);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Q#', margin + 5, yPos + 6);
    doc.text('Module', margin + 25, yPos + 6);
    doc.text('Domain', margin + 55, yPos + 6);
    doc.text('Your Answer', margin + 110, yPos + 6);
    doc.text('Correct', margin + 150, yPos + 6);
    yPos += 12;

    doc.setFont('helvetica', 'normal');
    wrongAnswers.forEach((wa, idx) => {
      if (yPos > pageHeight - 20) {
        doc.addPage();
        yPos = margin;
      }

      const bgColor = idx % 2 === 0 ? [255, 255, 255] : [249, 249, 249];
      doc.setFillColor(...bgColor);
      doc.rect(margin, yPos - 4, pageWidth - 2 * margin, 8, 'F');

      doc.setTextColor(51, 51, 51);
      doc.text(`${wa.id}`, margin + 5, yPos + 2);
      doc.text(`M${wa.module}`, margin + 25, yPos + 2);

      const domainShort = (wa.domain || 'unknown').replace(/_/g, ' ').substring(0, 20);
      doc.text(domainShort, margin + 55, yPos + 2);

      doc.setTextColor(220, 53, 69); // Red for wrong answer
      doc.text(String(wa.userAnswer), margin + 110, yPos + 2);

      doc.setTextColor(46, 125, 50); // Green for correct
      doc.text(String(wa.correctAnswer), margin + 150, yPos + 2);

      yPos += 8;
    });
  }

  // ============ FOOTER ============
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Generated by SAT Practice App | Page ${i} of ${pageCount}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  return doc;
}

/**
 * Download PDF
 */
export function downloadResultsPDF(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = generateResultsPDF(studentInfo, scores, answers, questions, practiceType);
  const filename = `SAT_Results_${studentInfo.name || 'Anonymous'}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
}

/**
 * Get PDF as base64 for email attachment
 */
export function getResultsPDFBase64(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = generateResultsPDF(studentInfo, scores, answers, questions, practiceType);
  return doc.output('datauristring');
}

/**
 * Get PDF as Blob for email attachment
 */
export function getResultsPDFBlob(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = generateResultsPDF(studentInfo, scores, answers, questions, practiceType);
  return doc.output('blob');
}
