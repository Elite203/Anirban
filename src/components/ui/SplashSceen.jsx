import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
           <img src='/logo.gif'/>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;