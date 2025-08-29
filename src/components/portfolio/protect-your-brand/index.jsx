import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectYourBrandPortfolio() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white">
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/protecturbrand.jpg"
            alt="Brand Protection"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/placeholder-brand-protection.jpg";
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect Your Brand
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive brand protection strategies including trademark and
              copyright services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
