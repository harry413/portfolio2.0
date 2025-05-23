
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-40 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
