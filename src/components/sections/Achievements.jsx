import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { achievements } from '@/lib/constants';

const AchievementItem = ({ text, image, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="flex flex-col md:flex-row items-center justify-between gap-8 py-12"
    >
      <h3 className="text-3xl md:text-5xl font-bold text-center md:text-left w-full md:w-1/2">{text}</h3>
      <div className="w-full md:w-1/2 h-64 rounded-2xl overflow-hidden glass-effect">
        <img src={image} alt={text} className="w-full h-full object-contain p-4" />
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We pride ourselves on delivering results and exceeding expectations.
          </p>
        </motion.div>
        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} {...achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;