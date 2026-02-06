# Google Sheets Integration Setup

This guide will help you set up automatic logging of student results to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "SAT Practice Results"
4. In Row 1, add these headers:

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Student Name | Email | Test Type | RW M1 | RW M2 | Math M1 | Math M2 | Total Correct | Total Questions | Percentage | Wrong Answers |

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Append a new row with the data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.studentName || 'Anonymous',
      data.studentEmail || '',
      data.testType || 'Unknown',
      data.rwModule1 || 0,
      data.rwModule2 || 0,
      data.mathModule1 || 0,
      data.mathModule2 || 0,
      data.totalCorrect || 0,
      data.totalQuestions || 0,
      data.percentage || 0,
      data.wrongAnswersDetails || '[]'
    ]);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService
    .createTextOutput("SAT Results Logger is running!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click **Save** (💾 icon or Ctrl+S)
5. Name the project "SAT Results Logger"

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description:** "SAT Results Logger"
   - **Execute as:** "Me (your email)"
   - **Who has access:** "Anyone"
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts
   - You may see a "Google hasn't verified this app" warning
   - Click "Advanced" → "Go to SAT Results Logger (unsafe)"
   - Click "Allow"
6. **COPY THE WEB APP URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycbw.../exec
   ```

## Step 4: Add URL to Your App

1. Open `src/utils/resultsExport.js`
2. Find this line near the top:
   ```javascript
   const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your URL:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw.../exec';
   ```
4. Save and rebuild: `npm run build`

## What Gets Logged

Every time a student finishes a test, your Google Sheet will receive:

| Field | Description |
|-------|-------------|
| Timestamp | When they finished |
| Student Name | Name they entered |
| Email | Email (if provided) |
| Test Type | Full Test or Practice type |
| RW M1 | Reading/Writing Module 1 score |
| RW M2 | Reading/Writing Module 2 score |
| Math M1 | Math Module 1 score |
| Math M2 | Math Module 2 score |
| Total Correct | Total questions answered correctly |
| Total Questions | Total questions in test |
| Percentage | Score percentage |
| Wrong Answers | JSON with details of each wrong answer |

## Viewing Wrong Answer Details

The "Wrong Answers" column contains JSON data. To analyze it:

1. Copy the JSON from a cell
2. Paste into a JSON viewer like [jsonviewer.stack.hu](https://jsonviewer.stack.hu/)
3. Or use Google Sheets formula to parse specific fields

Example wrong answer data:
```json
[
  {"questionId": 5, "module": 1, "domain": "algebra", "userAnswer": "B", "correctAnswer": "C"},
  {"questionId": 12, "module": 2, "domain": "geometry", "userAnswer": "(unanswered)", "correctAnswer": "D"}
]
```

## Troubleshooting

**Results not appearing?**
- Check browser console for errors (F12 → Console)
- Verify the URL is correct and includes `/exec` at the end
- Make sure you deployed as "Anyone" can access

**Getting CORS errors?**
- The app uses `mode: 'no-cors'` which should work
- Results may appear even if you see console warnings

**Need to update the script?**
- Edit in Apps Script
- Deploy → Manage deployments → Edit (pencil icon)
- Update version → Deploy

---

## Quick Test

To verify the setup works:

1. Open your deployed URL in a browser - should see "SAT Results Logger is running!"
2. Take a practice test in your app
3. Check your Google Sheet for a new row
