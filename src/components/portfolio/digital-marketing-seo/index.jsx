import React from "react";
import {
  Search,
  Target,
  BarChart2,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function DigitalMarketingSEOPortfolio() {
  const seoProcess = [
    "Comprehensive website audit and analysis",
    "Technical SEO optimization",
    "On-page and off-page SEO implementation",
    "Content optimization and strategy",
    "Performance tracking and reporting",
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-300">
              Digital Marketing & SEO
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
              Boost your online visibility and drive organic traffic with our
              proven SEO and digital marketing strategies.
            </p>

            <div className="space-y-6 mb-12">
              {seoProcess.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-800 dark:text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white-800 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </button> */}
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          {/* Large Background Image */}
          <div className="absolute inset-0 p-0 flex items-center justify-center">
            <div className="relative w-full h-5/6 border-4 border-white/20 rounded-2xl overflow-hidden">
              <img
                src="/portfolio/seo/Search_Engine_Opright.jpeg"
                alt="SEO Dashboard"
                // className="w-full h-full object-cover"
                className="w-full h-full"
                style={{ objectPosition: "center" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 items-center justify-center">
                <div className="text-center p-8 text-white">
                  <Search className="w-12 h-12 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold">
                    SEO Analytics Dashboard
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Image Overlay */}
          <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-5/12 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20">
            <img
              src="/portfolio/seo/Google-SEO-top.png"
              alt="Keyword Research"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hidden h-48 bg-gradient-to-r from-blue-500 to-purple-600 items-center justify-center p-6">
              <div className="text-2xl text-white text-center">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Keyword Research</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Stacked Images */}
      <div className="lg:hidden p-8">
        <div className="space-y-8">
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border-2 border-white/10 p-4">
            <img
              src="/portfolio/seo/Google-SEO-top.png"
              alt="SEO Dashboard"
              className="w-full h-full"
              style={{ minHeight: "300px" }}
            />
          </div>
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border-2 border-white/10 p-4">
            <img
              src="/portfolio/seo/Search_Engine_Opright.jpeg"
              alt="Keyword Research"
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>
      </div>

      {/* SEO Activities Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* On-Page Tasks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">
              On-Page SEO Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Website Analysis Report",
                "Meta Title Optimization",
                "Meta Description Optimization",
                "Canonical Tag Implementation",
                "Image Alt & Title Tag Optimization",
                "Heading Tags Optimization",
                "Robots.txt Configuration",
                "Sitemap Generation & Submission",
                "Open Graph Protocol Implementation",
                "Google Search Console Setup",
                "Google Analytics Installation",
                "Broken Links Check & Fix",
                "Initial SEO Score Analysis",
                "Favicon Implementation",
                "SEO Proximity Optimization",
                "Keyword Density Analysis",
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-gray-800/50 rounded-lg shadow"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Off-Page Tasks */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">
              Off-Page SEO Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Social Bookmarking",
                "Classifieds Submission",
                "Article Submission",
                "Web 2.0 Link Building",
                "Press Release Distribution",
                "Document Submission",
                "Directory Submission",
                "Business Listing",
                "PDF Submission",
                "Profile Link Building",
                "Infographic Submission",
                "Social Media Optimization (SMO)",
                "Blog Commenting",
                "Video Promotion",
                "PPT Creation & Submission",
                "Image Sharing",
                "Question & Answer Submissions",
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-gray-800/50 rounded-lg shadow"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
