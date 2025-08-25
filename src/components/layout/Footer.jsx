import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/lib/constants";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund & Cancellation Policy", href: "/refund-policy" },
    { name: "Shipping & Delivery Policy", href: "/shipping-policy" },
  ];

  const ourServices = [
    { name: "Web Development", href: "/#services" },
    { name: "Android App Development", href: "/#services" },
    { name: "UI/UX Design", href: "/#services" },
    { name: "Digital Marketing & SEO", href: "/#services" },
    { name: "Software Consultation", href: "/#services" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceLinkClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("/#", "");
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <footer
      id="footer"
      className="py-16 border-t border-gray-200 dark:border-white/10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 mb-4 text-left"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/logo.webp"
                  alt="ANIRBAN'S SKILL ACADEMY Logo"
                  className="w-20"
                />
              </motion.div>
              <p className="text-xl font-bold">
                <span className="orange-text">ANIRBAN'S</span> SKILL{" "}
                <span className="orange-text">ACADEMY</span>
              </p>
            </button>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Crafting exceptional digital experiences with cutting-edge
              technologies.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div> */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={label} // Added aria-label for accessibility
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-bold mb-4">
              Quick <span className="orange-text">Links</span>
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold mb-4">
              Our <span className="orange-text">Services</span>
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              {ourServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleServiceLinkClick(e, service.href)}
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold mb-4">
              Contact <span className="orange-text">Us</span>
            </p>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 orange-text" /> Asonsol, West Bengal,
                India
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 orange-text" />
                <a
                  href="mailto:info@anirbansacademy.com"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  info@anirbansacademy.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp size={20} className="orange-text" />
                <a
                  href="https://wa.me/918670509456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  +91 8670509456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="orange-text">ANIRBAN'S</span> SKILL{" "}
            <span className="orange-text">ACADEMY</span>. All rights reserved.
          </p>
        </div>
      </div>
      <div className="marquee-container mt-12">
        <div className="marquee-text">
          <span>ANIRBAN'S SKILL ACADEMY </span>
          <span>ANIRBAN'S SKILL ACADEMY </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
