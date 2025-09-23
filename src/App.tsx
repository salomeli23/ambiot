import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';
import { ProgressBar } from './components/ProgressBar';
import { useQuiz } from './hooks/useQuiz';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const {
    currentQuestion,
    questions,
    isComplete,
    handleAnswer,
    calculateResult,
    reset,
    progress
  } = useQuiz();

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleRestart = () => {
    setHasStarted(false);
    reset();
  };

  const handleQuestionAnswer = (optionId: string) => {
    handleAnswer(questions[currentQuestion].id, optionId);
  };

  if (!hasStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (isComplete) {
    return <ResultScreen result={calculateResult()} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <ProgressBar progress={progress} />
        <QuestionCard
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleQuestionAnswer}
        />
      </div>
    </div>
  );
}

export default App;