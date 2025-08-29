import React, { useState } from "react";
import { X } from "lucide-react";

const VideoModal = ({ videoUrl, onClose }) => (
  <div
    className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-6 right-6 text-white/80 hover:text-white hover:scale-110 z-10 transition-all duration-300 ease-out p-2 rounded-full hover:bg-white/10"
    >
      <X className="w-6 h-6" />
    </button>
    <div className="w-full max-w-5xl aspect-video transform scale-95 animate-scale-in">
      <video
        src={videoUrl}
        autoPlay
        controls
        className="w-full h-full object-contain rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
);

export default function MotionGraphicsPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Replace these with your actual motion graphics video files
  const videos = [
    { id: 1, url: "/portfolio/logo/1.mp4" },
    { id: 2, url: "/portfolio/logo/2.mp4" },
    { id: 3, url: "/portfolio/logo/3.mp4" },
    { id: 4, url: "/portfolio/logo/4.mp4" },
    { id: 5, url: "/portfolio/logo/5.mp4" },
    { id: 6, url: "/portfolio/logo/6.mp4" },
    { id: 7, url: "/portfolio/logo/4 motion graphics.mp4" },
    { id: 8, url: "/portfolio/logo/5 motion graphics.mp4" },
    { id: 9, url: "/portfolio/logo/6 motion graphics.mp4" },
    { id: 10, url: "/portfolio/logo/11 map anim.mp4" },
    { id: 11, url: "/portfolio/logo/12 map anim.mp4" },
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Motion Graphics Portfolio
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Discover a collection of dynamic motion graphics and animations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 h-auto md:h-[850px]">
          {videos.map((video, index) => {
            const config = getGridConfig(index);
            return (
              <div
                key={video.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 ${config.row} ${config.col} backdrop-blur-sm bg-black/5 shadow-lg border border-white/10`}
                onClick={() => setSelectedVideo(video.url)}
              >
                <video
                  src={video.url}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-500 ease-out shadow-2xl border border-white/20">
                    <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] sm:border-t-[10px] sm:border-b-[10px] sm:border-l-[16px] border-t-transparent border-b-transparent border-l-blue-600 ml-1 transform group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Click to view full screen
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
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
