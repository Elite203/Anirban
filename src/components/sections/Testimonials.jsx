import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const TestimonialCard = ({ name, company, review, image }) => (
  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border dark:!border-white/20 !border-black/10 rounded-2xl p-8 mx-4 w-[90vw] sm:w-[350px] md:w-[450px] flex-shrink-0">
    <div className="flex items-center mb-4">
      <img
        className="w-16 h-16 rounded-full object-cover mr-4"
        alt={name}
        src="h.png"
      />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{company}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300">"{review}"</p>
  </div>
);

const Testimonials = () => {
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const midPoint = Math.ceil(extendedTestimonials.length / 2);
  const firstRow = extendedTestimonials.slice(0, midPoint);
  const secondRow = extendedTestimonials.slice(midPoint);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>
      </div>
      <div className="w-full space-y-8">
        <div className="testimonial-row flex">
          <div className="flex animate-scroll-horizontal">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard
                key={`first-${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>
        </div>
        <div className="testimonial-row flex">
          <div className="flex animate-scroll-horizontal-reverse">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard
                key={`second-${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
