import { useState } from 'react';
import { questions } from '../data/questions';
import { products } from '../data/products';
import { QuizResult } from '../types/quiz';

export const useQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (questionId: number, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const calculateResult = (): QuizResult => {
    const scores = {
      antiage: 0,
      antimanchas: 0,
      limpiador: 0,
      micelar: 0
    };

    // Calculate total scores based on answers
    questions.forEach(question => {
      const answerId = answers[question.id];
      if (answerId) {
        const selectedOption = question.options.find(opt => opt.id === answerId);
        if (selectedOption) {
          scores.antiage += selectedOption.points.antiage;
          scores.antimanchas += selectedOption.points.antimanchas;
          scores.limpiador += selectedOption.points.limpiador;
          scores.micelar += selectedOption.points.micelar;
        }
      }
    });

    // Find the product with highest score
    const maxScore = Math.max(...Object.values(scores));
    const recommendedProductKey = Object.keys(scores).find(
      key => scores[key as keyof typeof scores] === maxScore
    ) as keyof typeof scores;

    return {
      product: products[recommendedProductKey],
      score: maxScore
    };
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  };

  return {
    currentQuestion,
    questions,
    answers,
    isComplete,
    handleAnswer,
    calculateResult,
    reset,
    progress: ((currentQuestion + (isComplete ? 1 : 0)) / questions.length) * 100
  };
};