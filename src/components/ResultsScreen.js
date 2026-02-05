import React from 'react';
import './ResultsScreen.css';

export default function ResultsScreen({ scores, answers, onRestart }) {
  const totalCorrect = (scores.rw1 || 0) + (scores.rw2 || 0) + (scores.math1 || 0) + (scores.math2 || 0);
  const totalQuestions = 54 + 44; // 27*2 RW + 22*2 Math
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <div className="results-screen">
      <div className="results-container">
        <h1>Exam Complete</h1>
        
        <div className="overall-score">
          <h2>{totalCorrect} out of {totalQuestions} Correct</h2>
          <p className="percentage">{percentage}%</p>
        </div>

        <div className="score-breakdown">
          <h3>Section Scores</h3>
          
          <div className="section-scores">
            <div className="score-box">
              <h4>Reading & Writing Module 1</h4>
              <p className="score">{scores.rw1 || 0} / 27</p>
            </div>
            <div className="score-box">
              <h4>Reading & Writing Module 2</h4>
              <p className="score">{scores.rw2 || 0} / 27</p>
            </div>
            <div className="score-box">
              <h4>Math Module 1</h4>
              <p className="score">{scores.math1 || 0} / 22</p>
            </div>
            <div className="score-box">
              <h4>Math Module 2</h4>
              <p className="score">{scores.math2 || 0} / 22</p>
            </div>
          </div>
        </div>

        <div className="rw-total">
          <p>Reading & Writing Total: {(scores.rw1 || 0) + (scores.rw2 || 0)} / 54</p>
        </div>
        <div className="math-total">
          <p>Math Total: {(scores.math1 || 0) + (scores.math2 || 0)} / 44</p>
        </div>

        <button onClick={onRestart} className="restart-button">
          Take Another Practice Test
        </button>
      </div>
    </div>
  );
}
