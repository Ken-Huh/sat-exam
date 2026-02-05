import React from 'react';
import './QuestionDisplay.css';

export default function QuestionDisplay({
  question,
  answer,
  onAnswer,
  questionNumber,
  totalQuestions
}) {
  const handleMultipleChoice = (letter) => {
    onAnswer(question.id, letter);
  };

  const handleFillIn = (e) => {
    onAnswer(question.id, e.target.value);
  };

  return (
    <div className="question-display">
      <div className="question-header">
        <span className="question-number">{questionNumber}</span>
        <h2>{question.text}</h2>
      </div>

      {question.passage && (
        <div className="passage">
          <p>{question.passage}</p>
        </div>
      )}

      <div className="answer-section">
        {question.type === 'multipleChoice' ? (
          <div className="multiple-choice">
            {question.options.map(option => (
              <button
                key={option.letter}
                className={`choice-button ${
                  answer === option.letter ? 'selected' : ''
                }`}
                onClick={() => handleMultipleChoice(option.letter)}
              >
                <span className="choice-letter">{option.letter}</span>
                <span className="choice-text">{option.text}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="fill-in">
            <input
              type="text"
              className="fill-in-input"
              value={answer || ''}
              onChange={handleFillIn}
              placeholder="Enter your answer"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}
