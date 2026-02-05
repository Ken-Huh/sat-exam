import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import QuestionDisplay from './QuestionDisplay';
import './Module.css';

export default function MathModule({
  moduleNumber,
  questions,
  timeLimit,
  onComplete
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [moduleAnswers, setModuleAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60);

  const currentQuestion = questions[currentQuestionIndex];

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      const userAnswer = moduleAnswers[question.id];
      const normalizedUserAnswer = userAnswer ? String(userAnswer).trim() : '';
      const normalizedCorrectAnswer = String(question.correctAnswer).trim();
      
      if (normalizedUserAnswer === normalizedCorrectAnswer) {
        correct++;
      }
    });
    return correct;
  };

  useEffect(() => {
    if (timeRemaining <= 0) {
      const score = calculateScore();
      onComplete(moduleAnswers, score);
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, moduleAnswers, questions, onComplete]);

  const handleAnswer = (questionId, answer) => {
    setModuleAnswers({
      ...moduleAnswers,
      [questionId]: answer
    });
  };
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitModule = () => {
    const score = calculateScore();
    onComplete(moduleAnswers, score);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      const userAnswer = moduleAnswers[question.id];
      // For fill-in, normalize the answer (strip spaces, etc.)
      const normalizedUserAnswer = userAnswer ? String(userAnswer).trim() : '';
      const normalizedCorrectAnswer = String(question.correctAnswer).trim();
      
      if (normalizedUserAnswer === normalizedCorrectAnswer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div className="module-container">
      <div className="module-header">
        <h1>Math - Module {moduleNumber}</h1>
        <Timer timeRemaining={timeRemaining} />
      </div>

      <div className="module-content">
        <div className="question-section">
          {currentQuestion && (
            <QuestionDisplay
              question={currentQuestion}
              answer={moduleAnswers[currentQuestion.id]}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          )}
        </div>

        <div className="navigation">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="nav-button"
          >
            Previous
          </button>

          <span className="question-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>

          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNext} className="nav-button next">
              Next
            </button>
          ) : (
            <button onClick={handleSubmitModule} className="nav-button submit">
              Submit Module
            </button>
          )}
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
