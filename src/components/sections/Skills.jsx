import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Aspect ratios for each image (width / height)
const imageAspectRatios = {
  "1.png": 1.0, // Audition
  "2.png": 1.0, // Illustrator
  "3.png": 1.0, // Premiere Pro
  "4.png": 109 / 102, // Photoshop
  "5.png": 92 / 88, // After Effects
};

const SkillIcon = ({ Icon, name, color, imageName }) => {
  // If we have an image name with a known aspect ratio, use it
  if (imageName) {
    const aspectRatio = imageAspectRatios[imageName] || 1;
    const baseSize = 48; // 3rem = 48px
    const width = baseSize * Math.min(1, aspectRatio);
    const height = baseSize / Math.max(1, aspectRatio);

    return (
      <motion.div
        variants={fadeInUp}
        className="skill-box group relative w-28 h-28 flex flex-col items-center justify-center p-4 rounded-2xl glass-effect"
      >
        <div className="skill-box-face flex flex-col items-center">
          <div
            className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <img
              src={`/${imageName}`}
              alt={`${name} Logo`}
              className="w-full h-full object-contain"
              style={{
                aspectRatio: aspectRatio,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <p className="mt-2 text-sm font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {name}
          </p>
        </div>
      </motion.div>
    );
  }

  // Fallback for icon components
  return (
    <motion.div
      variants={fadeInUp}
      className="skill-box group relative w-28 h-28 flex flex-col items-center justify-center p-4 rounded-2xl glass-effect"
    >
      <div className="skill-box-face">
        <Icon
          className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
          style={{ color }}
        />
        <p className="mt-2 text-sm font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="projects"
      className="py-20 relative bg-gray-100 dark:bg-black overflow-hidden skills-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="sparkle-text">Technical</span>{" "}
            <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl !text-gray-600 dark:!text-white"
          >
            A glimpse into the technologies we master.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-black  dark:text-white"
          >
            Photo and Video Editing
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <SkillIcon name="After Effects" imageName="5.png" />
            <SkillIcon name="Photoshop" imageName="4.png" />
            <SkillIcon name="Premiere Pro" imageName="3.png" />
            <SkillIcon name="Illustrator" imageName="2.png" />
            <SkillIcon name="Audition" imageName="1.png" />
          </div>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="mb-16"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-center mb-8"
            >
              {category}
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {skills.map((skill) => (
                <SkillIcon key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
