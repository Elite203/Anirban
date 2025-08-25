import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaChartLine,
  FaBullseye,
  FaMobileAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import BlogLayout from "../shared/BlogLayout";
import { useNavigate } from "react-router-dom";

export default function GoogleMetaAdsPortfolio() {
  const navigate = useNavigate();
  return (
    <BlogLayout
      title="Google & Meta Ads"
      description="Maximize your online presence with our expert Google and Meta advertising solutions."
      metaDescription="Professional Google Ads and Meta Ads management services. We create data-driven ad campaigns that deliver measurable results and maximize your ROI."
      featuredImage="/portfolio/meta-add.jpeg"
    >
      <div className="space-y-8">
        <div className="bg-gray-800/50 dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Our Advertising Services</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <FaGoogle className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Google Ads",
                description:
                  "Target potential customers actively searching for your products or services.",
              },
              {
                icon: <FaFacebook className="w-8 h-8 text-purple-400 mb-4" />,
                title: "Meta Ads",
                description:
                  "Reach and engage your target audience across Facebook and Instagram.",
              },
              {
                icon: <FaChartLine className="w-8 h-8 text-green-400 mb-4" />,
                title: "Performance Analytics",
                description:
                  "Comprehensive reporting and optimization for maximum ROI.",
              },
              {
                icon: <FaBullseye className="w-8 h-8 text-yellow-400 mb-4" />,
                title: "Remarketing",
                description:
                  "Re-engage visitors who didn't convert on their first visit.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-semibold ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <ul className="space-y-4">
                {[
                  "Targeted audience research and segmentation",
                  "Data-driven campaign strategy",
                  "Compelling ad creatives and copy",
                  "A/B testing for optimal performance",
                  "Continuous optimization and scaling",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiTarget className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaChartLine className="w-6 h-6 text-blue-400" />,
                    title: "Proven Results",
                    text: "We deliver measurable ROI for our clients.",
                  },
                  {
                    icon: <FaMobileAlt className="w-6 h-6 text-purple-400" />,
                    title: "Mobile-Optimized",
                    text: "Ads designed to perform on all devices.",
                  },
                  {
                    icon: (
                      <FaRegMoneyBillAlt className="w-6 h-6 text-green-400" />
                    ),
                    title: "Transparent Pricing",
                    text: "Clear, upfront pricing with no hidden fees.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-700/50 p-2 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-white dark:text-gray-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-white dark:text-gray-300 mb-6">
              Let's create high-performing ad campaigns that deliver real
              results. Contact us today to get started with Google & Meta Ads.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Start Your Ad Campaign
            </button>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
