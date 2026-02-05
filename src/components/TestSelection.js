import React, { useState } from 'react';
import './TestSelection.css';
import { getAvailableTests } from '../data/index';

// Get available tests dynamically from data
const availableTests = getAvailableTests();

export default function TestSelection({ onSelectTest }) {
  const [selectedTest, setSelectedTest] = useState('');

  const handleStartTest = () => {
    if (selectedTest) {
      onSelectTest(selectedTest);
    }
  };

  return (
    <div className="test-selection-container">
      <div className="test-selection-content">
        <h1 className="test-selection-title">Choose a Full-Length Practice</h1>

        <div className="selection-form">
          <div className="form-group">
            <label className="form-label">
              Test Type <span className="required">*</span>
              <span className="required-note">* = Required</span>
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
            Start Practice Test
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
    </div>
  );
}
