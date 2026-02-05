import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import './QuestionDisplay.css';

// Helper function to render LaTeX math expressions
function renderMath(latex, displayMode = false) {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: displayMode
    });
  } catch (e) {
    return latex;
  }
}

// Parse and render text with special formatting
function formatText(text) {
  if (!text) return '';

  let processedText = text;

  // Check for underlined text (marked with __text__)
  processedText = processedText.replace(/__([^_]+)__/g, '<u>$1</u>');

  // Check for bold text (marked with **text**)
  processedText = processedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Check for italic text (marked with *text*)
  processedText = processedText.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  // Render inline math expressions (marked with $...$)
  processedText = processedText.replace(/\$([^$]+)\$/g, (match, latex) => {
    return renderMath(latex, false);
  });

  return processedText;
}

// Component to render passage with rich formatting
function PassageRenderer({ passage, image, imageDescription }) {
  if (!passage && !image) return null;

  // Check if passage has "Text 1" and "Text 2" pattern (cross-text)
  const crossTextMatch = passage?.match(/^(Text 1[\s\S]*?)(Text 2[\s\S]*)$/);
  if (crossTextMatch) {
    return (
      <div className="passage cross-text-passage">
        <div className="text-section">
          <div className="text-label">Text 1</div>
          <div className="text-content">
            <p dangerouslySetInnerHTML={{ __html: formatText(crossTextMatch[1].replace(/^Text 1\s*/, '').trim()) }} />
          </div>
        </div>
        <div className="text-section">
          <div className="text-label">Text 2</div>
          <div className="text-content">
            <p dangerouslySetInnerHTML={{ __html: formatText(crossTextMatch[2].replace(/^Text 2\s*/, '').trim()) }} />
          </div>
        </div>
      </div>
    );
  }

  // Check if passage starts with "The following text is from..." pattern
  const sourceMatch = passage?.match(/^(The following text is from [^.]+\.)\s*([\s\S]*)$/i);
  if (sourceMatch) {
    return (
      <div className="passage">
        <div className="passage-source">{sourceMatch[1]}</div>
        <div className="passage-content">
          <p dangerouslySetInnerHTML={{ __html: formatText(sourceMatch[2]) }} />
        </div>
        {image && <img src={image} alt={imageDescription || 'Question figure'} className="question-image" />}
      </div>
    );
  }

  // Check if passage starts with "While researching a topic..." (notes pattern)
  const notesMatch = passage?.match(/^(While researching a topic, a student has taken the following notes:)\s*([\s\S]*)$/i);
  if (notesMatch) {
    const notes = notesMatch[2].split(/(?=\n•|\n\*)/).filter(n => n.trim());
    return (
      <div className="passage notes-passage">
        <div className="notes-header">{notesMatch[1]}</div>
        <ul className="notes-list">
          {notes.map((note, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatText(note.replace(/^[•*]\s*/, '').trim()) }} />
          ))}
        </ul>
        {image && <img src={image} alt={imageDescription || 'Question figure'} className="question-image" />}
      </div>
    );
  }

  // Check for table pattern (markdown-style tables with |)
  if (passage?.includes('|') && (passage?.includes('---') || passage?.split('|').length > 3)) {
    return (
      <div className="passage">
        <TableRenderer text={passage} />
        {image && <img src={image} alt={imageDescription || 'Question figure'} className="question-image" />}
      </div>
    );
  }

  // Default passage rendering with paragraph preservation
  const paragraphs = passage?.split(/\n\n+/) || [];

  return (
    <div className="passage">
      {paragraphs.map((para, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: formatText(para.trim()) }} />
      ))}
      {image && <img src={image} alt={imageDescription || 'Question figure'} className="question-image" />}
    </div>
  );
}

// Render markdown-style tables
function TableRenderer({ text }) {
  const lines = text.trim().split('\n');

  // Find table lines (containing |)
  let tableStartIdx = -1;
  let tableEndIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('|')) {
      if (tableStartIdx === -1) tableStartIdx = i;
      tableEndIdx = i;
    }
  }

  if (tableStartIdx === -1) {
    return <p dangerouslySetInnerHTML={{ __html: formatText(text) }} />;
  }

  // Get text before table
  const beforeTable = lines.slice(0, tableStartIdx).join('\n').trim();

  // Get table lines
  const tableLines = lines.slice(tableStartIdx, tableEndIdx + 1).filter(line => !line.includes('---'));

  // Get text after table
  const afterTable = lines.slice(tableEndIdx + 1).join('\n').trim();

  // Parse header (first table line)
  const headerCells = tableLines[0]?.split('|').map(cell => cell.trim()).filter(cell => cell) || [];

  // Parse data rows
  const dataRows = tableLines.slice(1).map(line =>
    line.split('|').map(cell => cell.trim()).filter(cell => cell)
  );

  return (
    <>
      {beforeTable && <p dangerouslySetInnerHTML={{ __html: formatText(beforeTable) }} />}
      <table className="data-table">
        <thead>
          <tr>
            {headerCells.map((cell, idx) => (
              <th key={idx} dangerouslySetInnerHTML={{ __html: formatText(cell) }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} dangerouslySetInnerHTML={{ __html: formatText(cell) }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {afterTable && <p dangerouslySetInnerHTML={{ __html: formatText(afterTable) }} />}
    </>
  );
}

// Render question text with equation formatting
function QuestionTextRenderer({ text }) {
  if (!text) return null;

  // Check for system of equations (multiple lines with equations)
  const lines = text.split('\n');
  const hasMultipleLines = lines.length > 1;

  if (hasMultipleLines) {
    // Check if first lines look like equations
    const equationLines = [];
    let questionStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && (line.includes('=') || line.includes('≤') || line.includes('≥')) && line.length < 60 && !line.includes('?')) {
        equationLines.push(line);
        questionStart = i + 1;
      } else if (equationLines.length > 0 || line.length > 60 || line.includes('?')) {
        break;
      }
    }

    if (equationLines.length > 0) {
      const questionText = lines.slice(questionStart).join(' ').trim();
      return (
        <div className="question-with-equations">
          <div className="equation-block">
            {equationLines.map((eq, idx) => (
              <div key={idx} className="equation-line">
                <em dangerouslySetInnerHTML={{ __html: formatText(eq) }} />
              </div>
            ))}
          </div>
          <div className="question-text" dangerouslySetInnerHTML={{ __html: formatText(questionText) }} />
        </div>
      );
    }
  }

  // Default rendering
  return <span dangerouslySetInnerHTML={{ __html: formatText(text) }} />;
}

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
        <h2><QuestionTextRenderer text={question.text} /></h2>
      </div>

      {/* Render passage with image if exists */}
      <PassageRenderer
        passage={question.passage}
        image={question.image}
        imageDescription={question.imageDescription}
      />

      {/* Render standalone image (no passage) */}
      {question.image && !question.passage && (
        <div className="question-figure">
          <img
            src={question.image}
            alt={question.imageDescription || 'Question figure'}
            className="question-image standalone"
          />
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
                <span className="choice-text" dangerouslySetInnerHTML={{ __html: formatText(option.text) }} />
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
