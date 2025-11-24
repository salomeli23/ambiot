import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src="/logoponds.png" 
            alt="Pond's Logo" 
            className="h-24 md:h-32 w-auto mb-4"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-light text-pink-500 mb-6">
          Age Miracle
        </h2>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 mb-8 shadow-2xl border border-pink-200">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Test de Belleza
          </h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Descubre cuál es el producto Age Miracle perfecto para tu piel
            <br />
            Responde 10 sencillas preguntas y obtén tu recomendación personalizada
          </p>
          
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-2" />
              <p className="text-gray-600">Cuidado Personal</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-pink-400 mx-auto mb-2" />
              <p className="text-gray-600">Resultados Únicos</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-2" />
              <p className="text-gray-600">Belleza Natural</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-2xl md:text-3xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-pink-500/50"
        >
          Comenzar Test
        </button>

        <p className="text-gray-500 mt-6 text-lg">
          Solo toma 2 minutos completar
        </p>
      </div>
    </div>
  );
};