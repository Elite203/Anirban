import React from "react";

const AlternatingLayout = ({ items }) => {
  return (
    <div className="space-y-20 md:space-y-32">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 md:gap-12`}
        >
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-gray-800 dark:text-gray-400">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p>Preview not available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
              {item.features && (
                <ul className="space-y-2 mt-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-800 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingLayout;
