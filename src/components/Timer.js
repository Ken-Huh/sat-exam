import React from 'react';
import './Timer.css';

export default function Timer({ timeRemaining }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getTimerClass = () => {
    if (timeRemaining <= 60) return 'critical';
    if (timeRemaining <= 300) return 'warning';
    return 'normal';
  };

  return (
    <div className={`timer ${getTimerClass()}`}>
      <span className="time-remaining">{formatTime(timeRemaining)}</span>
    </div>
  );
}
