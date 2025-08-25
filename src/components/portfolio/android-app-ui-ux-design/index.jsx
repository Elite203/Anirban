import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-styles.css";

export default function AndroidAppUIPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Adobe Photoshop Express",
      frameImage: "/portfolio/android-ui/1.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.adobe.psmobile&hl=en_IN",
      category: "Photo & Video",
    },
    {
      id: 2,
      title: "Adobe Firefly",
      frameImage: "/portfolio/android-ui/2.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.adobe.firefly&hl=en_IN",
      category: "AI Design",
    },
    {
      id: 3,
      title: "iShala",
      frameImage: "/portfolio/android-ui/3.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.swarsystems.ishala&hl=en_IN",
      category: "Education",
    },
    {
      id: 4,
      title: "Aravali Upskill",
      frameImage: "/portfolio/android-ui/4.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.vlv.aravali.upskillHindi&hl=en_IN",
      category: "Education",
    },
    {
      id: 5,
      title: "FanTv",
      frameImage: "/portfolio/android-ui/5.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.fantvapp&hl=en_IN",
      category: "Entertainment",
    },
    {
      id: 6,
      title: "Explurger",
      frameImage: "/portfolio/android-ui/6.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.explurgerapp&hl=en_IN",
      category: "Social",
    },
    {
      id: 7,
      title: "Seekho",
      frameImage: "/portfolio/android-ui/7.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.seekho.android&hl=en_IN",
      category: "Education",
    },
    {
      id: 8,
      title: "Nebo",
      frameImage: "/portfolio/android-ui/8.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.myscript.nebo&hl=en_IN",
      category: "Productivity",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    initialSlide: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-white overflow-hidden relative py-20">
    <div className="min-h-screen text-white overflow-hidden relative py-20">
      <div className="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Android App UI/UX Design
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing beautiful and intuitive Android app interfaces with
              exceptional user experiences.
            </p>
          </div>

          <div className="slider-container px-12">
            <Slider {...settings}>
              {projects.map((project) => (
                <div key={project.id} className="px-4 outline-none">
                  <div className="mx-auto transition-all duration-300 hover:scale-105">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    window.open(project.playStoreLink, "_blank");
  };

  return (
    <div className="relative group transition-all duration-300 transform hover:scale-105">
      <div
        className="relative mx-auto cursor-pointer"
        style={{ width: "280px", height: "580px" }}
        onClick={handleCardClick}
      >
        <div className="absolute inset-0 rounded-[3rem] transition-all duration-300 overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(192,132,252,0.4)]">
          <img
            src={project.frameImage}
            alt={`${project.title} Frame`}
            className="w-full h-full object-cover rounded-[3rem]"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "block";
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem]" />
        </div>

        {/* App Info */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-[3rem] text-center">
          <h3 className="text-xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 mb-3">
            {project.category}
          </p>
        </div> */}
      </div>
    </div>
  );
};
