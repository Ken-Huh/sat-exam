import React, { useState } from 'react';
import './App.css';
import TestSelection from './components/TestSelection';
import ReadingWritingModule from './components/ReadingWritingModule';
import MathModule from './components/MathModule';
import BreakScreen from './components/BreakScreen';
import ResultsScreen from './components/ResultsScreen';
import { sampleQuestions } from './data/questions';

function App() {
  const [stage, setStage] = useState('select'); // select, rw1, rw2, break, math1, math2, results
  const [selectedTest, setSelectedTest] = useState(null); // eslint-disable-line no-unused-vars
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});

  const handleSelectTest = (testId) => {
    setSelectedTest(testId);
    setStage('rw1');
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
  };

  const handleBreakComplete = () => {
    setStage('math1');
  };

  const handleRestartExam = () => {
    setStage('select');
    setSelectedTest(null);
    setAnswers({});
    setScores({});
  };

  // Get questions based on selected test (currently only test1)
  const getQuestions = () => {
    // For now, all tests use the same questions
    // In the future, you can add more test sets
    return sampleQuestions;
  };

  const questions = getQuestions();

  return (
    <div className="App">
      {stage === 'select' && <TestSelection onSelectTest={handleSelectTest} />}
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
    </div>
  );
}

export default App;
