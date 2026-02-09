// PDF Generator for SAT Results - College Board Style
import { jsPDF } from 'jspdf';

// Domain categories with descriptions
const RW_DOMAINS = [
  { id: 'information_ideas', name: 'Information and Ideas', desc: '26% of test section, 12-14 questions' },
  { id: 'craft_structure', name: 'Craft and Structure', desc: '28% of test section, 13-15 questions' },
  { id: 'expression_ideas', name: 'Expression of Ideas', desc: '20% of test section, 8-12 questions' },
  { id: 'standard_conventions', name: 'Standard English Conventions', desc: '26% of test section, 11-15 questions' }
];

const MATH_DOMAINS = [
  { id: 'algebra', name: 'Algebra', desc: '35% of test section, 13-15 questions' },
  { id: 'advanced_math', name: 'Advanced Math', desc: '35% of test section, 13-15 questions' },
  { id: 'problem_solving', name: 'Problem-Solving and Data Analysis', desc: '15% of test section, 5-7 questions' },
  { id: 'geometry', name: 'Geometry and Trigonometry', desc: '15% of test section, 5-7 questions' }
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

// Draw skill bar (8 segments like CB)
function drawSkillBar(doc, x, y, score, total, width = 120) {
  const maxBars = 8;
  const scaledScore = total > 0 ? Math.round((score / total) * maxBars) : 0;
  const barWidth = 12;
  const gap = 3;

  for (let i = 0; i < maxBars; i++) {
    if (i < scaledScore) {
      doc.setFillColor(0, 0, 0); // Black for filled
    } else {
      doc.setFillColor(220, 220, 220); // Light gray for empty
      doc.setDrawColor(200, 200, 200);
    }
    doc.rect(x + i * (barWidth + gap), y, barWidth, 6, i < scaledScore ? 'F' : 'FD');
  }
}

/**
 * Generate PDF Results Report - College Board Style
 */
export function generateResultsPDF(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;

  const isFullTest = !practiceType;
  const isRW = practiceType === 'readingWriting';

  // Calculate scores
  const rwTotal = (scores.rw1 || 0) + (scores.rw2 || 0);
  const mathTotal = (scores.math1 || 0) + (scores.math2 || 0);
  let totalCorrect, totalQuestions;

  if (isFullTest) {
    totalCorrect = rwTotal + mathTotal;
    totalQuestions = 98;
  } else if (isRW) {
    totalCorrect = rwTotal;
    totalQuestions = questions.length;
  } else {
    totalCorrect = mathTotal;
    totalQuestions = questions.length;
  }

  // Estimated SAT scores
  const estimatedRWScore = Math.round(200 + (rwTotal / 54) * 600);
  const estimatedMathScore = Math.round(200 + (mathTotal / 44) * 600);
  const estimatedTotalScore = estimatedRWScore + estimatedMathScore;

  // ============ HEADER ============
  doc.setFillColor(245, 245, 245);
  doc.rect(0, 0, pageWidth, 20, 'F');

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('SAT Practice Test', margin, 14);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  doc.text(dateStr, pageWidth - margin, 14, { align: 'right' });

  let yPos = 28;

  // ============ THREE COLUMN SCORE SECTION ============
  const colWidth = (pageWidth - 2 * margin - 20) / 3;
  const boxHeight = 75; // Increased from 55 to provide more vertical space

  // Column 1: TOTAL SCORE
  doc.setFillColor(30, 58, 95);
  doc.roundedRect(margin, yPos, colWidth, boxHeight, 3, 3, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL SCORE', margin + colWidth / 2, yPos + 12, { align: 'center' });

  doc.setFontSize(36);
  doc.text(`${estimatedTotalScore}`, margin + colWidth / 2, yPos + 37, { align: 'center' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Score Range: 400-1600', margin + colWidth / 2, yPos + 50, { align: 'center' });
  doc.text(`${totalCorrect}/${totalQuestions} correct`, margin + colWidth / 2, yPos + 58, { align: 'center' });

  // Column 2: SECTION SCORES
  const col2X = margin + colWidth + 10;
  doc.setFillColor(250, 250, 250);
  doc.setDrawColor(220, 220, 220);
  doc.roundedRect(col2X, yPos, colWidth, boxHeight, 3, 3, 'FD');

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('SECTION SCORES', col2X + colWidth / 2, yPos + 12, { align: 'center' });

  // R/W Score
  doc.setFontSize(8);
  doc.text('Reading and Writing', col2X + 8, yPos + 26);
  doc.setFontSize(20);
  doc.text(`${estimatedRWScore}`, col2X + 8, yPos + 40);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  // TODO: Could add national average / 9th grade average score line here
  doc.text('Score Range: 200-800', col2X + 35, yPos + 40);

  // Math Score
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('Math', col2X + 8, yPos + 52);
  doc.setFontSize(20);
  doc.text(`${estimatedMathScore}`, col2X + 8, yPos + 65);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Score Range: 200-800', col2X + 35, yPos + 65);

  // Column 3: SCORE DETAILS
  const col3X = margin + 2 * (colWidth + 10);
  doc.setFillColor(250, 250, 250);
  doc.setDrawColor(220, 220, 220);
  doc.roundedRect(col3X, yPos, colWidth, boxHeight, 3, 3, 'FD');

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('SCORE DETAILS', col3X + colWidth / 2, yPos + 12, { align: 'center' });

  doc.setFontSize(8);
  doc.text('Questions Overview', col3X + 8, yPos + 25);

  doc.setFontSize(18);
  doc.text(`${totalCorrect}`, col3X + 8, yPos + 38);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Correct', col3X + 22, yPos + 34);
  doc.text('Answers', col3X + 22, yPos + 39);
  doc.text(`Total Questions: ${totalQuestions}`, col3X + 45, yPos + 34);
  doc.text(`Total Incorrect: ${totalQuestions - totalCorrect}`, col3X + 45, yPos + 39);

  // R/W and Math breakdown
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.text('Reading and Writing', col3X + 8, yPos + 52);
  doc.text('Math', col3X + colWidth / 2 + 5, yPos + 52);

  doc.setFontSize(14);
  doc.text(`${rwTotal}`, col3X + 8, yPos + 62);
  doc.text(`${mathTotal}`, col3X + colWidth / 2 + 5, yPos + 62);

  doc.setFontSize(6);
  doc.setFont('helvetica', 'normal');
  doc.text('Correct', col3X + 18, yPos + 59);
  doc.text('Answers', col3X + 18, yPos + 63);
  doc.text('Correct', col3X + colWidth / 2 + 15, yPos + 59);
  doc.text('Answers', col3X + colWidth / 2 + 15, yPos + 63);

  yPos += boxHeight + 10;

  // ============ KNOWLEDGE AND SKILLS ============
  // Check if we need a page break to accommodate stacked domains
  const contentHeight = (RW_DOMAINS.length + MATH_DOMAINS.length) * 18 + 30;
  if (yPos + contentHeight > 250) {
    doc.addPage();
    yPos = 20;
  }

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('KNOWLEDGE AND SKILLS', margin, yPos);
  yPos += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('View your performance across the 8 content domains measured on the SAT', margin, yPos);
  yPos += 10;

  // Calculate domain scores
  const domainData = calculateDomainScores(questions, answers, practiceType);

  // Full-width stacked layout (no longer side-by-side)
  const domainWidth = pageWidth - 2 * margin;

  // ===== READING AND WRITING DOMAINS =====
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Reading and Writing', margin, yPos);
  yPos += 8;

  RW_DOMAINS.forEach((domain, idx) => {
    const y = yPos + idx * 18;
    const score = domainData.scores[domain.id] || 0;
    const total = domainData.totals[domain.id] || 0;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(domain.name, margin, y);

    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`(${domain.desc})`, margin, y + 5);

    drawSkillBar(doc, margin, y + 8, score, total);
  });

  yPos += RW_DOMAINS.length * 18 + 6;

  // ===== MATH DOMAINS =====
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Math', margin, yPos);
  yPos += 8;

  MATH_DOMAINS.forEach((domain, idx) => {
    const y = yPos + idx * 18;
    const score = domainData.scores[domain.id] || 0;
    const total = domainData.totals[domain.id] || 0;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(domain.name, margin, y);

    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`(${domain.desc})`, margin, y + 5);

    drawSkillBar(doc, margin, y + 8, score, total);
  });

  yPos += MATH_DOMAINS.length * 18;

  // Footer - positioned at bottom of current page
  const pageCount = doc.getNumberOfPages();
  doc.setPage(pageCount);
  doc.setFontSize(7);
  doc.setTextColor(150, 150, 150);
  doc.text(`Generated by SAT Practice App | ${studentInfo.name || 'Anonymous'}`, pageWidth / 2, 285, { align: 'center' });

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
 * Get PDF as base64
 */
export function getResultsPDFBase64(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = generateResultsPDF(studentInfo, scores, answers, questions, practiceType);
  return doc.output('datauristring');
}

/**
 * Get PDF as Blob
 */
export function getResultsPDFBlob(studentInfo, scores, answers, questions, practiceType = null) {
  const doc = generateResultsPDF(studentInfo, scores, answers, questions, practiceType);
  return doc.output('blob');
}
