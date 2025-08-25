import React from "react";
import {
  Bot,
  Code,
  BarChart2,
  Users,
  Target,
  Zap,
  Clock,
  Settings,
} from "lucide-react";
import AlternatingLayout from "../shared/AlternatingLayout";

export default function SoftwareConsultationPortfolio() {
  const services = [
    {
      id: 1,
      title: "Technical Strategy",
      description:
        "We help you develop a comprehensive technology roadmap aligned with your business goals and market demands.",
      icon: <Target className="w-12 h-12 text-purple-400" />,
      image: "/portfolio/consulting/strategy.jpg",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Infrastructure Planning",
        "Vendor Selection",
      ],
    },
    {
      id: 2,
      title: "Software Architecture",
      description:
        "Our experts design scalable and maintainable software architectures tailored to your specific requirements and growth plans.",
      icon: <Code className="w-12 h-12 text-blue-400" />,
      image: "/portfolio/consulting/architecture.jpg",
      features: [
        "System Design",
        "Cloud Architecture",
        "Microservices Design",
        "API Strategy",
      ],
    },
    {
      id: 3,
      title: "Team Augmentation",
      description:
        "Enhance your development capabilities with our experienced software engineers and technical experts.",
      icon: <Users className="w-12 h-12 text-green-400" />,
      image: "/portfolio/consulting/team.jpg",
      features: [
        "Dedicated Developers",
        "Technical Leadership",
        "Code Reviews",
        "Knowledge Transfer",
      ],
    },
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900/30 text-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Software Consultation
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Expert guidance to navigate complex technology decisions and drive
            your business forward.
          </p>
        </div>

        <div className="space-y-20">
          <AlternatingLayout items={services} />

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: (
                    <Users className="w-10 h-10 mx-auto mb-4 text-purple-400" />
                  ),
                  title: "Client-Centric",
                  desc: "Solutions tailored to your needs",
                },
                {
                  icon: (
                    <BarChart2 className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                  ),
                  title: "Data-Driven",
                  desc: "Decisions based on metrics",
                },
                {
                  icon: (
                    <Zap className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
                  ),
                  title: "Agile",
                  desc: "Iterative and flexible",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-700/30 transition-colors"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
