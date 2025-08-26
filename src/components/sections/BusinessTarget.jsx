import { useEffect, useState } from "react";

export default function BusinessTarget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Gradient text class for consistent styling
  const gradientTextClass =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 dark:from-blue-500 dark:to-red-400";

  return (
    <div
      id="businesses"
      className={`min-h-screen flex flex-col justify-center px-4 text-center space-y-8 md:space-y-12 bg-white dark:bg-gray-900 transition-opacity duration-1000 relative ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 sm:opacity-100 z-0"
        style={{
          backgroundImage: "url('/tree.png')"
        }}
      ></div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Load Google Fonts */}
        <div className="hidden">
          <link
            href="https://fonts.googleapis.com/css2?family=Akronim&family=Fredericka+the+Great&family=Piedra&family=Rubik+Scribble&family=Zen+Tokyo+Zoo&display=swap"
            rel="stylesheet"
          />
        </div>

      {/* Alongwith */}
      <div className="relative inline-block">
        <h2
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Tilt Prism",
            lineHeight: "3.5",
            paddingBottom: "0.5em",
          }}
        >
          Alongwith
        </h2>
      </div>

      {/* Large Businesses */}
      <div className="transform transition-all duration-1000 hover:scale-105">
        <h1
          className={`text-6xl sm:text-6xl md:text-9xl lg:text-8xl xl:text-8.5xl font-bold tracking-wide ${gradientTextClass} hover:scale-125 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Teameasy",
            lineHeight: "1.3",
            paddingBottom: "0.5em",
          }}
        >
          LARGE BUSINESSES
        </h1>
      </div>

      {/* We, WILL, ALSO, Target section */}
      <div className="space-y-6 flex flex-col items-center">
        {/* We */}
        <div className="relative inline-block">
          <p
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-widest font-bold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
            style={{
              fontFamily: "Akronim",
              lineHeight: "3.5",
              paddingBottom: "0.5em",
            }}
          >
            We
          </p>
        </div>

        {/* WILL and ALSO on separate lines */}
        <div className="space-y-4 flex flex-col items-center" style={{marginBottom: "4em"}}>
          <div
            className="relative inline-block"
            style={{
              marginBottom: "6em",
            }}
          >
            {/* <div
              className={`inline-block border-4 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-full text-2xl md:text-3xl font-bold ${gradientTextClass} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              style={{
                fontFamily: "Akronim",
                fontSize: "100px",
                lineHeight: "2",
                paddingBottom: "0.5em",
              }}
            >
              WILL
            </div> */}
            {/* <div
              className={`inline-block border-4 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-full text-2xl md:text-3xl font-bold ${gradientTextClass} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              style={{
                fontFamily: "Akronim",
                fontSize: "100px",
                lineHeight: "1.1", // Adjusted line-height
                paddingBottom: "0.5em", // Removed the extra padding
                height: "140px", // Fixed height to ensure rounded shape
              }}
            >
              WILL
            </div> */}
            <div
              className={`inline-block border-2 border-blue-600 dark:border-blue-400 px-6 py-2 rounded-full text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${gradientTextClass} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              style={{
                fontFamily: "Akronim",
                // fontSize: "100px",
                lineHeight: "3.3",
                paddingBottom: "0", // No extra padding at the bottom
                height: "175px sm:height: 140px", // Adjusted height for better balance
              }}
            >
              WILL
            </div>
          </div>

          <div
            className={`inline-block border-2 border-red-600 dark:border-red-400 px-8 py-3 rounded-full text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${gradientTextClass} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
            style={{
              fontFamily: "Akronim",
              // fontSize: "100px",
              lineHeight: "4",
              paddingBottom: "0em",
            }}
          >
            ALSO
          </div>
        </div>
      </div>

      {/* TARGET OUR USER section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 w-full text-base md:text-lg lg:text-xl font-bold mt-8">
        <span
          className={`${gradientTextClass} hover:scale-110 transition-transform cursor-pointer text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
          style={{
            fontFamily: "Zen Tokyo Zoo",
            lineHeight: "3.5",
            paddingBottom: "0.5em",
          }}
        >
          TARGET
        </span>
        <span
          className={`${gradientTextClass} hover:scale-110 transition-transform cursor-pointer text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-4xl`}
          style={{
            fontFamily: "Zen Tokyo Zoo",
            lineHeight: "3.5",
            paddingBottom: "1.8em",
          }}
        >
          OUR
        </span>
        <span
          className={`${gradientTextClass} hover:scale-110 transition-transform cursor-pointer text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
          style={{
            fontFamily: "Zen Tokyo Zoo",
            lineHeight: "3.5",
            paddingBottom: "0.5em",
          }}
        >
          USERS
        </span>
      </div>

      <p
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8 ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
        style={{ fontFamily: "Fredericka the Great" }}
      >
        Of
      </p>

      {/* OF SMALL & STARTUP BUSINESSES */}
      <div className="relative px-2">
        <p
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-6xl mt-6 font-bold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Fredericka the Great",
            lineHeight: "8.5",
            paddingBottom: "0.5em",
          }}
        >
          <span className={`font-bold ${gradientTextClass}`}>
            SMALL & STARTUP
          </span>{" "}
          BUSINESSES
        </p>
      </div>

      {/* WITH */}
      <p
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8 ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
        style={{ fontFamily: "Fredericka the Great", marginBottom: "1em" }}
      >
        WITH
      </p>

      {/* POCKET FRIENDLY PRICE section */}
      <div className="min-h-[40vh] flex flex-col justify-center space-y-6 sm:space-y-8 px-2">
        {/* POCKET - Left aligned on desktop, center on mobile */}
        <div className="w-full max-w-6xl flex justify-center sm:justify-start" style={{marginBottom: "1em"}}>
          <p
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
            style={{
              fontFamily: "Rubik Scribble",
              lineHeight: "3.5",
              paddingBottom: "0.5em",
            }}
          >
            POCKET
          </p>
        </div>

        {/* FRIENDLY - Center aligned */}
        <div className="w-full max-w-6xl flex justify-center">
          <p
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer text-center`}
            style={{
              fontFamily: "Fredericka the Great",
              lineHeight: "3.5",
              paddingBottom: "0.5em",
            }}
          >
            FRIENDLY
          </p>
        </div>

        {/* PRICE - Right aligned on desktop, center on mobile with responsive lines */}
        <div className="w-full max-w-6xl flex justify-center sm:justify-end" style={{marginBottom: "1em"}}> 
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="w-6 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 rounded-full"></div>
            <p
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
              style={{
                fontFamily: "Rubik Scribble",
                lineHeight: "3.5",
                paddingBottom: "0.5em",
              }}
            >
              PRICE
            </p>
            <div className="w-6 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 rounded-full"></div>
          </div>
        </div>
      </div>

        <style jsx>{`
          @keyframes shake {
            0%,
            100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-10px);
            }
            50% {
              transform: translateX(10px);
            }
            75% {
              transform: translateX(-5px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
