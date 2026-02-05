import React, { useState, useEffect } from 'react';
import './BreakScreen.css';

export default function BreakScreen({ onBreakComplete }) {
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(10 * 60); // 10 minutes

  useEffect(() => {
    if (breakTimeRemaining <= 0) {
      onBreakComplete();
      return;
    }

    const timer = setInterval(() => {
      setBreakTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [breakTimeRemaining, onBreakComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="break-screen">
      <div className="break-container">
        <h1>10-Minute Break</h1>
        <p>You've completed Reading & Writing. Get some rest!</p>
        
        <div className="break-timer">
          <h2>{formatTime(breakTimeRemaining)}</h2>
          <p>Time remaining before Math section begins</p>
        </div>

        <button
          onClick={onBreakComplete}
          className="continue-button"
        >
          Continue to Math
        </button>
      </div>
    </div>
  );
}
