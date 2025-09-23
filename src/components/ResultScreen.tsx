import React from 'react';
import { QuizResult } from '../types/quiz';
import { CheckCircle, Sparkles, RotateCcw, Heart } from 'lucide-react';

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  const { product } = result;

  // Determine background and styling based on product
  const isMicelar = product.id === 'micelar';
  const isLimpiador = product.id === 'limpiador';
  const isAntimanchas = product.id === 'antimanchas';
  const isAntiage = product.id === 'antiage';
  
  const backgroundClass = isMicelar 
    ? 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500'
    : isLimpiador 
    ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-700'
    : isAntimanchas
    ? 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700'
    : isAntiage
    ? 'bg-gradient-to-br from-[#01b2c6] via-[#01a5b8] to-[#0198aa]'
    : 'bg-gradient-to-br from-pink-50 via-white to-pink-100';
    
  const primaryColor = isMicelar 
    ? 'yellow' 
    : isLimpiador 
    ? 'red' 
    : isAntimanchas
    ? 'purple'
    : isAntiage
    ? 'blue'
    : 'pink';
  return (
    <div className={`min-h-screen ${backgroundClass} flex items-center justify-center p-8`}>
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full p-4 mb-6">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¡Tu Producto Ideal!
          </h1>
          <p className="text-xl text-white/90">
            Basado en tus respuestas, este es el producto perfecto para ti
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 shadow-2xl border border-white/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className={`${
                isMicelar 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' 
                  : isLimpiador 
                  ? 'bg-gradient-to-r from-red-600 to-red-700'
                  : isAntimanchas
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700'
                  : isAntiage
                  ? 'bg-gradient-to-r from-[#01b2c6] to-[#0198aa]'
                  : 'bg-gradient-to-r from-pink-500 to-pink-600'
              } text-white rounded-2xl p-6 mb-6 shadow-lg`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  <span className="font-semibold text-lg">POND'S SKIN INSTITUTE</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold ${
                  isMicelar 
                    ? 'text-yellow-700' 
                    : isLimpiador 
                    ? 'text-red-700'
                    : isAntimanchas
                    ? 'text-purple-700'
                    : isAntiage
                    ? 'text-[#01b2c6]'
                    : 'text-pink-700'
                } flex items-center gap-2`}>
                  <Heart className={`w-6 h-6 ${
                    isMicelar 
                      ? 'text-yellow-600' 
                      : isLimpiador 
                      ? 'text-red-600'
                      : isAntimanchas
                      ? 'text-purple-600'
                      : isAntiage
                      ? 'text-[#01b2c6]'
                      : 'text-pink-600'
                  }`} />
                  Beneficios principales:
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-6 h-6 ${
                        isMicelar 
                          ? 'text-yellow-600' 
                          : isLimpiador 
                          ? 'text-red-600'
                          : isAntimanchas
                          ? 'text-purple-600'
                          : isAntiage
                          ? 'text-[#01b2c6]'
                          : 'text-pink-600'
                      } mt-1 flex-shrink-0`} />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2 text-center">
              <div className={`${
                isMicelar 
                  ? 'bg-yellow-50/50' 
                  : isLimpiador 
                  ? 'bg-red-50/50'
                  : isAntimanchas
                  ? 'bg-purple-50/50'
                  : isAntiage
                  ? 'bg-[#01b2c6]/10'
                  : 'bg-pink-50/50'
              } backdrop-blur-sm rounded-3xl p-8 mb-6`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className={`${
                isMicelar 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' 
                  : isLimpiador 
                  ? 'bg-gradient-to-r from-red-500 to-red-600'
                  : isAntimanchas
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                  : isAntiage
                  ? 'bg-gradient-to-r from-[#01b2c6] to-[#0198aa]'
                  : 'bg-gradient-to-r from-pink-500 to-pink-600'
              } rounded-2xl p-6 shadow-lg`}>
                <p className="text-white font-bold text-xl mb-2">
                  🎉 ¡Felicitaciones!
                </p>
                <p className={`${
                  isMicelar 
                    ? 'text-yellow-50' 
                    : isLimpiador 
                    ? 'text-red-50'
                    : isAntimanchas
                    ? 'text-purple-50'
                    : isAntiage
                    ? 'text-white'
                    : 'text-pink-50'
                }`}>
                  Has encontrado tu producto ideal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className={`bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white ${
              isMicelar 
                ? 'text-yellow-700' 
                : isLimpiador 
                ? 'text-red-700'
                : isAntimanchas
                ? 'text-purple-700'
                : isAntiage
                ? 'text-[#01b2c6]'
                : 'text-pink-700'
            } font-bold text-xl px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 border-2 border-white/50`}
          >
            <RotateCcw className="w-6 h-6" />
            Hacer Test Nuevamente
          </button>
          
          <p className="text-white/80 mt-6 text-lg">
            Comparte este resultado o prueba con diferentes respuestas
          </p>
        </div>
      </div>
    </div>
  );
};