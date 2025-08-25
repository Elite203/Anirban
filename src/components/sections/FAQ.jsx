import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from '@/lib/constants';

const rubberBand = {
  animate: {
    transform: [
      "scale3d(1, 1, 1)",
      "scale3d(1.25, 0.75, 1)",
      "scale3d(0.75, 1.25, 1)",
      "scale3d(1.15, 0.85, 1)",
      "scale3d(0.95, 1.05, 1)",
      "scale3d(1.05, 0.95, 1)",
      "scale3d(1, 1, 1)",
    ],
    transition: { duration: 1, times: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1] }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideIn = (direction) => ({
  initial: { opacity: 0, x: direction === 'left' ? -100 : 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
});

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 inline-block"
            whileHover="animate"
          >
            <motion.span variants={rubberBand} className="inline-block">Frequently</motion.span>
            <motion.span variants={rubberBand} className="inline-block ml-4">Asked</motion.span>
            <motion.span variants={rubberBand} className="gradient-text inline-block ml-4">Questions</motion.span>
          </motion.h2>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="w-full glass-effect rounded-2xl p-4 md:p-8">
            {faqData.map((item, index) => (
              <motion.div key={index} variants={slideIn(index % 2 === 0 ? 'left' : 'right')}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg md:text-xl text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;