import { useEffect } from 'react';

const useDisableCopy = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleCopy = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useDisableCopy;