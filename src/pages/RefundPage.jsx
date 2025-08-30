import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const RefundPage = () => {
  return (
    <>
      <SEOHead pageKey="refund" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Refund & Cancellation Policy
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p>
              Our policy on refunds and cancellations is designed to be fair and
              transparent.
            </p>
            <h2 className="text-2xl font-bold">1. Cancellation</h2>
            <p>
              Services can be cancelled within 24 hours of purchase, provided
              that work has not commenced. To cancel an order, please contact
              our support team immediately.
            </p>
            <h2 className="text-2xl font-bold">2. Refunds</h2>
            <p>
              Refunds are processed on a case-by-case basis. Due to the nature
              of digital services, refunds are not guaranteed and are at the
              sole discretion of ANIRBAN'S SKILL ACADEMY. We do not offer
              refunds for services that have already been rendered or for
              projects that are in progress.
            </p>
            <h2 className="text-2xl font-bold">3. Non-refundable Items</h2>
            <p>
              Consultation fees, domain registration fees, and any third-party
              service costs are non-refundable.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RefundPage;
