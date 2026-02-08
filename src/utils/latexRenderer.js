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
 * Wrap a KaTeX HTML string in a styled span for visual distinction
 * @param {string} katexHtml - Rendered KaTeX HTML
 * @param {boolean} displayMode - Whether this is display-mode math
 * @returns {string} - Wrapped HTML
 */
function wrapMath(katexHtml, displayMode = false) {
  if (displayMode) {
    return `<span class="math-rendered math-display">${katexHtml}</span>`;
  }
  return `<span class="math-rendered math-inline">${katexHtml}</span>`;
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
 * @param {string} text - Text containing LaTeX expressions
 * @returns {string} - HTML string with rendered LaTeX
 */
export function renderLatex(text) {
  if (!text || typeof text !== 'string') return text || '';

  let result = text;

  // Process display math: \[...\]
  result = result.replace(/\\\[([\s\S]*?)\\\]/g, (match, latex) => {
    return wrapMath(renderKatex(latex, true), true);
  });

  // Process display math: $$...$$  (legacy support)
  result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
    return wrapMath(renderKatex(latex, true), true);
  });

  // Process inline math: \(...\)
  result = result.replace(/\\\(([\s\S]*?)\\\)/g, (match, latex) => {
    return wrapMath(renderKatex(latex, false), false);
  });

  return result;
}

/**
 * Auto-detect and convert common math patterns to LaTeX.
 * Uses \(...\) delimiters to avoid $ conflicts with currency.
 *
 * This helps with questions that weren't written with LaTeX in mind
 * but contain math expressions using Unicode or plain text.
 *
 * @param {string} text - Text that may contain math expressions
 * @returns {string} - Text with math patterns converted to LaTeX
 */
export function autoLatexify(text) {
  if (!text || typeof text !== 'string') return text || '';

  let result = text;

  // ========================================
  // PROTECT: Don't touch content already in \(...\) or \[...\]
  // ========================================
  const protectedChunks = [];
  result = result.replace(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g, (match) => {
    protectedChunks.push(match);
    return `__PROTECTED_${protectedChunks.length - 1}__`;
  });

  // ========================================
  // PROTECT: Currency amounts like $8.00, $1,340, $204
  // Replace them with a placeholder so they won't be affected
  // ========================================
  const currencyChunks = [];
  result = result.replace(/\$[\d,]+(?:\.\d{2})?/g, (match) => {
    currencyChunks.push(match);
    return `__CURRENCY_${currencyChunks.length - 1}__`;
  });

  // ========================================
  // UNICODE SUPERSCRIPT CHARACTERS
  // Convert x² → \(x^{2}\), x²⁰ → \(x^{20}\), etc.
  // ========================================
  const superscriptMap = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  };
  const superscriptRegex = /([a-zA-Z\d)])[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g;
  result = result.replace(superscriptRegex, (match, base) => {
    const superDigits = match.slice(base.length);
    const normalDigits = superDigits.split('').map(c => superscriptMap[c] || c).join('');
    return `\\(${base}^{${normalDigits}}\\)`;
  });

  // ========================================
  // UNICODE SUBSCRIPT CHARACTERS
  // ========================================
  const subscriptMap = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  };
  const subscriptRegex = /([a-zA-Z\d])[₀₁₂₃₄₅₆₇₈₉]+/g;
  result = result.replace(subscriptRegex, (match, base) => {
    const subDigits = match.slice(base.length);
    const normalDigits = subDigits.split('').map(c => subscriptMap[c] || c).join('');
    return `\\(${base}_{${normalDigits}}\\)`;
  });

  // ========================================
  // ASCII EXPONENT PATTERNS: x^2, x^{20}, (x-3)^2
  // ========================================
  // Multi-digit exponents: x^20, x^{20}
  result = result.replace(/([a-zA-Z\d)])\^(\{[^}]+\}|\d+)/g, (match, base, exp) => {
    const cleanExp = exp.startsWith('{') ? exp : `{${exp}}`;
    return `\\(${base}^${cleanExp}\\)`;
  });

  // ========================================
  // FRACTIONS
  // ========================================
  // Parenthesized fractions: (5/9), (21/20), (6/7)
  result = result.replace(/\((\d+)\/(\d+)\)/g, (match, num, den) => {
    return `\\(\\frac{${num}}{${den}}\\)`;
  });

  // Standalone numeric fractions: 5/9, 21/20 (only when surrounded by spaces or at boundaries)
  // Be careful not to match things like "dates" (e.g. 12/25) or paths
  result = result.replace(/(?<=^|[\s=+\-,;:(])(\d+)\/(\d+)(?=$|[\s=+\-,;:)])/g, (match, num, den) => {
    return `\\(\\frac{${num}}{${den}}\\)`;
  });

  // ========================================
  // SQUARE ROOT
  // ========================================
  result = result.replace(/sqrt\(([^)]+)\)/gi, (match, inner) => {
    return `\\(\\sqrt{${inner}}\\)`;
  });
  result = result.replace(/√\(([^)]+)\)/g, (match, inner) => {
    return `\\(\\sqrt{${inner}}\\)`;
  });
  result = result.replace(/√(\d+)/g, (match, num) => {
    return `\\(\\sqrt{${num}}\\)`;
  });

  // ========================================
  // SPECIAL MATH SYMBOLS
  // ========================================
  result = result.replace(/±/g, '\\(\\pm\\)');
  result = result.replace(/≤/g, '\\(\\leq\\)');
  result = result.replace(/≥/g, '\\(\\geq\\)');
  result = result.replace(/≠/g, '\\(\\neq\\)');
  result = result.replace(/×/g, '\\(\\times\\)');
  result = result.replace(/÷/g, '\\(\\div\\)');
  result = result.replace(/π/g, '\\(\\pi\\)');

  // Convert <= and >= only when they look mathematical (surrounded by spaces or variables)
  result = result.replace(/(?<=[a-zA-Z\d\s])<=/g, '\\(\\leq\\)');
  result = result.replace(/(?<=[a-zA-Z\d\s])>=/g, '\\(\\geq\\)');

  // ========================================
  // RESTORE: Put back protected content
  // ========================================
  currencyChunks.forEach((chunk, idx) => {
    result = result.replace(`__CURRENCY_${idx}__`, chunk);
  });

  protectedChunks.forEach((chunk, idx) => {
    result = result.replace(`__PROTECTED_${idx}__`, chunk);
  });

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
    /\d+\/\d+/,              // Fractions
    /[a-zA-Z]\^\d+/,         // Exponents
    /[²³⁴⁵⁶⁷⁸⁹⁰¹]/,        // Unicode superscripts
    /sqrt\(/i,               // Square root
    /√/,                     // Square root symbol
    /[±≤≥≠×÷π]/,            // Math symbols
  ];

  return mathPatterns.some(pattern => pattern.test(text));
}
