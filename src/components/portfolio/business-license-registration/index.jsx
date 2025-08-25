import React from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessLicenseRegistration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Full Cover Image */}
      <div className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/portfolio/meta-add.jpeg"
            alt="Business License Registration"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/placeholder-business-license.jpg";
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business License Registration
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 dark:text-gray-200">
              Hassle-free registration services to get your business legally
              compliant and operational.
            </p>
            <div
              onClick={() => navigate("/contact")}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Get Started
              </button>
              {/* <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-colors">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Registration Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New Business Registration",
                description:
                  "Complete registration for new businesses with all necessary licenses and permits.",
              },
              {
                title: "License Renewal",
                description:
                  "Timely renewal of your business licenses to maintain compliance.",
              },
              {
                title: "Compliance Support",
                description:
                  "Expert guidance to ensure your business meets all regulatory requirements.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
