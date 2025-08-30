import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const TermsPage = () => {
  return (
    <>
      <SEOHead pageKey="terms" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Terms & Conditions
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p>
              Welcome to ANIRBAN'S SKILL ACADEMY. If you continue to browse and
              use this website, you are agreeing to comply with and be bound by
              the following terms and conditions of use, which together with our
              privacy policy govern our relationship with you in relation to
              this website.
            </p>
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              The term 'ANIRBAN'S SKILL ACADEMY' or 'us' or 'we' refers to the
              owner of the website. The term 'you' refers to the user or viewer
              of our website. The use of this website is subject to the
              following terms of use.
            </p>
            <h2 className="text-2xl font-bold">2. Content</h2>
            <p>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </p>
            <h2 className="text-2xl font-bold">3. Disclaimer</h2>
            <p>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsPage;
