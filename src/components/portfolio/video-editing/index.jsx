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
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
);

export default function VideoEditingPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Video files from the video editing portfolio folder
  const videos = [
    { id: 1, url: "/portfolio/Video Editing/7 video editing.mp4" },
    { id: 2, url: "/portfolio/Video Editing/8 video editing.mp4" },
    { id: 3, url: "/portfolio/Video Editing/9 video editing.mp4" },
  ];

  // Grid layout configuration for 3 videos
  const gridConfig = [
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-1" },
    { row: "row-span-1", col: "col-span-2" },
  ];

  const getGridConfig = (index) => {
    if (index < gridConfig.length) {
      return { ...gridConfig[index], index };
    }
    return { row: "", col: "", index };
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Video Editing Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px]">
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
