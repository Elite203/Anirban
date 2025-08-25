import React from 'react';
import { motion } from 'framer-motion';

const ParticleText = ({ lines }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 1.5, delayChildren: 0.1 * i },
    }),
  };

  const lineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.05 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      x: () => Math.random() * 100 - 50,
      y: () => Math.random() * 80 - 40,
      scale: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center"
    >
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          variants={lineContainer}
          className="flex flex-wrap justify-center"
        >
          {line.split(" ").map((word, wordIndex) => (
            <div key={wordIndex}     className={ ` flex  ${word ==='difference' && "text-orange-500"}` }  style={{ marginRight: "1rem" }}>
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={child}
                 
                  className={ ` inline-block  ` }
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ParticleText;