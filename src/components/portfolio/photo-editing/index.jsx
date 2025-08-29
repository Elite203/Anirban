import React, { useState } from "react";

export default function PhotoEditingPortfolio() {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  // First set of images
  const images1 = [
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

  // Second set of images
  const images2 = [
    {
      id: 7,
      after: "/portfolio/photoEditing/1before.jpg",
      before: "/portfolio/photoEditing/2after.jpg",
    },
    {
      id: 8,
      before: "/portfolio/photoEditing/3before.jpg",
      after: "/portfolio/photoEditing/4after.jpg",
    },
    {
      id: 9,
      before: "/portfolio/photoEditing/5before.png",
      after: "/portfolio/photoEditing/6after.png",
    },
    {
      id: 10,
      before: "/portfolio/photoEditing/7before.jpg",
      after: "/portfolio/photoEditing/8after.png",
    },
    {
      id: 11,
      before: "/portfolio/photoEditing/9before.jpg",
      after: "/portfolio/photoEditing/10after.jpg",
    },
    {
      id: 12,
      before: "/portfolio/photoEditing/11before.jpg",
      after: "/portfolio/photoEditing/12after.jpg",
    },
  ];

  // Third set (only one image, full width)
  const images3 = [
    {
      id: 13,
      after: "/portfolio/photoEditing/13.jpg",
      before: "/portfolio/photoEditing/13.jpg",
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

  // Component to render a grid (so we can reuse it for all sets)
  const ImageGrid = ({ images }) => {
    // If only one image (like images3), make it full width
    if (images.length === 1) {
      const img = images[0];
      return (
        <div
          key={img.id}
          className="relative rounded-lg overflow-hidden w-full h-[500px] mb-5 group"
          onMouseEnter={() => setHoveredImageId(img.id)}
          onMouseLeave={() => setHoveredImageId(null)}
        >
          <img
            src={hoveredImageId === img.id ? img.after : img.before}
            alt={`Photo ${img.id}`}
            className={`w-full h-full object-cover transition-all duration-500 transform ${
              hoveredImageId === img.id ? "scale-105" : ""
            }`}
            onError={(e) => {
              e.target.src = `https://placehold.co/1200x500/f3f4f6/9ca3af?text=Photo+${img.id}`;
            }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium">
              {hoveredImageId === img.id ? "After" : "Before"}
            </span>
          </div>
        </div>
      );
    }

    // Default 4-column grid for multiple images
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px] mb-5">
        {images.map((img, index) => {
          const config = getImageConfig(index);
          return (
            <div
              key={img.id}
              className={`relative rounded-lg overflow-hidden ${config.row} ${config.col} group`}
              onMouseEnter={() => setHoveredImageId(img.id)}
              onMouseLeave={() => setHoveredImageId(null)}
            >
              <img
                src={hoveredImageId === img.id ? img.after : img.before}
                alt={`Photo ${img.id}`}
                className={`w-full h-full object-cover transition-all duration-500 transform ${
                  hoveredImageId === img.id ? "scale-105" : ""
                }`}
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/f3f4f6/9ca3af?text=Photo+${img.id}`;
                }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">
                  {hoveredImageId === img.id ? "After" : "Before"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Photo Editing Portfolio
        </h1>

        {/* First grid */}
        <ImageGrid images={images1} />

        {/* Second grid */}
        <ImageGrid images={images2} />

        {/* Third grid (full width image) */}
        <ImageGrid images={images3} />
      </div>
    </div>
  );
}
