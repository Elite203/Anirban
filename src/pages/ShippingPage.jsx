import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const ShippingPage = () => {
  return (
    <>
      <SEOHead pageKey="shipping" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Shipping & Delivery Policy
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p>
              This policy outlines the terms related to the delivery of our
              digital services.
            </p>
            <h2 className="text-2xl font-bold">1. Service Delivery</h2>
            <p>
              All our services are digital and are delivered electronically.
              This may include access to software, delivery of source code
              files, reports, or other digital assets via email, cloud storage,
              or a client portal.
            </p>
            <h2 className="text-2xl font-bold">2. Timelines</h2>
            <p>
              Project delivery timelines will be specified in the project
              proposal or service agreement. We strive to meet all deadlines,
              but timelines are estimates and may be subject to change based on
              project complexities or client feedback delays.
            </p>
            <h2 className="text-2xl font-bold">3. No Physical Shipping</h2>
            <p>
              As a digital service provider, we do not ship any physical
              products. All deliverables are electronic.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ShippingPage;
