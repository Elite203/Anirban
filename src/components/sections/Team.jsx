import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { teamMembers } from "@/lib/constants";

const TeamMemberCard = ({ name, role, image, img }) => (
  <div className="relative group">
    <motion.div
      whileHover={{ 
        scale: 1.5, 
        zIndex: 20, 
        y: -30,
        x: 15 // Shift 5px to the right on hover
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 12 
      }}
      className="glass-effect rounded-2xl p-6 flex items-center space-x-4 mb-6"
    >
      <img className="w-20 h-20 rounded-full object-cover" alt={name} src={img} />
      <div className="min-w-0">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 truncate">{role}</p>
      </div>
    </motion.div>
  </div>
);

const Team = () => {
  const extendedTeam = [...teamMembers, ...teamMembers];

  const quoteContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const quoteWordVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const quoteText = `"Great things in business are never done by one person. They're done by a team of people."`;

  return (
    <section id="team" className="py-20 bg-gray-100 dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <Quote className="w-26 h-26 gradient-text mb-4" />
            <motion.p
              variants={quoteContainerVariants}
              className="text-3xl font-semibold leading-snug"
            >
              {quoteText.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={quoteWordVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="mt-4 text-xl text-gray-500 dark:text-gray-400"
            >
              - Steve Jobs
            </motion.p>
          </motion.div>

          <div className="h-[500px] overflow-hidden relative pl-4 md:pl-20 team-scroll-container">
            <motion.div
              className="animate-scroll-vertical"
              initial={{}}
              whileInView={{}}
              viewport={{ once: false }}
              transition={{ staggerChildren: 0.1 }}
            >
              {extendedTeam.map((member, index) => (
                <TeamMemberCard key={`${member.name}-${index}`} {...member} />
              ))}
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100 dark:from-black to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 dark:from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
