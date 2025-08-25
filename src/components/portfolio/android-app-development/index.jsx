import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-styles.css";

export default function AndroidAppDevelopmentPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Careerwill App",
      frameImage: "/portfolio/web-dev/3.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.careerwill.careerwillapp&hl=en_IN&pli=1",
      category: "Education",
    },
    {
      id: 2,
      title: "KD Campus Live",
      frameImage: "/portfolio/web-dev/6.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=app.kdcampus.livestreaming&hl=en_IN",
      category: "Education",
    },
    {
      id: 3,
      title: "NEON Classes",
      frameImage: "/portfolio/web-dev/7.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=codexo.neonclasses&hl=en_IN",
      category: "Education",
    },
    {
      id: 4,
      title: "Parmar Academy",
      frameImage: "/portfolio/web-dev/8.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.parmar.academy&hl=en_IN",
      category: "Education",
    },
    {
      id: 5,
      title: "Forest",
      frameImage: "/portfolio/web-dev/9.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=cc.forestapp&hl=en_IN",
      category: "Productivity",
    },
    {
      id: 6,
      title: "Sleep If U Can",
      frameImage: "/portfolio/web-dev/10.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=droom.sleepIfUCan&hl=en_IN",
      category: "Lifestyle",
    },
    {
      id: 7,
      title: "Spin The Bottle",
      frameImage: "/portfolio/web-dev/11.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.ciliz.spinthebottle&hl=en_IN",
      category: "Games",
    },
    {
      id: 8,
      title: "Aravali Reels",
      frameImage: "/portfolio/web-dev/12.png",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.vlv.aravali.reels&hl=en_IN",
      category: "Social",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Android App Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Building powerful, intuitive, and scalable Android applications.
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
        <div className="absolute inset-0 rounded-[3rem] transition-all duration-300 overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
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
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-3">{project.category}</p>
        </div> */}
      </div>
    </div>
  );
};
