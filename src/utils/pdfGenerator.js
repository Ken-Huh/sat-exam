// PDF Generator for SAT Results - Compact College Board Style
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
  { id: 'problem_solving', name: 'Problem-Solving & Data Analysis' },
  { id: 'geometry', name: 'Geometry & Trigonometry' }
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
        section: q.section || (q.type === 'fillIn' ? 'Math' : 'RW'),
        domain: q.domain,
        userAnswer: '—',
        correctAnswer: q.correctAnswer
      });
    } else if (userAnswer !== q.correctAnswer) {
      wrongAnswers.push({
        id: q.id,
        module: q.module,
        section: q.section || (q.type === 'fillIn' ? 'Math' : 'RW'),
        domain: q.domain,
        userAnswer,
        correctAnswer: q.correctAnswer
      });
    }
  });

  return wrongAnswers;
}

// Draw compact skill bar
function drawSkillBar(doc, x, y, score, total, width = 50, height = 5) {
  const maxBars = 5;
  const scaledScore = total > 0 ? Math.round((score / total) * maxBars) : 0;
  const barWidth = (width - (maxBars - 1) * 1.5) / maxBars;

  for (let i = 0; i < maxBars; i++) {
    if (i < scaledScore) {
      doc.setFillColor(30, 58, 95);
    } else {
      doc.setFillColor(210, 210, 210);
    }
    doc.roundedRect(x + i * (barWidth + 1.5), y, barWidth, height, 1, 1, 'F');
  }
}

/**
 * Generate PDF Results Report - Compact Format
 */
