import React from "react";
import {
  Server,
  Shield,
  Cloud,
  Database,
  Cpu,
  Zap,
  Clock,
  Settings,
} from "lucide-react";
import AlternatingLayout from "../shared/AlternatingLayout";

export default function WebHostingPortfolio() {
  const services = [
    {
      id: 1,
      title: "Reliable Web Hosting",
      description:
        "Experience 99.9% uptime with our high-performance hosting solutions. We ensure your website is always available and performing at its best.",
      icon: <Server className="w-12 h-12 text-blue-400" />,
      image: "/portfolio/hosting/server-room.jpg",
      features: [
        "SSD Storage for faster load times",
        "Free SSL Certificates",
        "24/7 Security Monitoring",
        "Daily Backups",
      ],
    },
    {
      id: 2,
      title: "Performance Optimization",
      description:
        "We optimize your website's performance with advanced caching, CDN integration, and server-level optimizations for lightning-fast loading times.",
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      image: "/portfolio/hosting/performance.jpg",
      features: [
        "Global CDN Network",
        "Advanced Caching",
        "Image Optimization",
        "HTTP/3 Support",
      ],
    },
    {
      id: 3,
      title: "Security Solutions",
      description:
        "Protect your website with enterprise-grade security measures including DDoS protection, malware scanning, and web application firewalls.",
      icon: <Shield className="w-12 h-12 text-green-400" />,
      image: "/portfolio/hosting/security.jpg",
      features: [
        "DDoS Protection",
        "Malware Scanning",
        "Web Application Firewall",
        "Automated Backups",
      ],
    },
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Web Hosting & Management
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive hosting solutions with enterprise-grade performance,
            security, and support.
          </p>
        </div>

        <div className="space-y-20">
          <AlternatingLayout items={services} />

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Hosting?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: (
                    <Server className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                  ),
                  title: "99.9% Uptime",
                  desc: "Guaranteed",
                },
                {
                  icon: (
                    <Cloud className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                  ),
                  title: "Global CDN",
                  desc: "Fast loading worldwide",
                },
                {
                  icon: (
                    <Shield className="w-10 h-10 mx-auto mb-4 text-green-400" />
                  ),
                  title: "Top Security",
                  desc: "Enterprise-grade",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
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
