import React from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import SplineComponent from "../Spaher";

const GlobalBusiness = () => {
  return (
    <section id="global" className="py-24 !bg-[#aca8a8] dark:!bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextDisintegrate />
      </div>
      <SplineComponent />
    </section>
  );
};

const TextDisintegrate = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="relative w-full  flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          maskImage: `radial-gradient(150px at ${x}px ${y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(150px at ${x}px ${y}px, black, transparent)`,
        }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <AnimatedText text="We can make your business globally" />
        </h2>
      </div>
    </div>
  );
};

const AnimatedText = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
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
    hidden: {
      opacity: 0,
      x: (Math.random() - 0.5) * 50,
      y: (Math.random() - 0.5) * 50,
      scale: 0.5,
      color: "#f97316",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default GlobalBusiness;