export function generateResultsPDF(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let yPos = 0;

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
    rwTotal = (scores.rw1 || 0) + (scores.rw2 || 0);
    totalCorrect = rwTotal;
    totalQuestions = questions.length;
  } else {
    mathTotal = (scores.math1 || 0) + (scores.math2 || 0);
    totalCorrect = mathTotal;
    totalQuestions = questions.length;
  }
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);

  // Calculate estimated SAT scores
  let estimatedRWScore = 0, estimatedMathScore = 0, estimatedTotalScore = 0;
  if (isFullTest) {
    estimatedRWScore = Math.round(200 + (rwTotal / 54) * 600);
    estimatedMathScore = Math.round(200 + (mathTotal / 44) * 600);
    estimatedTotalScore = estimatedRWScore + estimatedMathScore;
  }

  // ============ COMPACT HEADER ============
  doc.setFillColor(30, 58, 95);
  doc.rect(0, 0, pageWidth, 28, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('SAT Practice Test Results', margin, 12);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const testTypeText = isFullTest ? 'Full Practice Test' :
    (isRW ? 'Reading & Writing Practice' : 'Math Practice');
  doc.text(testTypeText, margin, 22);

  // Date on right
  doc.setFontSize(9);
  doc.text(new Date().toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  }), pageWidth - margin, 12, { align: 'right' });

  // Student name on right
  doc.text(studentInfo.name || 'Anonymous', pageWidth - margin, 22, { align: 'right' });

  yPos = 38;

  // ============ SCORE SUMMARY ROW ============
  const scoreBoxWidth = isFullTest ? (pageWidth - 2 * margin - 20) / 3 : (pageWidth - 2 * margin - 10) / 2;

  // Total Score Box
  doc.setFillColor(30, 58, 95);
  doc.roundedRect(margin, yPos, scoreBoxWidth, 40, 3, 3, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  if (isFullTest) {
    doc.text(`${estimatedTotalScore}`, margin + scoreBoxWidth / 2, yPos + 20, { align: 'center' });
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Total Score', margin + scoreBoxWidth / 2, yPos + 30, { align: 'center' });
    doc.text(`${totalCorrect}/${totalQuestions} (${percentage}%)`, margin + scoreBoxWidth / 2, yPos + 37, { align: 'center' });
  } else {
    doc.text(`${totalCorrect}`, margin + scoreBoxWidth / 2, yPos + 20, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`of ${totalQuestions} correct`, margin + scoreBoxWidth / 2, yPos + 30, { align: 'center' });
    doc.text(`${percentage}%`, margin + scoreBoxWidth / 2, yPos + 37, { align: 'center' });
  }

  // R/W Score Box (if applicable)
  if (isFullTest || isRW) {
    const rwBoxX = margin + scoreBoxWidth + 10;
    doc.setFillColor(245, 245, 245);
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(rwBoxX, yPos, scoreBoxWidth, 40, 3, 3, 'FD');

    doc.setTextColor(30, 58, 95);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    const rwScoreDisplay = isFullTest ? estimatedRWScore : rwTotal;
    doc.text(`${rwScoreDisplay}`, rwBoxX + scoreBoxWidth / 2, yPos + 18, { align: 'center' });

    doc.setTextColor(80, 80, 80);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Reading & Writing', rwBoxX + scoreBoxWidth / 2, yPos + 28, { align: 'center' });
    doc.text(`${scores.rw1 || 0}/27 + ${scores.rw2 || 0}/27 = ${rwTotal}/54`, rwBoxX + scoreBoxWidth / 2, yPos + 36, { align: 'center' });
  }

  // Math Score Box (if applicable)
  if (isFullTest || !isRW) {
    const mathBoxX = isFullTest ? margin + 2 * (scoreBoxWidth + 10) : margin + scoreBoxWidth + 10;
    doc.setFillColor(245, 245, 245);
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(mathBoxX, yPos, scoreBoxWidth, 40, 3, 3, 'FD');

    doc.setTextColor(30, 58, 95);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    const mathScoreDisplay = isFullTest ? estimatedMathScore : mathTotal;
    doc.text(`${mathScoreDisplay}`, mathBoxX + scoreBoxWidth / 2, yPos + 18, { align: 'center' });

    doc.setTextColor(80, 80, 80);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Math', mathBoxX + scoreBoxWidth / 2, yPos + 28, { align: 'center' });
    doc.text(`${scores.math1 || 0}/22 + ${scores.math2 || 0}/22 = ${mathTotal || 0}/44`, mathBoxX + scoreBoxWidth / 2, yPos + 36, { align: 'center' });
  }

  yPos += 50;

  // ============ KNOWLEDGE AND SKILLS - COMPACT ============
  doc.setTextColor(51, 51, 51);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Knowledge and Skills', margin, yPos);
  yPos += 8;

  // Calculate domain scores
  const domainData = calculateDomainScores(questions, answers, practiceType);

  // Two-column layout for domains
  const colWidth = (pageWidth - 2 * margin - 10) / 2;
  const leftColX = margin;
  const rightColX = margin + colWidth + 10;

  // R/W Domains (left column)
  if (isFullTest || isRW) {
    doc.setTextColor(30, 58, 95);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Reading and Writing', leftColX, yPos);

    let rwY = yPos + 7;
    RW_DOMAINS.forEach(domain => {
      const score = domainData.scores[domain.id] || 0;
      const total = domainData.totals[domain.id] || 0;

      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 51, 51);
      doc.text(domain.name, leftColX, rwY);

      drawSkillBar(doc, leftColX + 55, rwY - 3.5, score, total, 40, 4);

      doc.setTextColor(100, 100, 100);
      doc.setFontSize(7);
      doc.text(`${score}/${total}`, leftColX + 98, rwY);

      rwY += 8;
    });
  }

  // Math Domains (right column or left if practice)
  if (isFullTest || !isRW) {
    const mathColX = isFullTest ? rightColX : leftColX;
    const mathStartY = isFullTest ? yPos : yPos;

    doc.setTextColor(30, 58, 95);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Math', mathColX, mathStartY);

    let mathY = mathStartY + 7;
    MATH_DOMAINS.forEach(domain => {
      const score = domainData.scores[domain.id] || 0;
      const total = domainData.totals[domain.id] || 0;

      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 51, 51);
      doc.text(domain.name, mathColX, mathY);

      drawSkillBar(doc, mathColX + 55, mathY - 3.5, score, total, 40, 4);

      doc.setTextColor(100, 100, 100);
      doc.setFontSize(7);
      doc.text(`${score}/${total}`, mathColX + 98, mathY);

      mathY += 8;
    });
  }

  yPos += 45;

  // ============ QUESTIONS TO REVIEW ============
  const wrongAnswers = getWrongAnswers(questions, answers, practiceType);

  doc.setTextColor(51, 51, 51);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Questions to Review (${wrongAnswers.length})`, margin, yPos);
  yPos += 8;

  if (wrongAnswers.length === 0) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(46, 125, 50);
    doc.text('Perfect score! No questions to review.', margin, yPos);
  } else {
    // Table header
    doc.setFillColor(30, 58, 95);
    doc.rect(margin, yPos, pageWidth - 2 * margin, 7, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text('Q#', margin + 3, yPos + 5);
    doc.text('Section', margin + 18, yPos + 5);
    doc.text('Module', margin + 45, yPos + 5);
    doc.text('Domain', margin + 70, yPos + 5);
    doc.text('Yours', margin + 125, yPos + 5);
    doc.text('Correct', margin + 150, yPos + 5);
    yPos += 9;

    doc.setFont('helvetica', 'normal');
    wrongAnswers.forEach((wa, idx) => {
      if (yPos > pageHeight - 15) {
        doc.addPage();
        yPos = margin;

        // Repeat header on new page
        doc.setFillColor(30, 58, 95);
        doc.rect(margin, yPos, pageWidth - 2 * margin, 7, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.text('Q#', margin + 3, yPos + 5);
        doc.text('Section', margin + 18, yPos + 5);
        doc.text('Module', margin + 45, yPos + 5);
        doc.text('Domain', margin + 70, yPos + 5);
        doc.text('Yours', margin + 125, yPos + 5);
        doc.text('Correct', margin + 150, yPos + 5);
        yPos += 9;
        doc.setFont('helvetica', 'normal');
      }

      const bgColor = idx % 2 === 0 ? [255, 255, 255] : [248, 248, 248];
      doc.setFillColor(...bgColor);
      doc.rect(margin, yPos - 3, pageWidth - 2 * margin, 7, 'F');

      doc.setTextColor(51, 51, 51);
      doc.setFontSize(8);
      doc.text(`${wa.id}`, margin + 3, yPos + 2);
      doc.text(wa.section || 'RW', margin + 18, yPos + 2);
      doc.text(`M${wa.module}`, margin + 45, yPos + 2);

      const domainShort = (wa.domain || 'unknown').replace(/_/g, ' ').substring(0, 18);
      doc.text(domainShort, margin + 70, yPos + 2);

      doc.setTextColor(200, 50, 50);
      doc.text(String(wa.userAnswer).substring(0, 8), margin + 125, yPos + 2);

      doc.setTextColor(30, 120, 50);
      doc.text(String(wa.correctAnswer).substring(0, 8), margin + 150, yPos + 2);

      yPos += 7;
    });
  }

  // ============ FOOTER ============
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `SAT Practice App | Page ${i} of ${pageCount}`,
      pageWidth / 2,
      pageHeight - 8,
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
