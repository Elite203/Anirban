import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText(''); 
    let i = 0;
    const type = () => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          setDisplayedText('');
          i = 0;
          type();
        }, 2500);
      }
    };

    const timeoutId = setTimeout(type, speed);

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return (
    <>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </>
  );
};

export default TypingEffect;