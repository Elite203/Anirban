import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

const ServiceCard = ({ icon, title, description, slug }) => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleSeeProjects = (e) => {
    e.stopPropagation();
    navigate(`/services/${slug}`);
  };

  return (
    <motion.div
      id="services"
      className="w-full h-64 md:h-72 rounded-md cursor-pointer"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <motion.div
          initial={false}
          animate={{ opacity: isFlipped ? 0 : 1 }}
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          className="p-6 rounded-md glass-effect flex flex-col items-center justify-center border dark:!border-white/20 !border-black/10"
        >
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-center">{title}</h3>
        </motion.div>

        {/* Back Side */}
        <motion.div
          initial={false}
          animate={{
            opacity: isFlipped ? 1 : 0,
            rotateY: 180,
          }}
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          className="p-6 rounded-md glass-effect flex flex-col justify-center border dark:!border-white/20 !border-black/10"
        >
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
          <Button
            onClick={handleSeeProjects}
            className="gradient-bg hover:opacity-90"
          >
            <Eye className="mr-2 h-4 w-4" /> See Projects
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive solutions for all your business needs.
            </motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={slideIn(index % 4 < 2 ? "left" : "right")}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
