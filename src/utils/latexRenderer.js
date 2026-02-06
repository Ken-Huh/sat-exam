// LaTeX Renderer Utility using KaTeX
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Render LaTeX expressions in text
 * Supports:
 * - $...$ for inline math
 * - $$...$$ for display math
 * - \frac{a}{b} for fractions
 * - Common math notation
 *
 * @param {string} text - Text containing LaTeX expressions
 * @returns {string} - HTML string with rendered LaTeX
 */
export function renderLatex(text) {
  if (!text || typeof text !== 'string') return text || '';

  let result = text;

  // Process display math first ($$...$$)
  result = result.replace(/\$\$([^$]+)\$\$/g, (match, latex) => {
    try {
      return katex.renderToString(latex.trim(), {
        displayMode: true,
        throwOnError: false,
        trust: true
      });
    } catch (e) {
      console.error('KaTeX display error:', e);
      return match;
    }
  });

  // Process inline math ($...$)
  result = result.replace(/\$([^$]+)\$/g, (match, latex) => {
    try {
      return katex.renderToString(latex.trim(), {
        displayMode: false,
        throwOnError: false,
        trust: true
      });
    } catch (e) {
      console.error('KaTeX inline error:', e);
      return match;
    }
  });

  return result;
}

/**
 * Auto-detect and convert common math patterns to LaTeX
 * This helps with questions that weren't written with LaTeX in mind
 *
 * @param {string} text - Text that may contain math expressions
 * @returns {string} - Text with math patterns converted to LaTeX
 */
export function autoLatexify(text) {
  if (!text || typeof text !== 'string') return text || '';

  let result = text;

  // Convert fractions like 5/9 or (5/9) to LaTeX \frac - but only standalone fractions
  // Avoids converting things like "x/y" when part of a larger expression
  result = result.replace(/\((\d+)\/(\d+)\)/g, '$\\frac{$1}{$2}$');

  // Convert standalone fractions like a/b where a and b are simple numbers
  // Be careful not to convert division in expressions
  result = result.replace(/(?<![a-zA-Z\d])(\d+)\/(\d+)(?![a-zA-Z\d])/g, '$\\frac{$1}{$2}$');

  // Convert x^2, x^20, etc. to LaTeX superscripts
  result = result.replace(/(\w)\^(\d+)/g, '$$$1^{$2}$$');
  result = result.replace(/(\w)\^(\w)/g, '$$$1^{$2}$$');

  // Convert sqrt(x) to \sqrt{x}
  result = result.replace(/sqrt\(([^)]+)\)/gi, '$\\sqrt{$1}$');
  result = result.replace(/√\(([^)]+)\)/g, '$\\sqrt{$1}$');
  result = result.replace(/√(\d+)/g, '$\\sqrt{$1}$');

  // Convert ± to LaTeX
  result = result.replace(/±/g, '$\\pm$');

  // Convert ≤ and ≥
  result = result.replace(/≤/g, '$\\leq$');
  result = result.replace(/≥/g, '$\\geq$');
  result = result.replace(/<=/g, '$\\leq$');
  result = result.replace(/>=/g, '$\\geq$');

  // Convert ≠
  result = result.replace(/≠/g, '$\\neq$');
  result = result.replace(/!=/g, '$\\neq$');

  // Convert × to \times
  result = result.replace(/×/g, '$\\times$');

  // Convert ÷ to \div
  result = result.replace(/÷/g, '$\\div$');

  // Convert π to \pi
  result = result.replace(/π/g, '$\\pi$');

  return result;
}

/**
 * Combined function: auto-convert math patterns and render LaTeX
 *
 * @param {string} text - Text to process
 * @param {boolean} autoConvert - Whether to auto-convert common math patterns
 * @returns {string} - HTML string with rendered math
 */
export function renderMathText(text, autoConvert = true) {
  if (!text) return '';

  let processed = text;

  if (autoConvert) {
    processed = autoLatexify(processed);
  }

  // Only call renderLatex if there are LaTeX delimiters
  if (processed.includes('$')) {
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
    /\$[^$]+\$/,           // LaTeX delimiters
    /\d+\/\d+/,            // Fractions
    /\w\^\d+/,             // Exponents
    /sqrt\(/i,             // Square root
    /√/,                   // Square root symbol
    /[±≤≥≠×÷π]/,          // Math symbols
  ];

  return mathPatterns.some(pattern => pattern.test(text));
}
