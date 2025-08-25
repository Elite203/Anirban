import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ANIRBAN'S SKILL ACADEMY</title>
        <meta
          name="description"
          content="Learn more about ANIRBAN'S SKILL ACADEMY, our mission, our story, and the values that drive us."
        />
        {/* Canonical URL added here */}
        <link rel="canonical" href="https://anirbansskillacademy.in/privacy" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Privacy Policy
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p>
              This privacy policy sets out how ANIRBAN'S SKILL ACADEMY uses and
              protects any information that you give us when you use this
              website.
            </p>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p>
              We may collect the following information: name, contact
              information including email address, demographic information such
              as postcode, preferences and interests, and other information
              relevant to customer surveys and/or offers.
            </p>
            <h2 className="text-2xl font-bold">2. How We Use Information</h2>
            <p>
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons: internal record keeping, improving our products and
              services, and sending promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided.
            </p>
            <h2 className="text-2xl font-bold">3. Security</h2>
            <p>
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure, we have put in
              place suitable physical, electronic and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPage;
