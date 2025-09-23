import React from 'react';
import { Question } from '../types/quiz';
import { ChevronRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}) => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-pink-500 font-bold text-xl">
              Pregunta {questionNumber} de {totalQuestions}
            </span>
            <div className="bg-pink-200/50 rounded-full px-4 py-2">
              <span className="text-gray-700 font-medium">
                {Math.round((questionNumber / totalQuestions) * 100)}%
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            {question.text}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswer(option.id)}
              className="group bg-white/80 hover:bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-pink-200 hover:border-pink-400"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed pr-4">
                  {option.text}
                </span>
                <ChevronRight className="w-6 h-6 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};