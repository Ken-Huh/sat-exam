import React, { useState, useEffect, useCallback, useRef } from 'react';
import Timer from './Timer';
import QuestionNav from './QuestionNav';
import ReviewPage from './ReviewPage';
import PassageRenderer from './PassageRenderer';
import { renderMathText } from '../utils/latexRenderer';
import useHighlighter, { applyHighlightsToDOM } from '../hooks/useHighlighter';
import './Module.css';

// Helper function to format text with underlines, bold, and LaTeX math
function formatText(text) {
  if (!text) return '';
  let processed = text;
  // First handle markdown formatting
  processed = processed.replace(/__([^_]+)__/g, '<u>$1</u>');
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Then render LaTeX math expressions
  processed = renderMathText(processed, true);
  return processed;
}

// Highlight Toolbar Component
function HighlightToolbar({ state, onHighlight }) {
  if (!state) return null;

  return (
    <div
      className="highlight-toolbar"
      style={{
        left: `${state.x}px`,
        top: `${state.y}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <button
        className="highlight-btn-yellow"
        onClick={() => onHighlight('yellow')}
        title="Highlight yellow"
      />
      <button
        className="highlight-btn-green"
        onClick={() => onHighlight('green')}
        title="Highlight green"
      />
      <button
        className="highlight-btn-blue"
        onClick={() => onHighlight('blue')}
        title="Highlight blue"
      />
      <button
        className="highlight-btn-pink"
        onClick={() => onHighlight('pink')}
        title="Highlight pink"
      />
    </div>
  );
}

// Annotation Popup Component
function AnnotationPopup({ popup, highlights, onSave, onDelete, onClose }) {
  const [noteText, setNoteText] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (popup && highlights) {
      const hl = highlights.find(h => h.id === popup.highlightId);
      setNoteText(hl?.note || '');
      // Focus textarea after mount
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  }, [popup, highlights]);

  if (!popup) return null;

  const highlight = highlights?.find(h => h.id === popup.highlightId);
  if (!highlight) return null;

  return (
    <div
      className="annotation-popup"
      style={{
        left: `${Math.min(popup.x, window.innerWidth - 280)}px`,
        top: `${popup.y}px`,
      }}
    >
      <textarea
        ref={textareaRef}
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Add a note..."
      />
      <div className="annotation-popup-actions">
        <button
          className="annotation-delete-btn"
          onClick={() => onDelete(popup.questionId, popup.highlightId)}
        >
          Remove
        </button>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button className="annotation-cancel-btn" onClick={onClose}>Cancel</button>
          <button
            className="annotation-save-btn"
            onClick={() => {
              onSave(popup.questionId, popup.highlightId, noteText);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ReadingWritingModule({
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

  const currentQuestion = questions[currentQuestionIndex];

  // Highlight feature
  const {
    passageRef,
    toolbarState,
    annotationPopup,
    setCurrentQuestion,
    getHighlights,
    handleMouseUp,
    applyHighlight,
    removeHighlight,
    updateNote,
    showAnnotation,
    closeAnnotation,
  } = useHighlighter();

  // Track current question for highlights
  useEffect(() => {
    if (currentQuestion) {
      setCurrentQuestion(currentQuestion.id);
    }
  }, [currentQuestion, setCurrentQuestion]);

  // Re-apply highlights after passage renders
  useEffect(() => {
    if (!passageRef.current || !currentQuestion) return;

    // Small delay to ensure DOM has rendered
    const timer = setTimeout(() => {
      const highlights = getHighlights(currentQuestion.id);
      if (highlights.length > 0 && passageRef.current) {
        applyHighlightsToDOM(
          passageRef.current,
          highlights,
          (highlightId, x, y) => {
            showAnnotation(highlightId, currentQuestion.id, x, y);
          }
        );
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentQuestionIndex, currentQuestion, getHighlights, showAnnotation, passageRef]);

  const calculateScore = useCallback(() => {
    let correct = 0;
    questions.forEach(question => {
      if (moduleAnswers[question.id] === question.correctAnswer) {
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
        sectionTitle="Reading and Writing Questions"
        sectionNumber={1}
        moduleNumber={moduleNumber}
        onQuestionSelect={handleQuestionSelect}
        onSubmitModule={handleSubmitModule}
      />
    );
  }

  // Get highlight count for current question
  const currentHighlights = currentQuestion ? getHighlights(currentQuestion.id) : [];

  return (
    <div className="module-container">
      {/* Top Header */}
      <div className="module-header">
        <h1>Section 1, Module {moduleNumber}: Reading and Writing</h1>
        <div className="header-actions">
          <Timer timeRemaining={timeRemaining} />
        </div>
      </div>

      {/* Main Split Content */}
      <div className="module-content">
        {/* Left Panel - Passage (highlightable) */}
        <div
          className="passage-panel"
          ref={passageRef}
          onMouseUp={handleMouseUp}
        >
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
          ) : (
            <div className="no-passage">
              <p>This question has no passage.</p>
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
                {currentHighlights.length > 0 && (
                  <span className="highlight-count">
                    {currentHighlights.length} highlight{currentHighlights.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              <div
                className="question-text"
                dangerouslySetInnerHTML={{ __html: formatText(currentQuestion.text) }}
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

      {/* Highlight Toolbar (appears on text selection) */}
      <HighlightToolbar
        state={toolbarState}
        onHighlight={applyHighlight}
      />

      {/* Annotation Popup (appears when clicking a highlight) */}
      <AnnotationPopup
        popup={annotationPopup}
        highlights={currentHighlights}
        onSave={updateNote}
        onDelete={removeHighlight}
        onClose={closeAnnotation}
      />

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
            sectionTitle="Reading and Writing Questions"
            moduleNumber={moduleNumber}
          />
        </div>

        <div className="footer-right">
          <button onClick={handleNext} className="nav-button next">
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Review'}
          </button>
        </div>
      </div>
    </div>
  );
}
