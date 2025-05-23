
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing creativity...',
    'Loading innovations...',
    'Crafting experiences...',
    'Almost ready...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div 
              className="absolute inset-2 border-2 border-purple-400 border-r-transparent rounded-full animate-spin"
              style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
            ></div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Sachin Patidar</h1>
          <p className="text-xl text-purple-300">Frontend Engineer</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-400 to-blue-400 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/80 mt-2 text-sm">{progress}%</p>
        </div>

        {/* Loading Text */}
        <p className="text-white/70 text-lg animate-pulse">{currentText}</p>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
