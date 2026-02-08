import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Custom hook for managing text highlights and annotations in passages.
 * Stores highlights per question, persists across question navigation.
 *
 * Usage:
 *   const { highlights, toolbarState, ... } = useHighlighter(containerRef);
 */
export default function useHighlighter() {
  // Map of questionId -> array of highlight objects
  // Each highlight: { id, text, startOffset, endOffset, color, note }
  const [allHighlights, setAllHighlights] = useState({});

  // Toolbar state
  const [toolbarState, setToolbarState] = useState(null); // { x, y, selectionText, range }

  // Annotation popup state
  const [annotationPopup, setAnnotationPopup] = useState(null); // { highlightId, questionId, x, y }

  // Ref to the passage container DOM element
  const passageRef = useRef(null);

  // Current question ID for tracking
  const currentQuestionIdRef = useRef(null);

  /**
   * Set the current question ID (call when question changes)
   */
  const setCurrentQuestion = useCallback((questionId) => {
    currentQuestionIdRef.current = questionId;
    setToolbarState(null);
    setAnnotationPopup(null);
  }, []);

  /**
   * Get highlights for a specific question
   */
  const getHighlights = useCallback((questionId) => {
    return allHighlights[questionId] || [];
  }, [allHighlights]);

  /**
   * Handle text selection (mouseup) in the passage
   */
  const handleMouseUp = useCallback((e) => {
    // Small delay to let selection finalize
    setTimeout(() => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        // No selection or empty selection
        setToolbarState(null);
        return;
      }

      // Make sure selection is within the passage container
      const container = passageRef.current;
      if (!container) return;

      const range = selection.getRangeAt(0);
      if (!container.contains(range.commonAncestorContainer)) {
        return;
      }

      const selectedText = selection.toString().trim();
      if (selectedText.length < 2) return; // Ignore very short selections

      // Position toolbar above the selection
      const rect = range.getBoundingClientRect();
      const toolbarX = rect.left + rect.width / 2;
      const toolbarY = rect.top - 10;

      setToolbarState({
        x: toolbarX,
        y: toolbarY,
        selectionText: selectedText,
        range: range.cloneRange(),
      });
    }, 10);
  }, []);

  /**
   * Apply a highlight with the given color
   */
  const applyHighlight = useCallback((color) => {
    if (!toolbarState || !toolbarState.range) return;

    const questionId = currentQuestionIdRef.current;
    if (!questionId) return;

    const container = passageRef.current;
    if (!container) return;

    // Calculate text offset within the container
    const { startOffset, endOffset } = getTextOffsets(container, toolbarState.range);

    const highlight = {
      id: `hl_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      text: toolbarState.selectionText,
      startOffset,
      endOffset,
      color,
      note: '',
    };

    setAllHighlights(prev => ({
      ...prev,
      [questionId]: [...(prev[questionId] || []), highlight],
    }));

    // Clear selection
    window.getSelection()?.removeAllRanges();
    setToolbarState(null);
  }, [toolbarState]);

  /**
   * Remove a highlight (from state AND from DOM)
   */
  const removeHighlight = useCallback((questionId, highlightId) => {
    // Remove the <mark> element from the DOM immediately
    const container = passageRef.current;
    if (container) {
      const markEl = container.querySelector(`mark[data-highlight-id="${highlightId}"]`);
      if (markEl) {
        // Unwrap: replace the <mark> with its text content
        const parent = markEl.parentNode;
        while (markEl.firstChild) {
          parent.insertBefore(markEl.firstChild, markEl);
        }
        parent.removeChild(markEl);
        // Normalize to merge adjacent text nodes
        parent.normalize();
      }
    }

    // Remove from state
    setAllHighlights(prev => ({
      ...prev,
      [questionId]: (prev[questionId] || []).filter(h => h.id !== highlightId),
    }));
    setAnnotationPopup(null);
  }, [passageRef]);

  /**
   * Update a highlight's note
   */
  const updateNote = useCallback((questionId, highlightId, note) => {
    setAllHighlights(prev => ({
      ...prev,
      [questionId]: (prev[questionId] || []).map(h =>
        h.id === highlightId ? { ...h, note } : h
      ),
    }));
  }, []);

  /**
   * Show annotation popup for a highlight
   */
  const showAnnotation = useCallback((highlightId, questionId, x, y) => {
    setAnnotationPopup({ highlightId, questionId, x, y });
  }, []);

  /**
   * Close annotation popup
   */
  const closeAnnotation = useCallback(() => {
    setAnnotationPopup(null);
  }, []);

  /**
   * Dismiss toolbar when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Don't dismiss if clicking on the toolbar itself
      if (e.target.closest('.highlight-toolbar') || e.target.closest('.annotation-popup')) {
        return;
      }
      // Small delay to allow highlight click handlers to fire first
      setTimeout(() => {
        if (toolbarState) {
          setToolbarState(null);
        }
      }, 100);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toolbarState]);

  return {
    passageRef,
    allHighlights,
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
  };
}

/**
 * Get the text offset of a Range relative to a container element's textContent.
 * This gives us a position that's independent of the HTML structure.
 */
function getTextOffsets(container, range) {
  const treeWalker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let charIndex = 0;
  let startOffset = 0;
  let endOffset = 0;
  let foundStart = false;
  let foundEnd = false;

  let node;
  while ((node = treeWalker.nextNode())) {
    if (node === range.startContainer) {
      startOffset = charIndex + range.startOffset;
      foundStart = true;
    }
    if (node === range.endContainer) {
      endOffset = charIndex + range.endOffset;
      foundEnd = true;
      break;
    }
    charIndex += node.textContent.length;
  }

  if (!foundStart) startOffset = 0;
  if (!foundEnd) endOffset = startOffset;

  return { startOffset, endOffset };
}

/**
 * Apply stored highlights to a DOM container.
 * Call this after the passage renders/re-renders.
 *
 * @param {HTMLElement} container - The passage DOM container
 * @param {Array} highlights - Array of highlight objects
 * @param {Function} onHighlightClick - Callback when a highlight is clicked
 */
export function applyHighlightsToDOM(container, highlights, onHighlightClick) {
  if (!container || !highlights || highlights.length === 0) return;

  // Sort highlights by startOffset descending so we apply from end to start
  // This prevents offset shifts from affecting earlier highlights
  const sorted = [...highlights].sort((a, b) => b.startOffset - a.startOffset);

  sorted.forEach(highlight => {
    try {
      const range = getTextRange(container, highlight.startOffset, highlight.endOffset);
      if (!range) return;

      // Create the highlight mark element
      const mark = document.createElement('mark');
      mark.className = `passage-highlight${highlight.note ? ' has-note' : ''}`;
      mark.dataset.color = highlight.color;
      mark.dataset.highlightId = highlight.id;

      // Handle click to show annotation
      mark.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = mark.getBoundingClientRect();
        onHighlightClick(highlight.id, rect.left + rect.width / 2, rect.bottom + 5);
      });

      range.surroundContents(mark);
    } catch (err) {
      // If surroundContents fails (e.g., range spans multiple elements),
      // fall back to a simpler approach
      console.warn('Could not apply highlight:', err);
    }
  });
}

/**
 * Create a Range from text offsets within a container.
 */
function getTextRange(container, startOffset, endOffset) {
  const treeWalker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let charIndex = 0;
  let startNode = null;
  let startNodeOffset = 0;
  let endNode = null;
  let endNodeOffset = 0;

  let node;
  while ((node = treeWalker.nextNode())) {
    const nodeLength = node.textContent.length;

    if (!startNode && charIndex + nodeLength > startOffset) {
      startNode = node;
      startNodeOffset = startOffset - charIndex;
    }

    if (!endNode && charIndex + nodeLength >= endOffset) {
      endNode = node;
      endNodeOffset = endOffset - charIndex;
      break;
    }

    charIndex += nodeLength;
  }

  if (!startNode || !endNode) return null;

  // Only apply if both start and end are in the same text node
  // (cross-node highlights are more complex and fragile)
  if (startNode !== endNode) {
    // For cross-node, just highlight the first node's portion
    endNode = startNode;
    endNodeOffset = startNode.textContent.length;
  }

  const range = document.createRange();
  range.setStart(startNode, startNodeOffset);
  range.setEnd(endNode, endNodeOffset);
  return range;
}
