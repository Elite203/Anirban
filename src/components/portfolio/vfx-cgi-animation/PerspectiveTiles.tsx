import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TileData {
  id: string;
  images: string[];
  videos?: string[];
  title: string;
  speed: number;
  useVideos?: boolean;
}

const PerspectiveTiles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Create arrays of 24 images by repeating the base 12 images
  const baseImages = [
    '/portfolio/VFX/Thumbnail/1.jpg', '/portfolio/VFX/Thumbnail/2.jpg', '/portfolio/VFX/Thumbnail/3.jpg', '/portfolio/VFX/Thumbnail/4.jpg',
    '/portfolio/VFX/Thumbnail/5.jpg', '/portfolio/VFX/Thumbnail/6.jpg', '/portfolio/VFX/Thumbnail/7.jpg', '/portfolio/VFX/Thumbnail/8.jpg'
  ];
  
  const baseVideos = [
    '/portfolio/VFX/VIdeo/1.mp4', 
    '/portfolio/VFX/VIdeo/2.mp4',
    '/portfolio/VFX/VIdeo/3.mp4',
    '/portfolio/VFX/VIdeo/4.mp4',
    '/portfolio/VFX/VIdeo/5.mp4',
    '/portfolio/VFX/VIdeo/6.mp4',
    '/portfolio/VFX/VIdeo/7.mp4',
    '/portfolio/VFX/VIdeo/8.mp4'
  ];
  
  const createImageSet = (count: number): string[] => {
    const images: string[] = [];
    for (let i = 0; i < count; i++) {
      images.push(baseImages[i % baseImages.length]);
    }
    return images;
  };

  const createVideoSet = (count: number): string[] => {
    const videos: string[] = [];
    for (let i = 0; i < count; i++) {
      videos.push(baseVideos[i % baseVideos.length]);
    }
    return videos;
  };

  const tileGroups: TileData[] = [
    {
      id: 'group-1',
      images: createImageSet(8),
      title: 'Creative Design',
      speed: 0.8,
      useVideos: false
    },
    {
      id: 'group-2',
      images: createImageSet(8),
      videos: createVideoSet(8),
      title: 'Digital Innovation',
      speed: 1.2,
      useVideos: true
    },
    {
      id: 'group-3',
      images: createImageSet(8),
      title: 'Visual Storytelling',
      speed: 0.6,
      useVideos: false
    },
    {
      id: 'group-4',
      images: createImageSet(8),
      videos: createVideoSet(8),
      title: 'Skill Development',
      speed: -0.9,
      useVideos: true
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const tileGroups = container.querySelectorAll('.tile-group');


    // Create scroll-triggered animations for each tile group
    tileGroups.forEach((group, index) => {
      const tilesGrid = group.querySelector('.tiles-grid');
      const title = group.querySelector('.tile-title');
      
      // Initial setup for each grid - start in diagonal perspective
      gsap.set(tilesGrid, {
        rotationX: 65,
        rotationY: index % 2 === 0 ? 25 : -25,
        rotationZ: index % 2 === 0 ? -15 : 15,
        transformOrigin: 'center center',
        scale: 0.7,
        opacity: 0.4,
        z: -300
      });
      
      // Animate entire grid into horizontal alignment on scroll
      ScrollTrigger.create({
        trigger: group,
        start: 'top 90%',
        end: 'center 30%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          gsap.to(tilesGrid, {
            duration: 0.3,
            rotationX: 65 - (65 * progress),
            rotationY: (index % 2 === 0 ? 25 : -25) * (1 - progress),
            rotationZ: (index % 2 === 0 ? -15 : 15) * (1 - progress),
            scale: 0.7 + (0.3 * progress),
            opacity: 0.4 + (0.6 * progress),
            z: -300 + (300 * progress),
            ease: 'power2.out'
          });
        }
      });

      // Horizontal parallax movement for entire grid
      const speed = (index % 2 === 0 ? 1 : -1) * 50;
      
      gsap.to(tilesGrid, {
        x: () => speed,
        scrollTrigger: {
          trigger: group,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Title animation
      if (title) {
        gsap.fromTo(title, 
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 70%',
              end: 'center center',
              scrub: 1
            }
          }
        );
      }
    });

    setIsLoaded(true);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="perspective-container">
      <style>{`
        .perspective-container {
          min-height: 100vh;
          background: none;
          overflow-x: hidden;
          position: relative;
        }

        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(245,158,11,0.08) 70%);
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 900;
          color: #f0f0f0;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 0.9;
          text-shadow: 0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(255,255,255,0.2);
        }

        .tile-group {
          min-height: 120vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 3rem;
          perspective: 1000px;
          overflow: visible;
          background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(245,158,11,0.04) 50%, rgba(255,255,255,0.02) 100%);
        }

        .tiles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1800px;
          width: 100%;
          height: auto;
          min-height: 400px;
          transform-style: preserve-3d;
          padding: 3rem;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
          border-radius: 20px;
          border: 1px solid rgba(245, 158, 11, 0.3);
          backdrop-filter: blur(10px);
        }



        .perspective-tile {
          aspect-ratio: 4/3;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.3), 
            0 0 20px rgba(245,158,11,0.2),
            inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          border: 1px solid rgba(245,158,11,0.4);
        }

        .perspective-tile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(245,158,11,0.15) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .perspective-tile:hover::before {
          opacity: 1;
        }

        .perspective-tile:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.4), 
            0 0 40px rgba(245,158,11,0.5),
            inset 0 1px 0 rgba(255,255,255,0.2);
          z-index: 2;
        }

        .perspective-tile video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          background: #2a2a2a;
        }

        .perspective-tile.video-tile {
          background: #2a2a2a;
        }

        .tile-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(2rem, 6vw, 6rem);
          font-weight: 800;
          color: rgba(255,255,255,0.95);
          text-align: center;
          letter-spacing: -0.02em;
          text-shadow: 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(245,158,11,0.4);
          z-index: 10;
          pointer-events: none;
        }

        .content-section {
          padding: 10rem 3rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          background: rgba(245,158,11,0.08);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 20px;
        }

        .content-text {
          font-size: clamp(1.2rem, 3vw, 2rem);
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
          font-weight: 300;
          letter-spacing: 0.01em;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .brand-accent {
          color: #f59e0b;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .tiles-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 2rem;
            height: auto;
            min-height: 350px;
            max-width: 1200px;
          }
          
          .tile-group {
            padding: 6rem 2rem;
            overflow: visible;
            min-height: 100vh;
          }

          .tile-title {
            font-size: clamp(1.8rem, 5vw, 4rem);
          }

          .content-section {
            padding: 8rem 2rem;
            margin: 2rem;
          }
        }

        @media (max-width: 640px) {
          .tiles-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 1.2rem;
            padding: 1.5rem;
            height: auto;
            min-height: 600px;
            max-width: 800px;
          }
          
          .tile-group {
            padding: 5rem 1.5rem;
            overflow: visible;
            min-height: 90vh;
          }
          
          .hero-section {
            padding: 2rem;
          }

          .tile-title {
            font-size: clamp(1.5rem, 4vw, 3rem);
          }

          .content-section {
            padding: 6rem 1.5rem;
            margin: 1.5rem;
          }

          .content-text {
            font-size: clamp(1rem, 2.5vw, 1.6rem);
          }
        }

        @media (max-width: 480px) {
          .tiles-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(8, 1fr);
            gap: 1rem;
            padding: 1.2rem;
            height: auto;
            min-height: 800px;
            max-width: 400px;
          }
          
          .tile-group {
            padding: 4rem 1rem;
            overflow: visible;
            min-height: 120vh;
          }

          .tile-title {
            font-size: clamp(1.2rem, 3.5vw, 2.5rem);
          }

          .content-section {
            padding: 5rem 1rem;
            margin: 1rem;
          }

          .content-text {
            font-size: clamp(0.9rem, 2vw, 1.4rem);
            line-height: 1.5;
          }
        }
      `}</style>

      {/* Hero Section <section className="hero-section">
        <h1 className="hero-title">
          Perspective<br />
          <span style={{ color: '#64ffda' }}>Tiles</span>
        </h1>
      </section> */}
      

      {/* Animated Tile Groups */}
      {tileGroups.map((group, groupIndex) => (
        <section key={group.id} className="tile-group">
          <div className="tiles-grid">
            {group.useVideos && group.videos ? (
              group.videos.map((video, index) => (
                <div
                  key={index}
                  className="perspective-tile video-tile"
                  style={{
                    animationDelay: `${index * 0.02}s`
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={(e) => {
                      console.warn(`Failed to load video: ${video}`);
                      // Fallback to image background
                      const target = e.target as HTMLVideoElement;
                      const container = target.parentElement;
                      if (container) {
                        container.style.backgroundImage = `url(${group.images[index]})`;
                        container.style.backgroundSize = 'cover';
                        container.style.backgroundPosition = 'center';
                        target.style.display = 'none';
                      }
                    }}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))
            ) : (
              group.images.map((image, index) => (
                <div
                  key={index}
                  className="perspective-tile"
                  style={{
                    backgroundImage: `url(${image})`,
                    animationDelay: `${index * 0.02}s`
                  }}
                />
              ))
            )}
          </div>
          <h2 className="tile-title">{group.title}</h2>
        </section>
      ))}

      {/* Content Section */}
     

      {/* Final Large Grid Section
        <section className="tile-group">
        <div className="tiles-grid">
          {createImageSet(12).map((image, index) => (
            <div
              key={`final-${index}`}
              className="perspective-tile"
              style={{
                backgroundImage: `url(${image})`,
                animationDelay: `${index * 0.01}s`
              }}
            />
          ))}
        </div>
        <h2 className="tile-title">Culture</h2>
      </section> */}
    
       <section className="content-section">
        <p className="content-text">
          At <span className="brand-accent">Anirban's Skill Academy</span>, we combine cutting-edge technology with creative expertise 
          to deliver exceptional <span className="brand-accent">VFX, CGI, and animation</span> services. Our team transforms ideas into 
          stunning visual experiences that captivate audiences and elevate your brand.
        </p>
      </section>
    </div>
  );
};

export default PerspectiveTiles;