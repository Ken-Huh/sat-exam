import React, { useEffect, useState } from 'react';
import './ResultsScreen.css';
import {
  submitToGoogleSheets,
  formatResultsForSheet,
  downloadResultsAsText,
  emailResults
} from '../utils/resultsExport';

// Domain categories
const RW_DOMAINS = [
  { id: 'information_ideas', name: 'Information and Ideas', description: '26% of test section, 12-14 questions' },
  { id: 'craft_structure', name: 'Craft and Structure', description: '28% of test section, 13-15 questions' },
  { id: 'expression_ideas', name: 'Expression of Ideas', description: '20% of test section, 8-12 questions' },
  { id: 'standard_conventions', name: 'Standard English Conventions', description: '26% of test section, 11-15 questions' }
];

const MATH_DOMAINS = [
  { id: 'algebra', name: 'Algebra', description: '35% of test section, 13-15 questions' },
  { id: 'advanced_math', name: 'Advanced Math', description: '35% of test section, 13-15 questions' },
  { id: 'problem_solving', name: 'Problem-Solving and Data Analysis', description: '15% of test section, 5-7 questions' },
  { id: 'geometry', name: 'Geometry and Trigonometry', description: '15% of test section, 5-7 questions' }
];

// Calculate domain scores
function calculateDomainScores(questions, answers, section) {
  const allQuestions = section === 'rw'
    ? questions.readingWriting
    : questions.math;

  const domainScores = {};
  const domainTotals = {};

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

// Skill bar component
function SkillBar({ score, total, maxBars = 7 }) {
  // Scale score to 0-7 range
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

export default function ResultsScreen({ scores, answers, questions, studentInfo, onRestart }) {
  const [sheetSubmitted, setSheetSubmitted] = useState(false);

  const totalCorrect = (scores.rw1 || 0) + (scores.rw2 || 0) + (scores.math1 || 0) + (scores.math2 || 0);
  const totalQuestions = 54 + 44; // 27*2 RW + 22*2 Math
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);

  // Calculate domain scores
  const rwDomainData = questions ? calculateDomainScores(questions, answers, 'rw') : { scores: {}, totals: {} };
  const mathDomainData = questions ? calculateDomainScores(questions, answers, 'math') : { scores: {}, totals: {} };

  // Submit to Google Sheets on mount
  useEffect(() => {
    if (!sheetSubmitted && questions) {
      const data = formatResultsForSheet(studentInfo, scores, answers, questions, null);
      submitToGoogleSheets(data).then(result => {
        if (result.success) {
          console.log('Results submitted to Google Sheets');
        }
      });
      setSheetSubmitted(true);
    }
  }, [sheetSubmitted, studentInfo, scores, answers, questions]);

  const handleDownload = () => {
    downloadResultsAsText(studentInfo, scores, answers, questions, null);
  };

  const handleEmail = () => {
    emailResults(studentInfo, scores, answers, questions, null);
  };

  return (
    <div className="results-screen">
      <div className="results-container">
        <h1>Practice Test Complete!</h1>

        {studentInfo?.name && (
          <p className="student-greeting">Great work, {studentInfo.name}!</p>
        )}

        <div className="overall-score">
          <div className="score-circle">
            <span className="score-number">{totalCorrect}</span>
            <span className="score-label">of {totalQuestions}</span>
          </div>
          <p className="percentage">{percentage}% Correct</p>
        </div>

        {/* Export Actions */}
        <div className="export-actions">
          <button onClick={handleDownload} className="export-button download-button">
            📥 Download Results
          </button>
          <button onClick={handleEmail} className="export-button email-button">
            ✉️ Email Results
          </button>
        </div>

        <div className="score-breakdown">
          <h3>Section Scores</h3>

          <div className="section-scores">
            <div className="section-group">
              <h4>Reading & Writing</h4>
              <div className="module-scores">
                <div className="score-box">
                  <span className="module-label">Module 1</span>
                  <span className="module-score">{scores.rw1 || 0}/27</span>
                </div>
                <div className="score-box">
                  <span className="module-label">Module 2</span>
                  <span className="module-score">{scores.rw2 || 0}/27</span>
                </div>
              </div>
              <div className="section-total">
                Total: {(scores.rw1 || 0) + (scores.rw2 || 0)}/54
              </div>
            </div>

            <div className="section-group">
              <h4>Math</h4>
              <div className="module-scores">
                <div className="score-box">
                  <span className="module-label">Module 1</span>
                  <span className="module-score">{scores.math1 || 0}/22</span>
                </div>
                <div className="score-box">
                  <span className="module-label">Module 2</span>
                  <span className="module-score">{scores.math2 || 0}/22</span>
                </div>
              </div>
              <div className="section-total">
                Total: {(scores.math1 || 0) + (scores.math2 || 0)}/44
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge and Skills Section */}
        <div className="knowledge-skills-section">
          <h2>
            Knowledge and Skills
            <span className="new-badge">New!</span>
          </h2>
          <p className="section-description">
            View your performance across the 8 content domains measured on the SAT.
          </p>

          <div className="domain-section">
            <h3>Reading and Writing</h3>
            <div className="domain-grid">
              {RW_DOMAINS.map(domain => {
                const score = rwDomainData.scores[domain.id] || 0;
                const total = rwDomainData.totals[domain.id] || 0;
                return (
                  <div key={domain.id} className="domain-card">
                    <div className="domain-header">
                      <h4>{domain.name}</h4>
                      <span className="domain-description">({domain.description})</span>
                    </div>
                    <SkillBar score={score} total={total} />
                    <div className="domain-level">
                      Difficulty level: <span className="level-text">{getDifficultyLevel(score, total)}</span>
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

          <div className="domain-section">
            <h3>Math</h3>
            <div className="domain-grid">
              {MATH_DOMAINS.map(domain => {
                const score = mathDomainData.scores[domain.id] || 0;
                const total = mathDomainData.totals[domain.id] || 0;
                return (
                  <div key={domain.id} className="domain-card">
                    <div className="domain-header">
                      <h4>{domain.name}</h4>
                      <span className="domain-description">({domain.description})</span>
                    </div>
                    <SkillBar score={score} total={total} />
                    <div className="domain-level">
                      Difficulty level: <span className="level-text">{getDifficultyLevel(score, total)}</span>
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
          Take Another Practice Test
        </button>
      </div>
    </div>
  );
}
