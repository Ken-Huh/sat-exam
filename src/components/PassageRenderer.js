import React from 'react';
import './PassageRenderer.css';

// Helper function to format text
function formatText(text) {
  if (!text) return '';
  let processed = text;
  processed = processed.replace(/__([^_]+)__/g, '<u>$1</u>');
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  processed = processed.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  return processed;
}

export default function PassageRenderer({ passage, image, imageDescription }) {
  if (!passage && !image) return null;

  // Check if passage has "Text 1" and "Text 2" pattern (cross-text)
  const crossTextMatch = passage?.match(/^(Text 1[\s\S]*?)(Text 2[\s\S]*)$/);
  if (crossTextMatch) {
    return (
      <div className="passage-renderer cross-text">
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
      <div className="passage-renderer">
        <div className="passage-source">{sourceMatch[1]}</div>
        <div className="passage-content">
          <p dangerouslySetInnerHTML={{ __html: formatText(sourceMatch[2]) }} />
        </div>
        {image && <img src={image} alt={imageDescription || 'Figure'} className="passage-image" />}
      </div>
    );
  }

  // Check if passage starts with "While researching a topic..." (notes pattern)
  const notesMatch = passage?.match(/^(While researching a topic, a student has taken the following notes:)\s*([\s\S]*)$/i);
  if (notesMatch) {
    const notes = notesMatch[2].split(/(?=\n•|\n\*)/).filter(n => n.trim());
    return (
      <div className="passage-renderer notes-style">
        <div className="notes-header">{notesMatch[1]}</div>
        <ul className="notes-list">
          {notes.map((note, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatText(note.replace(/^[•*]\s*/, '').trim()) }} />
          ))}
        </ul>
        {image && <img src={image} alt={imageDescription || 'Figure'} className="passage-image" />}
      </div>
    );
  }

  // Check for table pattern
  if (passage?.includes('|') && (passage?.includes('---') || passage?.split('|').length > 3)) {
    return (
      <div className="passage-renderer">
        <TableRenderer text={passage} />
        {image && <img src={image} alt={imageDescription || 'Figure'} className="passage-image" />}
      </div>
    );
  }

  // Default passage rendering
  const paragraphs = passage?.split(/\n\n+/) || [];

  return (
    <div className="passage-renderer">
      {paragraphs.map((para, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: formatText(para.trim()) }} />
      ))}
      {image && <img src={image} alt={imageDescription || 'Figure'} className="passage-image" />}
    </div>
  );
}

// Table renderer component
function TableRenderer({ text }) {
  const lines = text.trim().split('\n');

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

  const beforeTable = lines.slice(0, tableStartIdx).join('\n').trim();
  const tableLines = lines.slice(tableStartIdx, tableEndIdx + 1).filter(line => !line.includes('---'));
  const afterTable = lines.slice(tableEndIdx + 1).join('\n').trim();

  const headerCells = tableLines[0]?.split('|').map(cell => cell.trim()).filter(cell => cell) || [];
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
