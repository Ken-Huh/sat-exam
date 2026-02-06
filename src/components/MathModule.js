import React, { useState, useEffect, useCallback } from 'react';
import Timer from './Timer';
import QuestionNav from './QuestionNav';
import ReviewPage from './ReviewPage';
import PassageRenderer from './PassageRenderer';
import DesmosCalculator from './DesmosCalculator';
import './Module.css';
import './DesmosCalculator.css';

// Helper function to format text with underlines, bold, etc.
function formatText(text) {
  if (!text) return '';
  let processed = text;
  processed = processed.replace(/__([^_]+)__/g, '<u>$1</u>');
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return processed;
}

// Format equation text (handle newlines for systems of equations)
function formatEquationText(text) {
  if (!text) return { equations: [], questionText: text };

  const lines = text.split('\n');
  const equations = [];
  let questionStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && (line.includes('=') || line.includes('≤') || line.includes('≥')) && line.length < 60 && !line.includes('?')) {
      equations.push(line);
      questionStart = i + 1;
    } else if (equations.length > 0 || line.length > 60 || line.includes('?')) {
      break;
    }
  }

  const questionText = lines.slice(questionStart).join(' ').trim();
  return { equations, questionText };
}

export default function MathModule({
  moduleNumber,
  questions,
  timeLimit,
  onComplete
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [moduleAnswers, setModuleAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60);
  const [showReview, setShowReview] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Determine if current question needs split view (has visual content)
  // Split view is shown when: hasVisual is true, or there's an image, or there's a passage
  const needsSplitView = currentQuestion && (
    currentQuestion.hasVisual === true ||
    currentQuestion.image ||
    currentQuestion.passage
  );

  const calculateScore = useCallback(() => {
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
  }, [questions, moduleAnswers]);

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
  }, [timeRemaining, moduleAnswers, onComplete, calculateScore]);

  const handleAnswer = (questionId, answer) => {
    setModuleAnswers({
      ...moduleAnswers,
      [questionId]: answer
    });
  };

  const handleToggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestion.id)) {
      newFlagged.delete(currentQuestion.id);
    } else {
      newFlagged.add(currentQuestion.id);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowReview(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionSelect = (index) => {
    if (index === 'review') {
      setShowReview(true);
    } else {
      setShowReview(false);
      setCurrentQuestionIndex(index);
    }
  };

  const handleSubmitModule = () => {
    const score = calculateScore();
    onComplete(moduleAnswers, score);
  };

  // Show Review Page
  if (showReview) {
    return (
      <ReviewPage
        questions={questions}
        answers={moduleAnswers}
        flaggedQuestions={flaggedQuestions}
        sectionTitle="Math Questions"
        sectionNumber={2}
        moduleNumber={moduleNumber}
        onQuestionSelect={handleQuestionSelect}
        onSubmitModule={handleSubmitModule}
      />
    );
  }

  // Parse question text for equations
  const { equations, questionText } = formatEquationText(currentQuestion?.text);

  return (
    <div className="module-container">
      {/* Top Header */}
      <div className="module-header">
        <h1>Section 2, Module {moduleNumber}: Math</h1>
        <div className="header-actions">
          <Timer timeRemaining={timeRemaining} />
        </div>
      </div>

      {/* Main Content - Split view for visual questions, single page otherwise */}
      {needsSplitView ? (
        // Split view layout (like R/W section)
        <div className="module-content">
          {/* Left Panel - Figure/Graph/Passage */}
          <div className="passage-panel">
            {currentQuestion?.passage ? (
              <PassageRenderer
                passage={currentQuestion.passage}
                image={currentQuestion.image}
                imageDescription={currentQuestion.imageDescription}
              />
            ) : currentQuestion?.image ? (
              <div className="question-figure">
                <img
                  src={currentQuestion.image}
                  alt={currentQuestion.imageDescription || 'Question figure'}
                  className="question-image"
                />
              </div>
            ) : equations.length > 0 ? (
              <div className="equation-display">
                {equations.map((eq, idx) => (
                  <div key={idx} className="equation-line">
                    <em>{eq}</em>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-passage">
                <p>Reference material for this question.</p>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="panel-divider" />

          {/* Right Panel - Question */}
          <div className="question-panel">
            {currentQuestion && (
              <>
                <div className="question-header-bar">
                  <span className="question-number-badge">{currentQuestionIndex + 1}</span>
                  <button
                    className={`mark-review-button ${flaggedQuestions.has(currentQuestion.id) ? 'flagged' : ''}`}
                    onClick={handleToggleFlag}
                  >
                    <span className="flag-icon">▶</span>
                    Mark for Review
                  </button>
                </div>

                <div
                  className="question-text"
                  dangerouslySetInnerHTML={{ __html: formatText(equations.length > 0 ? questionText : currentQuestion.text) }}
                />

                {currentQuestion.type === 'multipleChoice' ? (
                  <div className="answer-choices">
                    {currentQuestion.options.map(option => (
                      <div
                        key={option.letter}
                        className={`choice-option ${moduleAnswers[currentQuestion.id] === option.letter ? 'selected' : ''}`}
                        onClick={() => handleAnswer(currentQuestion.id, option.letter)}
                      >
                        <div className="choice-letter-circle">{option.letter}</div>
                        <div
                          className="choice-content"
                          dangerouslySetInnerHTML={{ __html: formatText(option.text) }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="fill-in-answer">
                    <input
                      type="text"
                      className="fill-in-input"
                      value={moduleAnswers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      placeholder="Enter your answer"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        // Single page layout (no visual content)
        <div className="module-content single-page">
          <div className="question-panel full-width">
            {currentQuestion && (
              <>
                <div className="question-header-bar">
                  <span className="question-number-badge">{currentQuestionIndex + 1}</span>
                  <button
                    className={`mark-review-button ${flaggedQuestions.has(currentQuestion.id) ? 'flagged' : ''}`}
                    onClick={handleToggleFlag}
                  >
                    <span className="flag-icon">▶</span>
                    Mark for Review
                  </button>
                </div>

                {/* Show equations if present */}
                {equations.length > 0 && (
                  <div className="inline-equation-display">
                    {equations.map((eq, idx) => (
                      <div key={idx} className="equation-line">
                        <em>{eq}</em>
                      </div>
                    ))}
                  </div>
                )}

                <div
                  className="question-text"
                  dangerouslySetInnerHTML={{ __html: formatText(equations.length > 0 ? questionText : currentQuestion.text) }}
                />

                {currentQuestion.type === 'multipleChoice' ? (
                  <div className="answer-choices">
                    {currentQuestion.options.map(option => (
                      <div
                        key={option.letter}
                        className={`choice-option ${moduleAnswers[currentQuestion.id] === option.letter ? 'selected' : ''}`}
                        onClick={() => handleAnswer(currentQuestion.id, option.letter)}
                      >
                        <div className="choice-letter-circle">{option.letter}</div>
                        <div
                          className="choice-content"
                          dangerouslySetInnerHTML={{ __html: formatText(option.text) }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="fill-in-answer">
                    <input
                      type="text"
                      className="fill-in-input"
                      value={moduleAnswers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      placeholder="Enter your answer"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Bottom Footer */}
      <div className="module-footer">
        <div className="footer-left">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="nav-button back"
          >
            Back
          </button>
        </div>

        <div className="footer-center">
          <QuestionNav
            questions={questions}
            currentIndex={currentQuestionIndex}
            answers={moduleAnswers}
            flaggedQuestions={flaggedQuestions}
            onQuestionSelect={handleQuestionSelect}
            sectionTitle="Math Questions"
            moduleNumber={moduleNumber + 2}
          />
        </div>

        <div className="footer-right">
          <button onClick={handleNext} className="nav-button next">
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Review'}
          </button>
        </div>
      </div>

      {/* Calculator Button */}
      <button
        className="calculator-button"
        onClick={() => setShowCalculator(true)}
        title="Open Calculator"
      >
        🔢
      </button>
      <div className="calculator-tooltip">Calculator</div>

      {/* Desmos Calculator Modal */}
      {showCalculator && (
        <DesmosCalculator onClose={() => setShowCalculator(false)} />
      )}
    </div>
  );
}
