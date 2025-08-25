import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark'
  );

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;