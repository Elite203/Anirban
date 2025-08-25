import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

let nextId = 0;

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((event) => {
    const { clientX, clientY } = event;
    const newRipple = {
      id: nextId++,
      x: clientX,
      y: clientY,
      size: Math.max(window.innerWidth, window.innerHeight)
    };

    setRipples(current => [...current, newRipple]);

    setTimeout(() => {
      setRipples(current => current.filter(r => r.id !== newRipple.id));
    }, 700);
  }, []);

  React.useEffect(() => {
    window.addEventListener('click', createRipple);
    return () => {
      window.removeEventListener('click', createRipple);
    };
  }, [createRipple]);

  return (
    <AnimatePresence>
      {ripples.map(({ id, x, y, size }) => (
        <motion.div
          key={id}
          className="ripple"
          style={{
            top: y,
            left: x,
            width: size,
            height: size,
            transform: 'translate(-50%, -50%) scale(0)',
          }}
          initial={{ transform: 'translate(-50%, -50%) scale(0)', opacity: 1 }}
          animate={{ transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      ))}
    </AnimatePresence>
  );
};

export default RippleEffect;