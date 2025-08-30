import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const aboutContent = [
  {
    align: 'left',
    text: "Founded on the principles of innovation and excellence, ANIRBAN'S SKILL ACADEMY began as a small team of passionate developers and designers with a shared vision: to transform ambitious ideas into powerful digital realities. We saw a gap where cutting-edge technology met intuitive design, and we were determined to bridge it."
  },
  {
    align: 'right',
    text: "Our journey started with a commitment to not just build applications, but to craft experiences. We believe that the best digital products are born from a deep understanding of user needs, combined with the technical prowess to deliver seamless, scalable, and secure solutions. This philosophy has been our guiding star from day one."
  },
  {
    align: 'left',
    text: "From our humble beginnings, we have grown into a full-service digital agency. Our team has expanded to include experts in SEO, content strategy, legal advisory, and advertising, allowing us to offer a holistic approach to our clients' success. Each new member brings a unique perspective, enriching our collective skill set."
  },
  {
    align: 'right',
    text: "Collaboration is at the heart of everything we do. We work closely with our clients, treating their projects as our own. This partnership approach ensures transparency, fosters creativity, and leads to outcomes that consistently exceed expectations. Your vision becomes our mission."
  },
  {
    align: 'left',
    text: "We are obsessed with quality. Our development process is rigorous, incorporating agile methodologies for flexibility and regular updates. Every line of code is scrutinized, every design element is perfected, and every feature is thoroughly tested to ensure a flawless final product.",
    image: './h2.png',
    imagePosition: 'right',
    imageWidth: 350,
    imageHeight: 220,
    wide: true,
    closeAlignment: true
  },
  {
    align: 'right',
    text: "Innovation is our playground. We are constantly exploring new technologies, frameworks, and design trends to stay at the forefront of the digital landscape. This forward-thinking mindset enables us to provide our clients with solutions that are not only effective today but also prepared for the challenges of tomorrow.",
    image: './h1.png',
    imagePosition: 'left',
    imageWidth: 320,
    imageHeight: 380,
    wide: true,
    closeAlignment: true
  },
  {
    align: 'left',
    text: "Beyond the technology, we are a team that values integrity, accountability, and building long-term relationships. We are proud of the partnerships we have built and the growth we have helped our clients achieve. Your success is the ultimate measure of our own."
  },
  {
    align: 'right',
    text: "As we look to the future, our mission remains the same: to be the driving force behind exceptional digital experiences. We are excited to continue pushing boundaries, solving complex problems, and helping businesses thrive in an ever-evolving digital world. Let's build something amazing together."
  },
];

const AboutPage = () => {
  return (
    <>
      <SEOHead pageKey="about" />
      <div className="relative py-32 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section with Larger Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 relative"
          >
            {/* Larger Image Container */}
            <div 
              className="absolute right-0 top-1/2 transform -translate-y-[100px] w-80 h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[500px] bg-contain bg-no-repeat bg-center z-10"
              style={{ 
                backgroundImage: "url('./pre.gif')",
                right: '55px',
                marginLeft: '15px',
                padding: '20px 0',
                transform: 'translate(20%, -22%)',
              }}
            ></div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-4 gradient-text relative z-20">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 relative z-20">
              Our journey, our values, and our commitment to you.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16 relative z-0 mt-40 md:mt-48 lg:mt-56">
            {aboutContent.map((item, index) => {
              if (item.isImage) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center my-8"
                  >
                    <div className="max-w-6xl w-full rounded-xl overflow-hidden shadow-xl aladin">
                      <img 
                        src={item.url} 
                        alt={item.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={index}
                  className={`flex ${item.align === 'left' ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: item.align === 'left' ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className={`${item.wide ? 'w-full max-w-[95%]' : 'max-w-2xl'} glass-effect p-8 rounded-2xl relative z-30 flex ${item.image ? 'items-center' : ''} ${item.closeAlignment ? 'gap-2 md:gap-4' : 'gap-8'}`}>
                    {item.image && item.imagePosition === 'left' && (
                      <div className={`flex-shrink-0 ${item.closeAlignment ? 'mr-0' : ''}`}
                        style={{ 
                          width: `${item.imageWidth}px`,
                          height: `${item.imageHeight}px`
                        }}>
                        <img 
                          src={item.image} 
                          alt={item.align === 'left' ? "Quality icon" : "Innovation icon"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`${item.wide ? 'flex-1' : ''} ${item.closeAlignment ? 'pl-4 md:pl-6' : ''}`}>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    {item.image && item.imagePosition === 'right' && (
                      <div className={`flex-shrink-0 ${item.closeAlignment ? 'ml-0' : ''}`}
                        style={{ 
                          width: `${item.imageWidth}px`,
                          height: `${item.imageHeight}px`
                        }}>
                        <img 
                          src={item.image} 
                          alt={item.align === 'left' ? "Quality icon" : "Innovation icon"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx global>{`
      .aladin{
        margin-top: -200px;
      }
      `}</style>
    </>
  );
};

export default AboutPage;