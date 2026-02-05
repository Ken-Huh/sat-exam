# SAT Mock Exam App

A full-featured digital SAT mock exam application built with React.

## Features

- ✅ Reading & Writing: 2 modules × 27 questions, 32 minutes each
- ✅ Math: 2 modules × 22 questions, 35 minutes each
- ✅ 10-minute break between sections
- ✅ Real-time countdown timers with visual warnings
- ✅ Multiple choice and fill-in answer support
- ✅ Score tracking and detailed results
- ✅ Progress tracking within modules
- ✅ Mobile-responsive design

## Quick Start

### Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Get your live URL!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Adding Your Questions

Edit `/src/data/questions.js` to add your questions:

### Reading & Writing Questions

```javascript
{
  id: 1,
  module: 1,
  text: "Question text here",
  passage: "Passage text here",
  type: "multipleChoice",
  options: [
    { letter: 'A', text: 'Option A' },
    { letter: 'B', text: 'Option B' },
    { letter: 'C', text: 'Option C' },
    { letter: 'D', text: 'Option D' }
  ],
  correctAnswer: 'A'
}
```

### Math Questions (Multiple Choice)

```javascript
{
  id: 1,
  module: 1,
  text: "Question text here",
  type: "multipleChoice",
  options: [
    { letter: 'A', text: 'Option A' },
    { letter: 'B', text: 'Option B' },
    { letter: 'C', text: 'Option C' },
    { letter: 'D', text: 'Option D' }
  ],
  correctAnswer: 'A'
}
```

### Math Questions (Fill-In)

```javascript
{
  id: 1,
  module: 1,
  text: "Question text here",
  type: "fillIn",
  correctAnswer: "40"
}
```

## Exam Structure

- **Reading & Writing Module 1**: 27 questions, 32 minutes
- **Reading & Writing Module 2**: 27 questions, 32 minutes
- **Break**: 10 minutes
- **Math Module 1**: 22 questions, 35 minutes
- **Math Module 2**: 22 questions, 35 minutes

Total time: ~2 hours 44 minutes

## Customization

All styling is in the `/src/components/` folder. Modify the `.css` files to customize colors, fonts, and layout.

## Tips for Your Students

- Students can navigate backward within a module
- Timers turn yellow at 5 minutes remaining, red at 1 minute
- No explanations are provided after submission
- Scores are calculated automatically

## Troubleshooting

**Questions not showing?** - Make sure all 27 RW and 22 Math questions per module are in `/src/data/questions.js`

**Timer issues?** - Refresh the page. Timers use browser JavaScript.

**Deployment issues?** - Check that you have a `vercel.json` and valid `package.json`
