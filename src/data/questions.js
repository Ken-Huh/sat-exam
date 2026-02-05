// Sample questions - you can replace with your actual questions
export const sampleQuestions = {
  readingWriting: [
    {
      id: 1,
      module: 1,
      text: 'As used in the text, what does the word "surveyed" most nearly mean?',
      passage: 'Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush. He surveyed the fence, and all gladness left him and a deep melancholy settled down upon his spirit.',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Looked at' },
        { letter: 'B', text: 'Had questions about' },
        { letter: 'C', text: 'Organized' },
        { letter: 'D', text: 'Was captivated by' }
      ],
      correctAnswer: 'A'
    },
    {
      id: 2,
      module: 1,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      passage: 'Though most studies of the effect of altitude on blood chemistry usually concentrated on people who live about sea level, researchers Suleiman A. Al-Sweedan and Moath Alhaj have instead chosen the _____ path in their recent work of studying the blood of people who live below sea level, in locations such as the California towns of Salton City and Imperial.',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'predictable' },
        { letter: 'B', text: 'timeworn' },
        { letter: 'C', text: 'innovative' },
        { letter: 'D', text: 'idealistic' }
      ],
      correctAnswer: 'C'
    },
    // Add 25 more RW questions here to reach 27
  ],
  math: [
    {
      id: 1,
      module: 1,
      text: 'The ratio of green tiles to blue tiles in a piece of artwork is 5 to 2. If there are 16 blue tiles in the piece of artwork, how many green tiles are there?',
      type: 'fillIn',
      correctAnswer: '40'
    },
    {
      id: 2,
      module: 1,
      text: 'Which of the following equations is the most appropriate linear model for the data shown?',
      passage: 'Scatterplot with points showing negative correlation',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'y = -6 + 28x' },
        { letter: 'B', text: 'y = -6 - 28x' },
        { letter: 'C', text: 'y = 28 + 6x' },
        { letter: 'D', text: 'y = 28 - 6x' }
      ],
      correctAnswer: 'D'
    },
    // Add 20 more Math questions here to reach 22
  ]
};
