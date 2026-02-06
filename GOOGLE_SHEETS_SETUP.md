# Google Sheets Integration Setup

## Updated Apps Script for Individual Student Tabs

Replace your current Apps Script with this new version to get:
- A separate tab for each student submission
- Vertical question format: Q# | Section | Module | Domain | User Answer | Correct Answer
- Header with student info and scores at the top of each tab

### Step 1: Open Your Google Sheet

### Step 2: Go to Extensions → Apps Script

### Step 3: Replace the Code with This:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Create a unique tab name with student name and timestamp
    const timestamp = new Date(data.timestamp);
    const dateStr = Utilities.formatDate(timestamp, 'America/New_York', 'MM-dd HH:mm');
    const studentName = (data.studentName || 'Anonymous').substring(0, 20);
    let tabName = studentName + ' ' + dateStr;

    // Ensure unique tab name (max 100 chars)
    tabName = tabName.substring(0, 100);

    // Check if tab already exists and make unique if needed
    let existingSheet = ss.getSheetByName(tabName);
    let counter = 1;
    while (existingSheet) {
      tabName = (studentName + ' ' + dateStr + ' (' + counter + ')').substring(0, 100);
      existingSheet = ss.getSheetByName(tabName);
      counter++;
    }

    // Create new sheet/tab
    const sheet = ss.insertSheet(tabName);

    // ============ HEADER SECTION ============
    // Row 1: Title
    sheet.getRange('A1').setValue('SAT Practice Test Results').setFontSize(16).setFontWeight('bold');
    sheet.getRange('A1:F1').merge().setBackground('#1e3a5f').setFontColor('white');

    // Row 2-3: Student Info
    sheet.getRange('A2').setValue('Student:');
    sheet.getRange('B2').setValue(data.studentName || 'Anonymous');
    sheet.getRange('D2').setValue('Date:');
    sheet.getRange('E2').setValue(Utilities.formatDate(timestamp, 'America/New_York', 'MMM dd, yyyy h:mm a'));

    sheet.getRange('A3').setValue('Test Type:');
    sheet.getRange('B3').setValue(data.testType);
    sheet.getRange('D3').setValue('Email:');
    sheet.getRange('E3').setValue(data.studentEmail || 'N/A');

    // Row 5: Scores
    sheet.getRange('A5').setValue('SCORES').setFontWeight('bold').setBackground('#f0f0f0');
    sheet.getRange('A5:F5').merge();

    // Row 6: Score details
    sheet.getRange('A6').setValue('Total:');
    sheet.getRange('B6').setValue(data.totalCorrect + '/' + data.totalQuestions + ' (' + data.percentage + '%)').setFontWeight('bold');

    sheet.getRange('C6').setValue('R/W:');
    const rwTotal = (data.rwModule1 || 0) + (data.rwModule2 || 0);
    sheet.getRange('D6').setValue(rwTotal + '/54');

    sheet.getRange('E6').setValue('Math:');
    const mathTotal = (data.mathModule1 || 0) + (data.mathModule2 || 0);
    sheet.getRange('F6').setValue(mathTotal + '/44');

    // Row 7: Module breakdown
    sheet.getRange('A7').setValue('Modules:');
    sheet.getRange('B7').setValue('R/W M1: ' + data.rwModule1 + '/27, M2: ' + data.rwModule2 + '/27 | Math M1: ' + data.mathModule1 + '/22, M2: ' + data.mathModule2 + '/22');
    sheet.getRange('B7:F7').merge();

    // Row 9: Question Details Header
    sheet.getRange('A9').setValue('QUESTION DETAILS').setFontWeight('bold').setBackground('#f0f0f0');
    sheet.getRange('A9:F9').merge();

    // Row 10: Table Header
    const headers = ['Q#', 'Section', 'Module', 'Domain', 'Your Answer', 'Correct Answer'];
    sheet.getRange('A10:F10').setValues([headers])
      .setFontWeight('bold')
      .setBackground('#1e3a5f')
      .setFontColor('white')
      .setHorizontalAlignment('center');

    // Row 11+: Question data
    if (data.questionDetails && data.questionDetails.length > 0) {
      const questionRows = data.questionDetails.map(function(q) {
        return [
          q.questionNumber,
          q.section,
          'M' + q.module,
          q.domain,
          q.userAnswer,
          q.correctAnswer
        ];
      });

      const dataRange = sheet.getRange(11, 1, questionRows.length, 6);
      dataRange.setValues(questionRows);

      // Color code incorrect answers
      for (var i = 0; i < data.questionDetails.length; i++) {
        var q = data.questionDetails[i];
        var row = 11 + i;

        if (q.isCorrect === 'Incorrect') {
          sheet.getRange(row, 5).setFontColor('#c41e3a'); // Red for wrong answer
          sheet.getRange(row, 6).setFontColor('#2e7d32'); // Green for correct answer
          sheet.getRange(row, 1, 1, 6).setBackground('#fff0f0'); // Light red background
        } else {
          sheet.getRange(row, 5).setFontColor('#2e7d32'); // Green for correct
          sheet.getRange(row, 6).setFontColor('#2e7d32');
        }

        // Alternate row colors for readability
        if (i % 2 === 0 && q.isCorrect !== 'Incorrect') {
          sheet.getRange(row, 1, 1, 6).setBackground('#f9f9f9');
        }
      }
    }

    // Auto-resize columns
    sheet.setColumnWidth(1, 40);  // Q#
    sheet.setColumnWidth(2, 70);  // Section
    sheet.setColumnWidth(3, 60);  // Module
    sheet.setColumnWidth(4, 150); // Domain
    sheet.setColumnWidth(5, 100); // Your Answer
    sheet.setColumnWidth(6, 100); // Correct Answer

    // Also log to Summary sheet (create if doesn't exist)
    var summarySheet = ss.getSheetByName('Summary');
    if (!summarySheet) {
      summarySheet = ss.insertSheet('Summary');
      summarySheet.getRange('A1:H1').setValues([['Timestamp', 'Student', 'Test Type', 'R/W Score', 'Math Score', 'Total', 'Percentage', 'Tab Link']]);
      summarySheet.getRange('A1:H1').setFontWeight('bold').setBackground('#1e3a5f').setFontColor('white');
    }

    var summaryRow = [
      Utilities.formatDate(timestamp, 'America/New_York', 'MM/dd/yyyy HH:mm'),
      data.studentName || 'Anonymous',
      data.testType,
      rwTotal + '/54',
      mathTotal + '/44',
      data.totalCorrect + '/' + data.totalQuestions,
      data.percentage + '%',
      tabName
    ];
    summarySheet.appendRow(summaryRow);

    return ContentService.createTextOutput(JSON.stringify({success: true, tabName: tabName}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for GET requests (health check)
function doGet(e) {
  return ContentService.createTextOutput('SAT Practice App - Sheets Integration Active');
}
```

### Step 4: Deploy

1. Click **Deploy** → **New deployment**
2. Select type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the new URL and update it in `src/utils/resultsExport.js`

### What This Creates

Each student submission will create:

1. **A new tab** named like "John Smith 02-05 14:30"
2. **Header section** with student info and scores
3. **Question table** with vertical format:

| Q# | Section | Module | Domain | Your Answer | Correct Answer |
|----|---------|--------|--------|-------------|----------------|
| 1  | RW      | M1     | Craft and Structure | A | C |
| 2  | RW      | M1     | Information and Ideas | B | B |

4. **Summary sheet** with all students listed for quick reference

### Color Coding

- **Red background + red text**: Incorrect answers
- **Green text**: Correct answers
- **Alternating row colors**: For readability
