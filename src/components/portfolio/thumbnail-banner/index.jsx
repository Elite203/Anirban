import React, { useState, useEffect, useRef } from "react";

export default function ThumbnailBannerPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Banner image mapping with correct extensions
  const bannerImages = [
    '001.png', '002.jpg', '003.jpg', '004.jpg', '005.jpg',
    '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg',
    '011.jpeg', '012.png', '013.jpg', '014.jpg', '015.png',
    '016.png', '017.png', '018.png', '019.png', '020.png'
  ];

  // Create different sets for varied layouts
  const featuredBanners = bannerImages.slice(0, 8); // First 8 for main grid
  const showcaseBanners = bannerImages.slice(8, 16); // Next 8 for showcase
  const highlightBanners = bannerImages.slice(16, 20); // Last 4 for highlights

  // Preload images
  useEffect(() => {
    bannerImages.forEach((imageName, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
      img.src = `/portfolio/Banner/${imageName}`;
    });
  }, []);

  // Creative grid layout configurations
  const gridLayouts = [
    { span: "md:col-span-2 md:row-span-2", size: "large" }, // 1st - Large featured
    { span: "md:col-span-1 md:row-span-1", size: "medium" }, // 2nd
    { span: "md:col-span-1 md:row-span-1", size: "medium" }, // 3rd
    { span: "md:col-span-1 md:row-span-2", size: "tall" },   // 4th - Tall
    { span: "md:col-span-1 md:row-span-1", size: "medium" }, // 5th
    { span: "md:col-span-2 md:row-span-1", size: "wide" },  // 6th - Wide
    { span: "md:col-span-1 md:row-span-1", size: "medium" }, // 7th
    { span: "md:col-span-1 md:row-span-1", size: "medium" }, // 8th
  ];

  // Animation variants for different effects
  const getAnimationClass = (index, isHovered) => {
    return ""; // Removed all zoom/scale/rotation effects
  };

  // Featured Grid Component
  const FeaturedGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] mb-8">
      {featuredBanners.map((imageName, index) => {
        const layout = gridLayouts[index];
        const isHovered = hoveredIndex === index;
        const isLoaded = loadedImages.has(index);
        
        return (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${layout.span} ${
              isLoaded ? '' : 'animate-pulse bg-gray-300'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <img
              src={`/portfolio/Banner/${imageName}`}
              alt={`Banner Design ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
              onError={(e) => {
                e.target.src = `https://placehold.co/600x400/1a1a1a/ff6b35?text=Banner+${index + 1}`;
              }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Content Overlay */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}>
              <h3 className="text-white font-bold text-lg mb-1">
                Banner Design {index + 1}
              </h3>
              <p className="text-gray-300 text-sm">
                Creative {layout.size} banner
              </p>
            </div>

            {/* Corner accent */}
            <div className={`absolute top-3 right-3 w-8 h-8 border-2 border-orange-400 transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-70'
            }`} />
          </div>
        );
      })}
    </div>
  );

  // Image Lightbox Component
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % bannerImages.length);
  };
  
  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };
  
  // Handle body scroll lock when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const Lightbox = () => {
    if (!lightboxOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={closeLightbox}
          className="fixed top-4 right-4 z-[10000] w-12 h-12 md:w-14 md:h-14 bg-gray-800/90 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-lg"
          style={{ pointerEvents: 'auto' }}
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Previous button */}
        <button
          onClick={prevImage}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[10000] w-14 h-14 md:w-16 md:h-16 bg-orange-500/90 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-xl"
          style={{ pointerEvents: 'auto' }}
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Next button */}
        <button
          onClick={nextImage}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[10000] w-14 h-14 md:w-16 md:h-16 bg-orange-500/90 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-xl"
          style={{ pointerEvents: 'auto' }}
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image container - clickable area for closing */}
        <div 
          className="relative w-full h-full flex items-center justify-center p-16 md:p-20 cursor-pointer"
          onClick={closeLightbox}
        >
          <img
            src={`/portfolio/Banner/${bannerImages[lightboxIndex]}`}
            alt={`Banner Design ${lightboxIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.target.src = `https://placehold.co/800x600/1a1a1a/ff6b35?text=Banner+${lightboxIndex + 1}`;
            }}
          />
        </div>
        
        {/* Image info */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-center z-[9999]">
          <div className="bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
            <p className="text-white font-medium text-sm md:text-base mb-1">
              Banner Design {lightboxIndex + 1}
            </p>
            <p className="text-gray-300 text-xs md:text-sm">
              {lightboxIndex + 1} of {bannerImages.length}
            </p>
          </div>
        </div>
        
        {/* Thumbnail strip */}
        <div className="fixed bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 z-[9999]">
          {bannerImages.slice(Math.max(0, lightboxIndex - 4), lightboxIndex + 5).map((imageName, index) => {
            const actualIndex = Math.max(0, lightboxIndex - 4) + index;
            return (
              <button
                key={actualIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(actualIndex);
                }}
                className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  actualIndex === lightboxIndex 
                    ? 'ring-2 ring-orange-500 opacity-100 scale-110' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                style={{ pointerEvents: 'auto' }}
              >
                <img
                  src={`/portfolio/Banner/${imageName}`}
                  alt={`Thumbnail ${actualIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/100x100/1a1a1a/ff6b35?text=${actualIndex + 1}`;
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  
  // Showcase Grid Component
  const ShowcaseGrid = () => (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Creative Showcase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {showcaseBanners.map((imageName, index) => {
          const globalIndex = index + 8;
          const isHovered = hoveredIndex === globalIndex;
          const isLoaded = loadedImages.has(globalIndex);
          
          return (
            <div
              key={`showcase-${index}`}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 ${
                isLoaded ? '' : 'animate-pulse bg-gray-300'
              }`}
              onMouseEnter={() => setHoveredIndex(globalIndex)}
              onMouseLeave={() => setHoveredIndex(-1)}
              onClick={() => openLightbox(globalIndex)}
            >
              <img
                src={`/portfolio/Banner/${imageName}`}
                alt={`Showcase Banner ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `https://placehold.co/400x250/1a1a1a/ff6b35?text=Showcase+${index + 1}`;
                }}
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Zoom icon */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className={`transition-all duration-300 ${
                  isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <h3 className="text-white font-medium text-sm md:text-base mb-1">
                    Showcase {index + 1}
                  </h3>
                  <p className="text-orange-300 text-xs md:text-sm">
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Highlight Grid (Final 4 images)
  const HighlightGrid = () => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Featured Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlightBanners.map((imageName, index) => {
          const globalIndex = index + 16;
          const isHovered = hoveredIndex === globalIndex;
          const isLoaded = loadedImages.has(globalIndex);
          
          return (
            <div
              key={globalIndex}
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer ${
                isLoaded ? '' : 'animate-pulse bg-gray-300'
              }`}
              onMouseEnter={() => setHoveredIndex(globalIndex)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <img
                src={`/portfolio/Banner/${imageName}`}
                alt={`Highlight Banner ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  e.target.src = `https://placehold.co/400x300/1a1a1a/ff6b35?text=Highlight+${index + 1}`;
                }}
              />
              
              {/* Animated border */}
              <div className={`absolute inset-0 border-2 transition-all duration-300 ${
                isHovered ? 'border-orange-400' : 'border-transparent'
              }`} />
              
              {/* Number badge */}
              <div className={`absolute top-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                isHovered ? 'bg-orange-600' : 'bg-orange-500'
              }`}>
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Bottom info */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-all duration-300 ${
                isHovered ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <p className="text-white font-medium">Highlight Design {index + 1}</p>
                <p className="text-orange-300 text-sm">Premium Quality</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Banner Design Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover stunning banner designs that capture attention and drive engagement. 
            Each piece showcases creative excellence with modern aesthetics and professional quality.
          </p>
        </div>

        {/* Featured Grid */}
        <FeaturedGrid />

        {/* Showcase Grid */}
        <ShowcaseGrid />

        {/* Highlight Grid */}
        <HighlightGrid />

        {/* Lightbox */}
        <Lightbox />

        {/* Stats Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">20+</div>
              <div className="text-gray-300">Banner Designs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Creative Quality</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Professional Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}