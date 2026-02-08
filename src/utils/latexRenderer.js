// LaTeX Renderer Utility using KaTeX
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Render a LaTeX expression to HTML using KaTeX
 * @param {string} latex - LaTeX expression
 * @param {boolean} displayMode - Whether to render in display mode
 * @returns {string} - HTML string
 */
function renderKatex(latex, displayMode = false) {
  try {
    return katex.renderToString(latex.trim(), {
      displayMode,
      throwOnError: false,
      trust: true,
    });
  } catch (e) {
    console.error('KaTeX error:', e);
    return latex;
  }
}

/**
 * Render LaTeX expressions in text.
 * Supports:
 * - \(...\) for inline math
 * - \[...\] for display math
 * - $$...$$ for display math (legacy)
 *
 * IMPORTANT: We do NOT use $...$ delimiters because they conflict
 * with currency amounts (e.g., "$8.00") in question text.
 *
 * Unicode math characters (², ³, ≤, ≥, π, etc.) render natively
 * in the browser and do NOT need LaTeX conversion. Only use \(...\)
 * delimiters for complex expressions that need proper typesetting
 * (e.g., fractions, complex equations).
 *
 * @param {string} text - Text containing LaTeX expressions
 * @returns {string} - HTML string with rendered LaTeX
 */
export function renderLatex(text) {
  if (!text || typeof text !== 'string') return text || '';

  let result = text;

  // Process display math: \[...\]
  result = result.replace(/\\\[([\s\S]*?)\\\]/g, (match, latex) => {
    return renderKatex(latex, true);
  });

  // Process display math: $$...$$ (legacy support)
  result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
    return renderKatex(latex, true);
  });

  // Process inline math: \(...\)
  result = result.replace(/\\\(([\s\S]*?)\\\)/g, (match, latex) => {
    return renderKatex(latex, false);
  });

  return result;
}

/**
 * Combined function: render any explicit LaTeX delimiters in text.
 * No auto-conversion is performed — Unicode math characters
 * (², ³, ≤, ≥, π, etc.) render natively in the browser.
 *
 * @param {string} text - Text to process
 * @param {boolean} autoConvert - Ignored (kept for API compatibility)
 * @returns {string} - HTML string with rendered math
 */
export function renderMathText(text, autoConvert = false) {
  if (!text) return '';

  let processed = text;

  // Minimal safe auto-conversion: ONLY parenthesized numeric fractions.
  // Converts (6/7) → rendered fraction, but leaves everything else alone.
  // This is safe because:
  //   - Both sides are digits (no variable interactions)
  //   - Enclosed in parens (unambiguous boundaries)
  //   - Result is self-contained (no interaction with surrounding text)
  if (autoConvert) {
    processed = processed.replace(/\((\d+)\/(\d+)\)/g, (match, num, den) => {
      return renderKatex(`\\frac{${num}}{${den}}`, false);
    });
  }

  // Process any explicit LaTeX delimiters
  if (processed.includes('\\(') || processed.includes('\\[') || processed.includes('$$')) {
    processed = renderLatex(processed);
  }

  return processed;
}

/**
 * Check if text contains any math expressions
 *
 * @param {string} text - Text to check
 * @returns {boolean} - True if text contains math patterns
 */
export function hasMathContent(text) {
  if (!text) return false;

  const mathPatterns = [
    /\\\(.*?\\\)/,           // \(...\) delimiters
    /\\\[.*?\\\]/,           // \[...\] delimiters
    /\$\$.*?\$\$/,           // $$...$$ delimiters
    /[²³⁴⁵⁶⁷⁸⁹⁰¹]/,        // Unicode superscripts
    /[±≤≥≠×÷π]/,            // Math symbols
  ];

  return mathPatterns.some(pattern => pattern.test(text));
}
