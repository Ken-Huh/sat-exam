import React from 'react';
import './ReviewPage.css';

export default function ReviewPage({
  questions,
  answers,
  flaggedQuestions,
  sectionTitle,
  sectionNumber,
  moduleNumber,
  onQuestionSelect,
  onSubmitModule
}) {
  const getQuestionStatus = (questionId) => {
    const isAnswered = answers[questionId] !== undefined && answers[questionId] !== '';
    const isFlagged = flaggedQuestions.has(questionId);
    return { isAnswered, isFlagged };
  };

  const unansweredCount = questions.filter(q => !answers[q.id] || answers[q.id] === '').length;
  const flaggedCount = questions.filter(q => flaggedQuestions.has(q.id)).length;

  return (
    <div className="review-page">
      <div className="review-banner">
        THIS IS A PRACTICE TEST
      </div>

      <div className="review-content">
        <h1>Check Your Work</h1>

        <p className="review-instructions">
          On test day, you won't be able to move on to the next module until time expires.
        </p>
        <p className="review-instructions">
          For these practice questions, you can click <strong>Next</strong> when you're ready to move on.
        </p>

        <div className="review-card">
          <div className="review-card-header">
            <h2>Section {sectionNumber}, Module {moduleNumber}: {sectionTitle}</h2>
            <div className="status-legend">
              <span className="legend-item">
                <span className="status-box unanswered"></span> Unanswered
              </span>
              <span className="legend-item">
                <span className="status-flag">▶</span> For Review
              </span>
            </div>
          </div>

          <div className="review-grid">
            {questions.map((question, index) => {
              const { isAnswered, isFlagged } = getQuestionStatus(question.id);

              let className = 'review-cell';
              if (!isAnswered) className += ' unanswered';
              if (isFlagged) className += ' flagged';

              return (
                <button
                  key={question.id}
                  className={className}
                  onClick={() => onQuestionSelect(index)}
                >
                  {isFlagged && <span className="cell-flag">▶</span>}
                  <span className="cell-number">{index + 1}</span>
                </button>
              );
            })}
          </div>

          <div className="review-summary">
            {unansweredCount > 0 && (
              <p className="summary-warning">
                You have {unansweredCount} unanswered question{unansweredCount !== 1 ? 's' : ''}.
              </p>
            )}
            {flaggedCount > 0 && (
              <p className="summary-info">
                You have {flaggedCount} question{flaggedCount !== 1 ? 's' : ''} marked for review.
              </p>
            )}
          </div>
        </div>

        <div className="review-actions">
          <button className="submit-module-button" onClick={onSubmitModule}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
