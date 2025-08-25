import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui_extended/ThemeToggle";
import { navLinks } from "@/lib/constants";
import { useMousePosition } from "@/hooks/useMousePosition";

const GlowingNavLink = ({ href, children, closeMenu }) => {
  const ref = useRef(null);
  const { x, y } = useMousePosition();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      navigate(href);
    }
    if (closeMenu) closeMenu();
  };

  let relX = 0;
  let relY = 0;
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    relX = x - rect.left;
    relY = y - rect.top;
  }

  return (
    <div ref={ref} className="nav-link-container">
      <a
        href={href}
        onClick={handleLinkClick}
        className="relative z-10  hover:text-orange-400 transition-colors duration-300"
      >
        {children}
      </a>
      <div
        className="nav-link-glow"
        style={{
          "--x": `${relX}px`,
          "--y": `${relY}px`,
        }}
      />
    </div>
  );
};

const Header = ({ loading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [logoKey, setLogoKey] = useState(0);

  useEffect(() => {
    setLogoKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 glass-effect ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {loading ? (
            <div className="flex items-center space-x-2 opacity-0">
              <Link to="/" className="flex items-center space-x-2">
                <div>
                  <img
                    src="/logo.webp"
                    alt="ANIRBAN'S SKILL ACADEMY Logo"
                    className="w-14 "
                  />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-orange-600 dark:text-orange-500">
                    ANIRBAN'S
                  </span>{" "}
                  SKILL{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    ACADEMY
                  </span>
                </span>
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  key={logoKey}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="/logo.webp"
                    alt="ANIRBAN'S SKILL ACADEMY Logo"
                    className="w-14 "
                  />
                </motion.div>
                <span className="text-xl font-bold">
                  <span className="text-orange-600 dark:text-orange-500">
                    ANIRBAN'S
                  </span>{" "}
                  SKILL{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    ACADEMY
                  </span>
                </span>
              </Link>
            </motion.div>
          )}

          <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
            {navLinks.map((link) => (
              <GlowingNavLink key={link.name} href={link.href}>
                {link.name}
              </GlowingNavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/contact">
              <Button className="relative glowing-btn !text-black dark:!text-white font-semibold">
                <div className="glowing-btn-border" />
                <span className="relative z-10">Get Started</span>
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <GlowingNavLink
                key={link.name}
                href={link.href}
                closeMenu={() => setIsMenuOpen(false)}
              >
                <span className="block text-center">{link.name}</span>
              </GlowingNavLink>
            ))}
            <Link to="/contact">
              <Button
                className="w-full relative glowing-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="glowing-btn-border" />
                <span className="relative z-10 !text-black dark:text-white">
                  Get Started
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
