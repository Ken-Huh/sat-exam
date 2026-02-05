import React, { useState } from 'react';
import './TestSelection.css';
import { getAvailableTests, getAvailableRWPracticeSets, getAvailableMathPracticeSets } from '../data/index';

// Get available options dynamically from data
const availableTests = getAvailableTests();
const availableRWPracticeSets = getAvailableRWPracticeSets();
const availableMathPracticeSets = getAvailableMathPracticeSets();

export default function TestSelection({ onSelectTest, onSelectPractice }) {
  const [selectedTest, setSelectedTest] = useState('');
  const [selectedRWPractice, setSelectedRWPractice] = useState('');
  const [selectedMathPractice, setSelectedMathPractice] = useState('');

  const handleStartTest = () => {
    if (selectedTest) {
      onSelectTest(selectedTest);
    }
  };

  const handleStartRWPractice = () => {
    if (selectedRWPractice) {
      onSelectPractice(selectedRWPractice, 'readingWriting');
    }
  };

  const handleStartMathPractice = () => {
    if (selectedMathPractice) {
      onSelectPractice(selectedMathPractice, 'math');
    }
  };

  return (
    <div className="test-selection-container">
      <div className="test-selection-content">
        <h1 className="test-selection-title">SAT Practice</h1>

        {/* Full Practice Test Section */}
        <div className="selection-section">
          <h2 className="section-title">Full-Length Practice Test</h2>
          <div className="selection-form">
            <div className="form-group">
              <label className="form-label">
                Test Type <span className="required">*</span>
              </label>
              <select
                className="test-dropdown"
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
              >
                <option value="">Select</option>
                {availableTests.map(test => (
                  <option key={test.id} value={test.id}>
                    {test.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="start-test-button"
              onClick={handleStartTest}
              disabled={!selectedTest}
            >
              Start Full Test
            </button>
          </div>

          <div className="test-info">
            <h3>What to Expect</h3>
            <ul>
              <li><strong>Section 1:</strong> Reading and Writing (2 modules, 27 questions each, 32 minutes per module)</li>
              <li><strong>Break:</strong> 10 minutes</li>
              <li><strong>Section 2:</strong> Math (2 modules, 22 questions each, 35 minutes per module)</li>
            </ul>
            <p className="total-time">Total test time: approximately 2 hours 14 minutes</p>
          </div>
        </div>

        {/* Section Practice Divider */}
        <div className="section-divider">
          <span>OR</span>
        </div>

        {/* Section Practice */}
        <div className="selection-section practice-section">
          <h2 className="section-title">Section Practice</h2>
          <p className="section-description">Practice individual sections without completing a full test</p>

          <div className="practice-options">
            {/* R/W Practice */}
            <div className="practice-option">
              <div className="form-group">
                <label className="form-label">
                  Reading & Writing Practice
                </label>
                <select
                  className="test-dropdown"
                  value={selectedRWPractice}
                  onChange={(e) => setSelectedRWPractice(e.target.value)}
                  disabled={availableRWPracticeSets.length === 0}
                >
                  <option value="">Select</option>
                  {availableRWPracticeSets.map(set => (
                    <option key={set.id} value={set.id}>
                      {set.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="start-practice-button"
                onClick={handleStartRWPractice}
                disabled={!selectedRWPractice}
              >
                Start R/W Practice
              </button>
              <p className="practice-info">2 modules, 54 questions total, 64 minutes</p>
            </div>

            {/* Math Practice */}
            <div className="practice-option">
              <div className="form-group">
                <label className="form-label">
                  Math Practice
                </label>
                <select
                  className="test-dropdown"
                  value={selectedMathPractice}
                  onChange={(e) => setSelectedMathPractice(e.target.value)}
                  disabled={availableMathPracticeSets.length === 0}
                >
                  <option value="">
                    {availableMathPracticeSets.length === 0 ? 'Coming Soon' : 'Select'}
                  </option>
                  {availableMathPracticeSets.map(set => (
                    <option key={set.id} value={set.id}>
                      {set.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="start-practice-button"
                onClick={handleStartMathPractice}
                disabled={!selectedMathPractice || availableMathPracticeSets.length === 0}
              >
                Start Math Practice
              </button>
              <p className="practice-info">2 modules, 44 questions total, 70 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
