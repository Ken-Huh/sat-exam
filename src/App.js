import React, { useState } from 'react';
import './App.css';
import TestSelection from './components/TestSelection';
import ReadingWritingModule from './components/ReadingWritingModule';
import MathModule from './components/MathModule';
import BreakScreen from './components/BreakScreen';
import ResultsScreen from './components/ResultsScreen';
import PracticeResultsScreen from './components/PracticeResultsScreen';
import { allTests, getTestQuestions, getRWPracticeQuestions, getMathPracticeQuestions } from './data/index';

function App() {
  // Full test states
  const [stage, setStage] = useState('select'); // select, rw1, rw2, break, math1, math2, results, practice_rw1, practice_rw2, practice_math1, practice_math2, practice_results
  const [selectedTest, setSelectedTest] = useState(null); // eslint-disable-line no-unused-vars
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});

  // Practice mode states
  const [practiceMode, setPracticeMode] = useState(null); // 'readingWriting' or 'math'
  const [practiceSetId, setPracticeSetId] = useState(null);
  const [practiceQuestions, setPracticeQuestions] = useState([]);

  const handleSelectTest = (testId) => {
    setSelectedTest(testId);
    setPracticeMode(null);
    setStage('rw1');
  };

  const handleSelectPractice = (setId, type) => {
    setPracticeSetId(setId);
    setPracticeMode(type);

    if (type === 'readingWriting') {
      const questions = getRWPracticeQuestions(setId);
      setPracticeQuestions(questions);
      setStage('practice_rw1');
    } else if (type === 'math') {
      const questions = getMathPracticeQuestions(setId);
      setPracticeQuestions(questions);
      setStage('practice_math1');
    }
  };

  const handleModuleComplete = (moduleAnswers, moduleScore) => {
    setAnswers(prev => ({ ...prev, ...moduleAnswers }));

    if (stage === 'rw1') {
      setScores(prev => ({ ...prev, rw1: moduleScore }));
      setStage('rw2');
    } else if (stage === 'rw2') {
      setScores(prev => ({ ...prev, rw2: moduleScore }));
      setStage('break');
    } else if (stage === 'math1') {
      setScores(prev => ({ ...prev, math1: moduleScore }));
      setStage('math2');
    } else if (stage === 'math2') {
      setScores(prev => ({ ...prev, math2: moduleScore }));
      setStage('results');
    }
    // Practice mode completions
    else if (stage === 'practice_rw1') {
      setScores(prev => ({ ...prev, rw1: moduleScore }));
      setStage('practice_rw2');
    } else if (stage === 'practice_rw2') {
      setScores(prev => ({ ...prev, rw2: moduleScore }));
      setStage('practice_results');
    } else if (stage === 'practice_math1') {
      setScores(prev => ({ ...prev, math1: moduleScore }));
      setStage('practice_math2');
    } else if (stage === 'practice_math2') {
      setScores(prev => ({ ...prev, math2: moduleScore }));
      setStage('practice_results');
    }
  };

  const handleBreakComplete = () => {
    setStage('math1');
  };

  const handleRestartExam = () => {
    setStage('select');
    setSelectedTest(null);
    setAnswers({});
    setScores({});
    setPracticeMode(null);
    setPracticeSetId(null);
    setPracticeQuestions([]);
  };

  // Get questions based on selected test
  const questions = selectedTest ? getTestQuestions(selectedTest) : allTests.test1.questions;

  // Get practice questions filtered by module
  const getPracticeModuleQuestions = (moduleNum) => {
    return practiceQuestions.filter(q => q.module === moduleNum);
  };

  return (
    <div className="App">
      {stage === 'select' && (
        <TestSelection
          onSelectTest={handleSelectTest}
          onSelectPractice={handleSelectPractice}
        />
      )}

      {/* Full Test Stages */}
      {stage === 'rw1' && (
        <ReadingWritingModule
          moduleNumber={1}
          questions={questions.readingWriting.filter(q => q.module === 1)}
          timeLimit={32}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'rw2' && (
        <ReadingWritingModule
          moduleNumber={2}
          questions={questions.readingWriting.filter(q => q.module === 2)}
          timeLimit={32}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'break' && <BreakScreen onBreakComplete={handleBreakComplete} />}
      {stage === 'math1' && (
        <MathModule
          moduleNumber={1}
          questions={questions.math.filter(q => q.module === 1)}
          timeLimit={35}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'math2' && (
        <MathModule
          moduleNumber={2}
          questions={questions.math.filter(q => q.module === 2)}
          timeLimit={35}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'results' && (
        <ResultsScreen
          scores={scores}
          answers={answers}
          questions={questions}
          onRestart={handleRestartExam}
        />
      )}

      {/* Practice Mode Stages - R/W */}
      {stage === 'practice_rw1' && (
        <ReadingWritingModule
          moduleNumber={1}
          questions={getPracticeModuleQuestions(1)}
          timeLimit={32}
          onComplete={handleModuleComplete}
          isPractice={true}
        />
      )}
      {stage === 'practice_rw2' && (
        <ReadingWritingModule
          moduleNumber={2}
          questions={getPracticeModuleQuestions(2)}
          timeLimit={32}
          onComplete={handleModuleComplete}
          isPractice={true}
        />
      )}

      {/* Practice Mode Stages - Math */}
      {stage === 'practice_math1' && (
        <MathModule
          moduleNumber={1}
          questions={getPracticeModuleQuestions(1)}
          timeLimit={35}
          onComplete={handleModuleComplete}
          isPractice={true}
        />
      )}
      {stage === 'practice_math2' && (
        <MathModule
          moduleNumber={2}
          questions={getPracticeModuleQuestions(2)}
          timeLimit={35}
          onComplete={handleModuleComplete}
          isPractice={true}
        />
      )}

      {/* Practice Results */}
      {stage === 'practice_results' && (
        <PracticeResultsScreen
          scores={scores}
          answers={answers}
          questions={practiceQuestions}
          practiceType={practiceMode}
          onRestart={handleRestartExam}
        />
      )}
    </div>
  );
}

export default App;
