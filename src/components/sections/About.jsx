import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { aboutFeatures } from '@/lib/constants';
import { useMousePosition } from '@/hooks/useMousePosition';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const GlowingCard = ({ feature }) => {
  const ref = useRef(null);
  const { x, y } = useMousePosition();
  
  let relX = 0;
  let relY = 0;
  if(ref.current) {
    const rect = ref.current.getBoundingClientRect();
    relX = x - rect.left;
    relY = y - rect.top;
  }

  return (
    <motion.div
      ref={ref}
      key={feature.title}
      variants={fadeInUp}
      className="glowing-card glass-effect p-8 rounded-2xl text-center"
    >
      <div className="glowing-card-glow" style={{'--x': `${relX}px`, '--y': `${relY}px`}} />
      <div className="relative z-10">
        <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold">{feature.title}</h3>
      </div>
    </motion.div>
  );
};


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">ANIRBAN'S SKILL ACADEMY</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are committed to excellence, innovation, and your success.
          </motion.p>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aboutFeatures.map((feature) => (
            <GlowingCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;