import React from 'react';
import './ExamStart.css';

export default function ExamStart({ onStart }) {
  return (
    <div className="exam-start">
      <div className="start-container">
        <h1>SAT Mock Exam</h1>
        
        <div className="instructions">
          <h2>Exam Structure</h2>
          <div className="instruction-block">
            <h3>Reading & Writing</h3>
            <p>Module 1: 27 questions, 32 minutes</p>
            <p>Module 2: 27 questions, 32 minutes</p>
          </div>

          <div className="instruction-block">
            <h3>10-Minute Break</h3>
            <p>Relax and prepare for the Math section</p>
          </div>

          <div className="instruction-block">
            <h3>Math</h3>
            <p>Module 1: 22 questions, 35 minutes</p>
            <p>Module 2: 22 questions, 35 minutes</p>
          </div>

          <div className="instruction-block warning">
            <h3>Important Notes</h3>
            <ul>
              <li>Time limits are strictly enforced</li>
              <li>You can review previous questions within a module</li>
              <li>Your score will be calculated at the end</li>
              <li>No explanations will be provided</li>
            </ul>
          </div>
        </div>

        <button onClick={onStart} className="start-button">
          Begin Exam
        </button>
      </div>
    </div>
  );
}
