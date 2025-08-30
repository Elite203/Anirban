import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import TypingEffect from '@/components/ui_extended/TypingEffect';
import Spline from '@splinetool/react-spline';

const ContactPage = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! We'll get back to you shortly.",
    });
    e.target.reset();
  };

  return (
    <>
      <SEOHead 
        pageKey="contact"
        customDescription="Get in touch with ANIRBAN'S SKILL ACADEMY for professional training, digital services, and career development opportunities. We're here to help transform your future."
      />

      <div className="relative min-h-screen">
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-20">
          <Spline 
            scene="https://prod.spline.design/83NVXS6kGdgsnaBg/scene.splinecode" 
            style={{
              width: '60%',
              height: '60%',
              position: 'absolute',
              top: '25%',
              left: '20%'
            }}
          />
        </div>

        <div className="py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 h-20 flex items-center justify-center">
                <span className="gradient-text">Get In Touch</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">We'd love to hear from you. Let's build something amazing together.</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-16 items-start">
              {/* Left Card - Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 rounded-2xl p-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
                <div className="relative glass-effect p-8 rounded-xl cform bg-white dark:bg-gray-900">
                  <h2 className="text-3xl font-bold mb-6">Message Us</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input type="text" id="name" placeholder="Your name" name="name" required className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/20 border dark:border-white/20 border-black/20 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" id="email" placeholder="your@email.com" name="email" required className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/20 border dark:border-white/20 border-black/20 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea id="message" placeholder="Tell us about your project..." name="message" rows="5" required className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/20 border dark:border-white/20 border-black/20 focus:ring-2 focus:ring-purple-500 outline-none transition"></textarea>
                    </div>
                    <Button type="submit" className="w-full gradient-bg text-white hover:opacity-90 text-lg py-3 rounded-lg">
                      Submit
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Spline in the middle column */}
              <div className="hidden z-20 lg:block relative h-full min-h-[500px]">
                <Spline 
                  scene="https://prod.spline.design/83NVXS6kGdgsnaBg/scene.splinecode" 
                  style={{
                    width: '80%',
                    height: '60%',
                    position: 'absolute',
                    top: '20%',
                    left: '20%'
                  }}
                />
              </div>

              {/* Right Card - Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 rounded-2xl p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
                <div className="relative glass-effect p-8 rounded-xl cform bg-white dark:bg-gray-900">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="gradient-bg p-3 rounded-full text-white"><MapPin /></div>
                      <div>
                        <h3 className="font-bold text-xl">Our Address</h3>
                        <p className="text-gray-500 dark:text-gray-400">Asansol, West Bengal, India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="gradient-bg p-3 rounded-full text-white"><Phone /></div>
                      <div>
                        <h3 className="font-bold text-xl">Call Us</h3>
                        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-400 transition">+91 8670509456</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="gradient-bg p-3 rounded-full text-white"><Mail /></div>
                      <div>
                        <h3 className="font-bold text-xl">Email Us</h3>
                        <a href="mailto:info@anirbansacademy.com" className="text-gray-500 dark:text-gray-400 hover:text-purple-400 transition">info@anirbansacademy.com</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="gradient-bg p-3 rounded-full text-white"><Clock /></div>
                      <div>
                        <h3 className="font-bold text-xl">Office Hours</h3>
                        <p className="text-gray-500 dark:text-gray-400">Mon - Fri: 10:00 AM - 6:00 PM</p>
                        <p className="text-gray-500 dark:text-gray-400">Sat: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-500 dark:text-gray-400">Sunday: Office Closed </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`

      body, .contact-page-cursor-disable * {
          cursor: auto !important;
        }
    
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .dark .glass-effect {
          background-color: rgba(17, 17, 17, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #7451AA, #705CBA, #6B6CD1, #677AE4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 300% 300%;
          animation: gradient-x 5s ease infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(90deg, #7451AA, #705CBA, #6B6CD1, #677AE4);
          background-size: 300% 300%;
          animation: gradient-x 5s ease infinite;
        }
        
        footer {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default ContactPage;