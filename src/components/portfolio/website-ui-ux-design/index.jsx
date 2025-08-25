import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function WebDevelopmentPortfolio() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "LUSION",
      description:
        "Modern design studio with innovative UI/UX solutions and smooth animations...",
      gradient: "from-blue-500 to-purple-600",
      category: "Design Studio",
      image: "/portfolio/web-dev/1.jpg",
      url: "https://lusion.co/",
    },
    {
      id: 2,
      title: "KPR VERSE",
      description:
        "Immersive digital experience with cutting-edge UI/UX design...",
      gradient: "from-indigo-500 to-purple-600",
      category: "Digital Exp",
      image: "/portfolio/web-dev/2.webp",
      url: "https://kprverse.com/",
    },
    {
      id: 3,
      title: "LEONARDO.AI",
      description: "AI-powered design platform with intuitive interface...",
      gradient: "from-blue-600 to-indigo-700",
      category: "AI Platform",
      image: "/portfolio/web-dev/4.webp",
      url: "https://leonardo.ai/",
    },
    {
      id: 4,
      title: "BTC WALLET",
      description:
        "User-friendly crypto wallet with secure transaction flows...",
      gradient: "from-purple-600 to-blue-600",
      category: "Crypto",
      image: "/portfolio/web-dev/5.jpg",
      url: "https://btctransferwallet.com/",
    },
    {
      id: 5,
      title: "CRAFTINDIKA",
      description:
        "Creative design work focusing on UX and visual storytelling...",
      gradient: "from-indigo-600 to-purple-700",
      category: "Portfolio",
      image: "/portfolio/web-dev/2.webp",
      url: "https://craftindika.com/",
    },
    {
      id: 6,
      title: "ABOUT CRAFTINDIKA",
      description: "Case studies and design process documentation...",
      gradient: "from-blue-700 to-indigo-800",
      category: "Case Studies",
      image: "/portfolio/web-dev/1.jpg",
      url: "https://aboutcraftindika.com/",
    },
    {
      id: 7,
      title: "ODITRIBE",
      description: "E-commerce with modern UI/UX for seamless shopping...",
      gradient: "from-purple-700 to-blue-800",
      category: "E-commerce",
      image: "/portfolio/web-dev/1.jpg",
      url: "https://oditribe.com/",
    },
    {
      id: 8,
      title: "VOICESWIFT DASH",
      description: "Admin dashboard with clean interface for voice apps...",
      gradient: "from-blue-600 to-indigo-900",
      category: "Dashboard",
      image: "/portfolio/web-dev/2.webp",
      url: "https://voiceswift-frontend.vercel.app/dashboard",
    },
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <div className="min-h-screen text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Website UI/UX Design
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge web
              technologies. Our portfolio showcases innovative solutions that
              drive results.
            </p>
          </div>

          {/* Projects Grid - Only 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <ProjectCard3D key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Ready to start your project?
              </h2>
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get in touch
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard3D = ({ project, index }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -55;
    const rotateY = (mouseX / rect.width) * 55;

    const newTransform = `translate3d(0px, -10px, 50px) scale3d(1.03, 1.03, 1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`;
    setTransform(newTransform);
  };

  const handleMouseLeave = () => {
    setTransform(
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
    );
  };

  return (
    <div
      className="perspective-1000 w-full h-96"
      style={{ perspective: "1000px" }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full no-underline"
      >
        <div
          ref={cardRef}
          className="relative w-full h-full cursor-pointer group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.15s ease-out",
            transform:
              transform ||
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
            willChange: "transform",
          }}
        >
          {/* Card Content */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              {/* Fallback gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} hidden`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            {/* Reduced Overlay for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* Minimal Glassmorphism Layer - removed backdrop-blur for clarity */}
            <div className="absolute inset-0 bg-white/5 border border-blue-500/20 rounded-2xl"></div>

            {/* Content - Only Title and Description */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              {/* Bottom Content */}
              <div className="mt-auto">
                {/* Title with text shadow for better readability */}
                <h3
                  className="text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                >
                  {project.title}
                </h3>

                {/* Description with text shadow */}
                <p
                  className="text-white/95 text-base leading-relaxed mb-6"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  {project.description}
                </p>

                {/* Category and Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-blue-200 bg-blue-600/30 px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="text-blue-200 hover:text-white text-sm font-medium transition-all duration-200 flex items-center group">
                    View Project
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle 3D Depth Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>

          {/* Dynamic Shadow */}
          <div
            className="absolute inset-0 rounded-2xl -z-10 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${
                project.gradient
                  .replace("from-", "")
                  .replace("via-", "")
                  .replace("to-", "")
                  .split(" ")[0]
              }, ${project.gradient.split(" ")[2]})`,
              transform: "translateY(25px) scale(0.95)",
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};
