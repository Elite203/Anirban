import React from 'react';
import { motion } from 'framer-motion';
import { developmentProcess } from '@/lib/constants';
import RotatingLogo from '@/components/ui_extended/RotatingLogo';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Development <span className="gradient-text">Process</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {developmentProcess.map((step) => (
              <motion.div key={step.title} variants={item} className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center text-orange-500">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center items-center">
            <RotatingLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;