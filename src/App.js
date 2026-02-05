import React, { useState, useEffect } from 'react';
import './App.css';
import ExamStart from './components/ExamStart';
import ReadingWritingModule from './components/ReadingWritingModule';
import MathModule from './components/MathModule';
import BreakScreen from './components/BreakScreen';
import ResultsScreen from './components/ResultsScreen';
import { sampleQuestions } from './data/questions';

function App() {
  const [stage, setStage] = useState('start'); // start, rw1, rw2, break, math1, math2, results
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});

  const handleStartExam = () => {
    setStage('rw1');
  };

  const handleModuleComplete = (moduleAnswers, moduleScore) => {
    setAnswers({ ...answers, ...moduleAnswers });
    
    if (stage === 'rw1') {
      setScores({ ...scores, rw1: moduleScore });
      setStage('rw2');
    } else if (stage === 'rw2') {
      setScores({ ...scores, rw2: moduleScore });
      setStage('break');
    } else if (stage === 'math1') {
      setScores({ ...scores, math1: moduleScore });
      setStage('math2');
    } else if (stage === 'math2') {
      setScores({ ...scores, math2: moduleScore });
      setStage('results');
    }
  };

  const handleBreakComplete = () => {
    setStage('math1');
  };

  const handleRestartExam = () => {
    setStage('start');
    setAnswers({});
    setScores({});
  };

  return (
    <div className="App">
      {stage === 'start' && <ExamStart onStart={handleStartExam} />}
      {stage === 'rw1' && (
        <ReadingWritingModule
          moduleNumber={1}
          questions={sampleQuestions.readingWriting.filter(q => q.module === 1)}
          timeLimit={32}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'rw2' && (
        <ReadingWritingModule
          moduleNumber={2}
          questions={sampleQuestions.readingWriting.filter(q => q.module === 2)}
          timeLimit={32}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'break' && <BreakScreen onBreakComplete={handleBreakComplete} />}
      {stage === 'math1' && (
        <MathModule
          moduleNumber={1}
          questions={sampleQuestions.math.filter(q => q.module === 1)}
          timeLimit={35}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'math2' && (
        <MathModule
          moduleNumber={2}
          questions={sampleQuestions.math.filter(q => q.module === 2)}
          timeLimit={35}
          onComplete={handleModuleComplete}
        />
      )}
      {stage === 'results' && (
        <ResultsScreen
          scores={scores}
          answers={answers}
          onRestart={handleRestartExam}
        />
      )}
    </div>
  );
}

export default App;
