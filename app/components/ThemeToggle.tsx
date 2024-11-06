// app/components/ThemeToggle.tsx
"use client";
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaHeart } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-3 rounded-full transition-colors
        ${theme === 'light' ? 'bg-gray-200 text-yellow-500' : ''}
        ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : ''}
        ${theme === 'red' ? 'bg-red-700 text-white' : ''}
      `}
    >
      {theme === 'light' && <FaSun className="w-5 h-5" />}
      {theme === 'dark' && <FaMoon className="w-5 h-5" />}
      {theme === 'red' && <FaHeart className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;