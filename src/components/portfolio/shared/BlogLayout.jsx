import React from "react";

const BlogLayout = ({
  title,
  description,
  featuredImage,
  children,
  metaDescription,
  date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
}) => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Full-width Image */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={featuredImage}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextElementSibling.style.display = "flex";
          }}
        />
        <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-gray-300">{metaDescription}</p>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="prose prose-invert max-w-none">
          <div className="flex items-center text-gray-400 text-sm mb-8">
            <span>Published on {date}</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>

          {children}

          {/* <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-300">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "10 Tips for Effective Content Strategy",
                  excerpt:
                    "Learn how to create a content strategy that drives results...",
                  date: "June 15, 2023",
                  readTime: "4 min read",
                },
                {
                  title: "Maximizing ROI with Digital Advertising",
                  excerpt:
                    "Discover strategies to get the most out of your ad spend...",
                  date: "July 2, 2023",
                  readTime: "6 min read",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-800 dark:text-gray-400 text-sm mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-800 dark:text-gray-500">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
