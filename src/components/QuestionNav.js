import React, { useState } from 'react';
import './QuestionNav.css';

export default function QuestionNav({
  questions,
  currentIndex,
  answers,
  flaggedQuestions,
  onQuestionSelect,
  sectionTitle,
  moduleNumber
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getQuestionStatus = (questionId, index) => {
    const isAnswered = answers[questionId] !== undefined && answers[questionId] !== '';
    const isFlagged = flaggedQuestions.has(questionId);
    const isCurrent = index === currentIndex;

    return { isAnswered, isFlagged, isCurrent };
  };

  return (
    <div className="question-nav-container">
      <button
        className="question-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Question {currentIndex + 1} of {questions.length}
        <span className={`toggle-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="question-nav-dropdown">
          <div className="dropdown-header">
            <h3>Section {moduleNumber <= 2 ? '1' : '2'}, Module {moduleNumber <= 2 ? moduleNumber : moduleNumber - 2}: {sectionTitle}</h3>
            <button className="close-dropdown" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="nav-legend">
            <span className="legend-item">
              <span className="legend-icon current">◇</span> Current
            </span>
            <span className="legend-item">
              <span className="legend-icon unanswered">□</span> Unanswered
            </span>
            <span className="legend-item">
              <span className="legend-icon flagged">▶</span> For Review
            </span>
          </div>

          <div className="question-grid">
            {questions.map((question, index) => {
              const { isAnswered, isFlagged, isCurrent } = getQuestionStatus(question.id, index);

              let className = 'question-cell';
              if (isCurrent) className += ' current';
              if (!isAnswered) className += ' unanswered';
              if (isAnswered) className += ' answered';
              if (isFlagged) className += ' flagged';

              return (
                <button
                  key={question.id}
                  className={className}
                  onClick={() => {
                    onQuestionSelect(index);
                    setIsOpen(false);
                  }}
                >
                  {isCurrent && <span className="current-marker">◇</span>}
                  {isFlagged && <span className="flag-marker">▶</span>}
                  <span className="question-num">{index + 1}</span>
                </button>
              );
            })}
          </div>

          <button
            className="review-page-button"
            onClick={() => {
              onQuestionSelect('review');
              setIsOpen(false);
            }}
          >
            Go to Review Page
          </button>
        </div>
      )}
    </div>
  );
}
