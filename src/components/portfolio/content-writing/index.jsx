import React from "react";
import {
  PenTool,
  FileText,
  Search,
  BarChart2,
  Users,
  CheckCircle,
} from "lucide-react";
import BlogLayout from "../shared/BlogLayout";
import { useNavigate } from "react-router-dom";

export default function ContentWritingPortfolio() {
  const navigate = useNavigate();
  return (
    <BlogLayout
      title="Content Writing Services"
      description="Crafting compelling and SEO-friendly content that resonates with your audience and builds your brand."
      metaDescription="Professional content writing services for blogs, websites, and marketing materials. Our expert writers create engaging, SEO-optimized content that drives traffic and conversions."
      featuredImage="/portfolio/contant-writing.jpeg"
    >
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-300">
            Our Content Writing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <FileText className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Blog Writing",
                description:
                  "Engaging, informative blog posts that drive traffic and establish thought leadership.",
              },
              {
                icon: <Search className="w-8 h-8 text-purple-400 mb-4" />,
                title: "SEO Content",
                description:
                  "Optimized content that ranks well in search engines and attracts organic traffic.",
              },
              {
                icon: <BarChart2 className="w-8 h-8 text-green-400 mb-4" />,
                title: "Website Copy",
                description:
                  "Compelling website content that converts visitors into customers.",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-400 mb-4" />,
                title: "Social Media Content",
                description:
                  "Engaging posts that grow your social media presence and drive engagement.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-800 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 dark:text-gray-300">
            Our Approach to Content Writing
          </h3>
          <p className="text-gray-800 dark:text-gray-300 mb-6">
            We believe in creating content that not only ranks well in search
            engines but also provides real value to your audience. Our team of
            experienced writers combines creativity with data-driven strategies
            to deliver content that converts.
          </p>

          <div className="space-y-4 mb-8">
            {[
              "In-depth research on your industry and target audience",
              "SEO-optimized content with strategic keyword placement",
              "Engaging and conversational writing style",
              "Original, plagiarism-free content",
              "Thorough editing and proofreading",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Elevate Your Content?
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mb-6">
              Let's create content that resonates with your audience and drives
              results. Contact us today to discuss your content needs.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-gray-800 dark:text-gray-300"
            >
              Get Started with Content Writing
            </button>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
