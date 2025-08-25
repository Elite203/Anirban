import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const CTA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section id="cta" className="py-24 cta-bg">
      <div className="absolute inset-0 z-[-1]">
        <Suspense fallback={<div className="w-full h-full bg-black"></div>}>
          {/* <Spline scene="https://prod.spline.design/4m-Iz3YIVyK2p-jA/scene.splinecode" /> */}
        </Suspense>
      </div>
      <div className="cta-bg-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Ready to give us opportunity to feel you the experience?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Let's build something amazing together. Contact us today to discuss
            your project and get a free consultation.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact">
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full gradient-bg text-white hover:opacity-90 transition-opacity"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
