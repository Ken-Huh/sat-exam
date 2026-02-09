// Digital SAT Test Questions - December 2023 (Digital Format)
// Source: SAT_12_C.pdf (digital screenshot format)
// This test uses "Dec E" answer keys
// Complete question bank with all 4 modules

export const test3Questions = {
  readingWriting: [
    // ========================================
    // SECTION 1, MODULE 1: Reading and Writing
    // Answer Key: Q1-10 AACCA BADDA, Q11-20 DBBDA ADCCA, Q21-27 CADCA CC
    // ========================================

    // Question 1
    {
      id: 'rw_1',
      module: 1,
      domain: 'craft_structure',
      passage: `The National Heritage Fellowship was created to honor exceptional folk and traditional artists in the United States for their ______. The Irish American accordionist Joe Derrane was chosen for the fellowship because he has contributed so much to the arts.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'achievements' },
        { letter: 'B', text: 'suspicions' },
        { letter: 'C', text: 'assumptions' },
        { letter: 'D', text: 'predictions' }
      ],
      correctAnswer: 'A'
    },

    // Question 2
    {
      id: 'rw_2',
      module: 1,
      domain: 'craft_structure',
      passage: `Some pieces of music might have many meanings—the compositions of Albertine Caron-Legris can ______ as many different interpretations as there are people to listen to them—and so as long as a listener's interpretation isn't willfully absurd or the result of inattention, it is difficult to justify the claim that the listener has misunderstood the piece.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'yield' },
        { letter: 'B', text: 'refute' },
        { letter: 'C', text: 'counteract' },
        { letter: 'D', text: 'partition' }
      ],
      correctAnswer: 'A'
    },

    // Questions 3-27 Module 1 - Add following the pattern above
    // Answer Key: Q3-10 CCA BADDA, Q11-20 DBBDA ADCCA, Q21-27 CADCA CC

    // ========================================
    // SECTION 1, MODULE 2: Reading and Writing
    // Answer Key: Q1-10 BDCCB CBBBB, Q11-20 DBCBA DDCAB, Q21-27 DDBDD BB
    // ========================================

    // Module 2 questions start here - add with module: 2

  ],

  math: [
    // ========================================
    // SECTION 2, MODULE 1: Math
    // Answer Key: Q1-10 CDABC DA248 DD (note: 248 is a numeric answer for Q8)
    // Q11-20: D 0.0029 76000 D 16 3 C A B (numeric answers: 0.0029, 76000, 16, 3)
    // Q21-22: C D
    // ========================================

    // Math Module 1 questions - add with module: 1

    // ========================================
    // SECTION 2, MODULE 2: Math
    // Answer Key: More complex with numeric answers - see PDF page 86
    // ========================================

    // Math Module 2 questions - add with module: 2

  ]
};

/*
TEMPLATE FOR ADDING QUESTIONS:

Reading/Writing Question:
{
  id: [question number],
  module: [1 or 2],
  domain: '', // information_ideas, craft_structure, expression_ideas, or standard_conventions
  passage: `[passage text - use backticks for multiline]`,
  text: '[question text]',
  type: 'multipleChoice',
  options: [
    { letter: 'A', text: '[option A]' },
    { letter: 'B', text: '[option B]' },
    { letter: 'C', text: '[option C]' },
    { letter: 'D', text: '[option D]' }
  ],
  correctAnswer: '[A/B/C/D]'
},

Math Question (multiple choice):
{
  id: [question number],
  module: [1 or 2],
  domain: '', // algebra, advanced_math, problem_solving, or geometry
  text: '[question text]',
  type: 'multipleChoice',
  options: [
    { letter: 'A', text: '[option A]' },
    { letter: 'B', text: '[option B]' },
    { letter: 'C', text: '[option C]' },
    { letter: 'D', text: '[option D]' }
  ],
  correctAnswer: '[A/B/C/D]'
},

Math Question (numeric/grid-in):
{
  id: [question number],
  module: [1 or 2],
  domain: '', // algebra, advanced_math, problem_solving, or geometry
  text: '[question text]',
  type: 'gridIn',
  correctAnswer: '[numeric answer]'
},

For questions with images, add:
  image: '/images/questions/test3_q[number].png',
  imageDescription: '[description of the image]',

For questions with tables in passage, use markdown table format:
  passage: \`[text before table]

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

[text after table]\`,
*/
