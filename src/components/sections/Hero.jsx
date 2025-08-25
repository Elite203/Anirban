import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleText from "@/components/ui_extended/ParticleText";

const Hero = () => {
  const handleWatchDemo = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroLines = ["Feel the real", "difference", "with us"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* === Background Content - Video === */}
      <div className=" bottom-0 right-0 absolute">
        <video autoPlay loop muted className=" h-[400px] object-contain">
          <source src="1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* === Hero Content === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <ParticleText lines={heroLines} />
          </motion.h1>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              I craft exceptional digital experiences with cutting-edge
              technologies.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Turning ideas into powerful, scalable applications.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div variants={slideInLeft}>
              <Link to="/contact">
                <Button className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4 rounded-full">
                  Get in touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={slideInRight}>
              <Button
                onClick={handleWatchDemo}
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-gray-800 dark:border-white/20 hover:bg-gray-800/10 dark:hover:bg-white/10"
              >
                <Play className="mr-2 w-5 h-5" /> Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </div>

      {/* Floating gradient circles */}
      <div className="absolute top-20 left-10 floating-animation z-1">
        <div className="w-20 h-20 gradient-bg rounded-full opacity-20" />
      </div>
      <div
        className="absolute bottom-20 right-10 floating-animation z-1"
        style={{ animationDelay: "2s" }}
      >
        {/* <div className="w-16 h-16 gradient-bg rounded-full opacity-20" /> */}
      </div>
    </section>
  );
};

export default Hero;
