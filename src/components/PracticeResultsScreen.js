import React, { useEffect, useState } from 'react';
import './ResultsScreen.css';
import { submitToGoogleSheets, formatResultsForSheet } from '../utils/resultsExport';
import { downloadResultsPDF } from '../utils/pdfGenerator';

// Domain categories
const RW_DOMAINS = [
  { id: 'information_ideas', name: 'Information and Ideas', description: '26% of test section' },
  { id: 'craft_structure', name: 'Craft and Structure', description: '28% of test section' },
  { id: 'expression_ideas', name: 'Expression of Ideas', description: '20% of test section' },
  { id: 'standard_conventions', name: 'Standard English Conventions', description: '26% of test section' }
];

const MATH_DOMAINS = [
  { id: 'algebra', name: 'Algebra', description: '35% of test section' },
  { id: 'advanced_math', name: 'Advanced Math', description: '35% of test section' },
  { id: 'problem_solving', name: 'Problem-Solving and Data Analysis', description: '15% of test section' },
  { id: 'geometry', name: 'Geometry and Trigonometry', description: '15% of test section' }
];

// Calculate domain scores for practice questions
function calculateDomainScores(questions, answers) {
  const domainScores = {};
  const domainTotals = {};

  questions.forEach(q => {
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

// Skill bar component
function SkillBar({ score, total, maxBars = 7 }) {
  const scaledScore = total > 0 ? Math.round((score / total) * maxBars) : 0;

  return (
    <div className="skill-bar">
      {[...Array(maxBars)].map((_, idx) => (
        <div
          key={idx}
          className={`skill-bar-segment ${idx < scaledScore ? 'filled' : ''}`}
        />
      ))}
    </div>
  );
}

// Get difficulty level based on score
function getDifficultyLevel(score, total) {
  if (total === 0) return 'N/A';
  const percentage = score / total;
  if (percentage >= 0.8) return 'Mastered';
  if (percentage >= 0.6) return 'Proficient';
  if (percentage >= 0.4) return 'Developing';
  return 'Needs Practice';
}

export default function PracticeResultsScreen({ scores, answers, questions, practiceType, studentInfo, onRestart }) {
  const [sheetSubmitted, setSheetSubmitted] = useState(false);

  const isRW = practiceType === 'readingWriting';
  const sectionName = isRW ? 'Reading & Writing' : 'Math';
  const domains = isRW ? RW_DOMAINS : MATH_DOMAINS;

  // Calculate totals
  const module1Score = isRW ? (scores.rw1 || 0) : (scores.math1 || 0);
  const module2Score = isRW ? (scores.rw2 || 0) : (scores.math2 || 0);
  const module1Total = questions.filter(q => q.module === 1).length;
  const module2Total = questions.filter(q => q.module === 2).length;
  const totalCorrect = module1Score + module2Score;
  const totalQuestions = module1Total + module2Total;
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Calculate domain scores
  const domainData = calculateDomainScores(questions, answers);

  // Submit to Google Sheets on mount
  useEffect(() => {
    if (!sheetSubmitted && questions) {
      const data = formatResultsForSheet(studentInfo, scores, answers, questions, practiceType);
      submitToGoogleSheets(data).then(result => {
        if (result.success) {
          console.log('Results submitted to Google Sheets');
        }
      });
      setSheetSubmitted(true);
    }
  }, [sheetSubmitted, studentInfo, scores, answers, questions, practiceType]);

  const handleDownload = () => {
    downloadResultsPDF(studentInfo, scores, answers, questions, practiceType);
  };

  return (
    <div className="results-screen">
      <div className="results-container">
        <div className="practice-badge">Practice Session</div>
        <h1>{sectionName} Practice Complete!</h1>

        {studentInfo?.name && (
          <p className="student-greeting">Great work, {studentInfo.name}!</p>
        )}

        <div className="overall-score">
          <div className="score-circle practice-score-circle">
            <span className="score-number">{totalCorrect}</span>
            <span className="score-label">of {totalQuestions}</span>
          </div>
          <p className="percentage">{percentage}% Correct</p>
        </div>

        {/* Export Actions */}
        <div className="export-actions">
          <button onClick={handleDownload} className="export-button download-button">
            📥 Download PDF
          </button>
        </div>

        <div className="score-breakdown">
          <h3>Module Scores</h3>

          <div className="section-scores practice-single-section">
            <div className="section-group full-width">
              <h4>{sectionName}</h4>
              <div className="module-scores">
                <div className="score-box">
                  <span className="module-label">Module 1</span>
                  <span className="module-score">{module1Score}/{module1Total}</span>
                </div>
                <div className="score-box">
                  <span className="module-label">Module 2</span>
                  <span className="module-score">{module2Score}/{module2Total}</span>
                </div>
              </div>
              <div className="section-total">
                Total: {totalCorrect}/{totalQuestions}
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge and Skills Section */}
        <div className="knowledge-skills-section">
          <h2>Knowledge and Skills</h2>
          <p className="section-description">
            View your performance across the content domains.
          </p>

          <div className="domain-section">
            <h3>{sectionName}</h3>
            <div className="domain-grid">
              {domains.map(domain => {
                const score = domainData.scores[domain.id] || 0;
                const total = domainData.totals[domain.id] || 0;
                return (
                  <div key={domain.id} className="domain-card">
                    <div className="domain-header">
                      <h4>{domain.name}</h4>
                      <span className="domain-description">({domain.description})</span>
                    </div>
                    <SkillBar score={score} total={total} />
                    <div className="domain-level">
                      Level: <span className="level-text">{getDifficultyLevel(score, total)}</span>
                    </div>
                    {total > 0 && (
                      <div className="domain-raw-score">
                        {score}/{total} correct
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button onClick={onRestart} className="restart-button">
          Back to Home
        </button>
      </div>
    </div>
  );
}
