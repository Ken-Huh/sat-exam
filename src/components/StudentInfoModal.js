import React, { useState } from 'react';
import './StudentInfoModal.css';

export default function StudentInfoModal({ onSubmit, onCancel, testType }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: name.trim(), email: email.trim() });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Before You Begin</h2>
        <p className="modal-subtitle">
          Enter your information to save and track your results.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="student-name">Your Name *</label>
            <input
              type="text"
              id="student-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="student-email">
              Email <span className="optional">(optional - for emailing results)</span>
            </label>
            <input
              type="email"
              id="student-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="modal-info">
            <p>
              <strong>Test:</strong> {testType}
            </p>
            <p className="privacy-note">
              Your results will be saved for your tutor to review your progress.
            </p>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="start-button" disabled={!name.trim()}>
              Start Test
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
