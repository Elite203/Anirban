import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      >
      <motion.video
      src="/logo.mp4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="max-w-[800px] w-[80%] h-auto"
      autoPlay
      muted
      loop
      playsInline
    />

      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
