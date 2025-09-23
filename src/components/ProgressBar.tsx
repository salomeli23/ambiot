import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-pink-200/50 rounded-full h-4 mb-8">
      <div
        className="bg-gradient-to-r from-pink-400 to-pink-500 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="h-full bg-white/30 rounded-full animate-pulse"></div>
      </div>
      <p className="text-center text-gray-600 mt-2 text-lg font-medium">
        {Math.round(progress)}% completado
      </p>
    </div>
  );
};