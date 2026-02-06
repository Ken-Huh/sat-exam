import React, { useState } from 'react';
import './App.css';
import TestSelection from './components/TestSelection';
import StudentInfoModal from './components/StudentInfoModal';
import ReadingWritingModule from './components/ReadingWritingModule';
import MathModule from './components/MathModule';
import BreakScreen from './components/BreakScreen';
import ResultsScreen from './components/ResultsScreen';
import PracticeResultsScreen from './components/PracticeResultsScreen';
import { allTests, getAvailableTests, getTestQuestions, getRWPracticeQuestions, getMathPracticeQuestions } from './data/index';

function App() {
  // Full test states
  const [stage, setStage] = useState('select');
  const [selectedTest, setSelectedTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});

  // Student info
  const [studentInfo, setStudentInfo] = useState({ name: '', email: '' });
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null); // { type: 'test'|'practice', id: string, practiceType?: string }

  // Practice mode states
  const [practiceMode, setPracticeMode] = useState(null);
  const [practiceQuestions, setPracticeQuestions] = useState([]);

  // Get test name for modal display
  const getTestName = (action) => {
    if (!action) return '';
    if (action.type === 'test') {
      const tests = getAvailableTests();
      const test = tests.find(t => t.id === action.id);
      return test ? test.name : 'Practice Test';
    } else {
      return action.practiceType === 'readingWriting'
        ? 'Reading & Writing Practice'
        : 'Math Practice';
    }
  };

  const handleSelectTest = (testId) => {
    setPendingAction({ type: 'test', id: testId });
    setShowStudentModal(true);
  };

  const handleSelectPractice = (setId, type) => {
    setPendingAction({ type: 'practice', id: setId, practiceType: type });
    setShowStudentModal(true);
  };

  const handleStudentInfoSubmit = (info) => {
    setStudentInfo(info);
    setShowStudentModal(false);

    if (pendingAction.type === 'test') {
      setSelectedTest(pendingAction.id);
      setPracticeMode(null);
      setStage('rw1');
    } else if (pendingAction.type === 'practice') {
      const { id: setId, practiceType } = pendingAction;
      setPracticeMode(practiceType);

      if (practiceType === 'readingWriting') {
        const questions = getRWPracticeQuestions(setId);
        setPracticeQuestions(questions);
        setStage('practice_rw1');
      } else if (practiceType === 'math') {
        const questions = getMathPracticeQuestions(setId);
        setPracticeQuestions(questions);
        setStage('practice_math1');
      }
    }

    setPendingAction(null);
  };

  const handleStudentInfoCancel = () => {
    setShowStudentModal(false);
    setPendingAction(null);
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
    setPracticeQuestions([]);
    setStudentInfo({ name: '', email: '' });
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

      {/* Student Info Modal */}
      {showStudentModal && (
        <StudentInfoModal
          onSubmit={handleStudentInfoSubmit}
          onCancel={handleStudentInfoCancel}
          testType={getTestName(pendingAction)}
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
          studentInfo={studentInfo}
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
          studentInfo={studentInfo}
          onRestart={handleRestartExam}
        />
      )}
    </div>
  );
}

export default App;
