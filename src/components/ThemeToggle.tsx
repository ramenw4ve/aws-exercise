import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-12 h-12 rounded-full
        transition-all duration-300 ease-in-out transform hover:scale-110
        ${isDark 
          ? 'bg-gray-800/80 hover:bg-gray-700/80 text-yellow-400 shadow-lg shadow-gray-900/50' 
          : 'bg-white/80 hover:bg-gray-50/80 text-gray-700 shadow-lg shadow-gray-200/50'
        }
        backdrop-blur-sm border
        ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-300 ease-in-out
            ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
          `}
        />
        <Moon 
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-300 ease-in-out
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}
          `}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;