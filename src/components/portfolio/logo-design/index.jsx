import React, { useState } from "react";
import { X } from "lucide-react";

const VideoModal = ({ videoUrl, onClose }) => (
  <div 
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button 
      onClick={onClose} 
      className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
    >
      <X className="w-8 h-8" />
    </button>
    <div className="w-full max-w-4xl aspect-video">
      <video 
        src={videoUrl} 
        autoPlay 
        controls 
        className="w-full h-full object-contain"
        onClick={e => e.stopPropagation()}
      />
    </div>
  </div>
);

export default function LogoDesignPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Replace these with your actual 3D video files
  const videos = [
    { id: 1, url: "/portfolio/logo/1.mp4" },
    { id: 2, url: "/portfolio/logo/2.mp4" },
    { id: 3, url: "/portfolio/logo/3.mp4" },
    { id: 4, url: "/portfolio/logo/4.mp4" },
    { id: 5, url: "/portfolio/logo/5.mp4" },
    { id: 6, url: "/portfolio/logo/6.mp4" },
  ];

  // Grid layout configuration
  const gridConfig = [
    { row: "row-span-2", col: "col-span-1" },
    [
      { row: "row-span-1", col: "col-span-1" },
      { row: "row-span-1", col: "col-span-1" },
    ],
    { row: "row-span-2", col: "col-span-1" },
    [
      { row: "row-span-1", col: "col-span-1" },
      { row: "row-span-1", col: "col-span-1" },
    ],
  ];

  const getGridConfig = (index) => {
    let current = 0;
    for (const item of gridConfig) {
      if (Array.isArray(item)) {
        if (index < current + item.length) {
          return { ...item[index - current], index };
        }
        current += item.length;
      } else {
        if (current === index) return { ...item, index };
        current++;
      }
    }
    return { row: "", col: "", index };
  };

  return (
    <div className="min-h-screen py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">3D Logo Animations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]">
          {videos.map((video, index) => {
            const config = getGridConfig(index);
            return (
              <div
                key={video.id}
                className={`relative rounded-xl overflow-hidden group ${config.row} ${config.col}`}
                onClick={() => setSelectedVideo(video.url)}
              >
                <video
                  src={video.url}
                  className="w-full h-full object-cover cursor-pointer"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-blue-600 ml-1"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {selectedVideo && (
        <VideoModal 
          videoUrl={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}
