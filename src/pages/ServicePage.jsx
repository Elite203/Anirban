import React from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const navigate = useNavigate();

  const handleBackToServices = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - ANIRBAN'S SKILL ACADEMY</title>
        <meta name="description" content={service.description} />
        {/* Canonical URL added here */}
        <link
          rel="canonical"
          href={`https://anirbansskillacademy.in/services/${service.slug}`}
        />
      </Helmet>
      <div className="pt-32 pb-16">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/#services"
            onClick={handleBackToServices}
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl">
            {service.description}
          </p>

          <h2 className="text-3xl font-bold mb-8">Our Work</h2>
          <div className="text-center text-2xl p-20 glass-effect rounded-2xl min-h-[400px] flex flex-col items-center justify-center">
            <p className="mb-4">
              🚧 Portfolio content for {service.title} is coming soon! 🚀
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              We're busy preparing our best work to showcase here.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicePage;
