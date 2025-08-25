import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.closest('.service-card-back')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    pointer: {
      opacity: 0,
      scale: 0,
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
  };
  
  const outlineVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    pointer: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 25,
    },
  };

  return (
    <div className={`cursor ${isPointer ? 'cursor-bracket' : ''}`}>
      <motion.div
        className="cursor-outline"
        variants={outlineVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      />
    </div>
  );
};

export default CustomCursor;