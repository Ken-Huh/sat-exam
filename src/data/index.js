// Central export for all SAT tests
// Import individual test files and export them together

import { test1Questions } from './test1-june2023';
import { test2Questions } from './test2-dec2023';
import { test3Questions } from './test3-dec2023-digital';

// Import practice sets
import { rwPracticeSet1 } from './rw-practice-set1';
import { rwPracticeSet2 } from './rw-practice-set2';
import { rwPracticeSet3 } from './rw-practice-set3';
import { rwPracticeSet4 } from './rw-practice-set4';

// ==============================================
// DOMAIN CATEGORIES FOR SKILL TRACKING
// ==============================================
// Reading & Writing domains:
//   - 'information_ideas'     : Information and Ideas (central ideas, inferences, command of evidence)
//   - 'craft_structure'       : Craft and Structure (words in context, text structure, cross-text connections)
//   - 'expression_ideas'      : Expression of Ideas (rhetorical synthesis, transitions)
//   - 'standard_conventions'  : Standard English Conventions (boundaries, form/structure/sense)
//
// Math domains:
//   - 'algebra'               : Algebra (linear equations, systems, functions)
//   - 'advanced_math'         : Advanced Math (nonlinear equations, equivalent expressions)
//   - 'problem_solving'       : Problem-Solving and Data Analysis (ratios, percentages, statistics)
//   - 'geometry'              : Geometry and Trigonometry (area, volume, angles, trig)
// ==============================================

// All available tests
export const allTests = {
  test1: {
    id: 'test1',
    name: 'Practice Test #1 (June 2023)',
    questions: test1Questions
  },
  test2: {
    id: 'test2',
    name: 'Practice Test #2 (December 2023 - Print)',
    questions: test2Questions
  },
  test3: {
    id: 'test3',
    name: 'Practice Test #3 (December 2023 - Digital)',
    questions: test3Questions
  }
};

// Get list of available tests for dropdown
export const getAvailableTests = () => {
  return Object.values(allTests).map(test => ({
    id: test.id,
    name: test.name
  }));
};

// Get questions for a specific test
export const getTestQuestions = (testId) => {
  const test = allTests[testId];
  if (!test) {
    console.error(`Test not found: ${testId}`);
    return null;
  }
  return test.questions;
};

// Legacy export for backwards compatibility
export const sampleQuestions = test1Questions;

// ==============================================
// PRACTICE SETS (Section-specific practice)
// ==============================================

// R/W Practice Sets
export const rwPracticeSets = {
  'rw-set1': rwPracticeSet1,
  'rw-set2': rwPracticeSet2,
  'rw-set3': rwPracticeSet3,
  'rw-set4': rwPracticeSet4
};

// Math Practice Sets (placeholder for future sets)
export const mathPracticeSets = {
  // 'math-set1': mathPracticeSet1
};

// Get list of available R/W practice sets for dropdown
export const getAvailableRWPracticeSets = () => {
  return Object.values(rwPracticeSets).map(set => ({
    id: set.id,
    name: set.name
  }));
};

// Get list of available Math practice sets for dropdown
export const getAvailableMathPracticeSets = () => {
  return Object.values(mathPracticeSets).map(set => ({
    id: set.id,
    name: set.name
  }));
};

// Get questions for a specific R/W practice set
export const getRWPracticeQuestions = (setId) => {
  const set = rwPracticeSets[setId];
  if (!set) {
    console.error(`R/W Practice set not found: ${setId}`);
    return null;
  }
  return set.questions;
};

// Get questions for a specific Math practice set
export const getMathPracticeQuestions = (setId) => {
  const set = mathPracticeSets[setId];
  if (!set) {
    console.error(`Math Practice set not found: ${setId}`);
    return null;
  }
  return set.questions;
};
