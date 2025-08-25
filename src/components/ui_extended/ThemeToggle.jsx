import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useDarkMode from '@/hooks/useDarkMode';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white relative w-10 h-10"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90, y: 10 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        exit={{ opacity: 0, rotate: 90, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === 'dark' ? <Sun width={20} height={20} /> : <Moon width={20} height={20} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;