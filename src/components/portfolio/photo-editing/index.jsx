import React, { useState } from "react";

export default function PhotoEditingPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Sample images - replace with actual paths
  const images = [
    {
      id: 1,
      after: "/portfolio/photoEditing/1.jpg",
      before: "/portfolio/photoEditing/2.jpg",
    },
    {
      id: 2,
      before: "/portfolio/photoEditing/3.png",
      after: "/portfolio/photoEditing/4.png",
    },
    {
      id: 3,
      before: "/portfolio/photoEditing/5.png",
      after: "/portfolio/photoEditing/6.png",
    },
    {
      id: 4,
      before: "/portfolio/photoEditing/4.jpg",
      after: "/portfolio/photoEditing/7.png",
    },
    {
      id: 5,
      before: "/portfolio/photoEditing/9z.jpg",
      after: "/portfolio/photoEditing/9.jpg",
    },
    {
      id: 6,
      before: "/portfolio/photoEditing/3a.png",
      after: "/portfolio/photoEditing/3b.png",
    },
  ];

  // Grid layout configuration
  const gridConfig = [
    { row: "row-span-2", col: "col-span-1" }, // First column - 1 image
    [
      { row: "row-span-1", col: "col-span-1" }, // Second column - 2 images
      { row: "row-span-1", col: "col-span-1" },
    ],
    { row: "row-span-2", col: "col-span-1" }, // Third column - 1 image
    [
      { row: "row-span-1", col: "col-span-1" }, // Fourth column - 3 images
      { row: "row-span-1", col: "col-span-1" },
      { row: "row-span-1", col: "col-span-1" },
    ],
  ];

  // Helper to get grid config for each image
  const getImageConfig = (index) => {
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
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Photo Editing Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]">
          {images.map((img, index) => {
            const config = getImageConfig(index);
            return (
              <div
                key={img.id}
                className={`relative rounded-lg overflow-hidden ${config.row} ${config.col} group`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <img
                  src={hoveredIndex === index ? img.after : img.before}
                  alt={`Photo ${img.id}`}
                  className={`w-full h-full object-cover transition-all duration-500 transform ${
                    hoveredIndex === index ? "scale-105" : ""
                  }`}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/f3f4f6/9ca3af?text=Photo+${img.id}`;
                  }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">
                    {hoveredIndex === index ? "After" : "Before"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
