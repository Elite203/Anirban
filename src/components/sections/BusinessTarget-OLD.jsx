// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function BusinessTarget() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const bounceVariants = {
//     initial: { y: -20, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   return (
//     <motion.div
//       id="businesses"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-8 bg-white dark:bg-gray-900"
//     >
//       {/* Alongwith section */}
//       {/* <motion.div variants={itemVariants}>
//         <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
//           Alongwith
//         </h2>
//       </motion.div> */}

//       {/* Large Businesses */}
//       {/* <motion.div variants={bounceVariants} initial="initial" animate="animate">
//         <h1 className="text-5xl md:text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 dark:from-blue-500 dark:to-red-400">
//           LARGE BUSINESSES
//         </h1>
//       </motion.div> */}

//       {/* We will also target section */}
//       {/* <motion.div
//         variants={itemVariants}
//         className="space-y-3 flex flex-col items-center"
//       >
//         <p className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300">
//           We
//         </p>

//         <div className="flex gap-2">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-blue-600 dark:border-blue-400 px-4 py-1 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm"
//           >
//             WILL
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-red-600 dark:border-red-400 px-4 py-1 rounded-full text-sm font-semibold text-red-600 dark:text-red-400 shadow-sm"
//           >
//             ALSO
//           </motion.div>
//         </div>

//         <p className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300">
//           Target
//         </p>
//       </motion.div> */}

//       {/* Our User section */}
//       {/* <motion.div
//         variants={itemVariants}
//         className="flex justify-between w-full max-w-[500px] px-6 md:px-0 text-4xl font-semibold mt-6"
//       >
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="text-blue-700 dark:text-blue-400"
//         >
//           OUR
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="text-red-600 dark:text-red-400"
//         >
//           USER
//         </motion.span>
//       </motion.div> */}

//       {/* Small & Startup */}
//       {/* <motion.p variants={itemVariants} className="text-sm md:text-base mt-4">
//         <span className="font-semibold text-blue-600 dark:text-blue-400">
//           OF SMALL & STARTUP
//         </span>{" "}
//         BUSINESSES
//       </motion.p> */}

//       {/* With section */}
//       {/* <motion.p
//         variants={itemVariants}
//         className="text-xl font-bold mt-4 text-gray-700 dark:text-gray-300"
//       >
//         WITH
//       </motion.p> */}

//       {/* Pocket Friendly Price section */}
//       {/* <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="min-h-[50vh] flex flex-col items-center justify-center space-y-6"
//       >
//         <motion.p
//           animate={{
//             x: [0, -10, 10, -5, 5, 0],
//           }}
//           transition={{
//             delay: 1.5,
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="text-xl md:text-2xl font-semibold tracking-widest text-blue-800 dark:text-blue-400"
//         >
//           POCKET
//         </motion.p>

//         <motion.p
//           whileHover={{ scale: 1.05 }}
//           className="text-2xl md:text-3xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400"
//         >
//           FRIENDLY
//         </motion.p>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-4 mt-4"
//         >
//           <div className="w-6 h-[2px] bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400"></div>
//           <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
//             PRICE
//           </p>
//         </motion.div>
//       </motion.div> */}

//       <motion.div variants={itemVariants}>
//         <h2
//           className="text-lg font-semibold text-red-600 dark:text-red-400"
//           style={{ fontFamily: "Tilt Prism, cursive" }}
//         >
//           Alongwith
//         </h2>
//       </motion.div>

//       <motion.div variants={bounceVariants} initial="initial" animate="animate">
//         <h1
//           className="text-5xl md:text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 dark:from-blue-500 dark:to-red-400"
//           style={{ fontFamily: "Teameasy, sans-serif" }}
//         >
//           LARGE BUSINESSES
//         </h1>
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="space-y-3 flex flex-col items-center"
//       >
//         <p
//           className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300"
//           style={{ fontFamily: "Akronim, cursive" }}
//         >
//           We
//         </p>
//         <div className="flex gap-2">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-blue-600 dark:border-blue-400 px-4 py-1 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm"
//             style={{ fontFamily: "Zen Tokyo Zoo, cursive" }}
//           >
//             WILL
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-red-600 dark:border-red-400 px-4 py-1 rounded-full text-sm font-semibold text-red-600 dark:text-red-400 shadow-sm"
//             style={{ fontFamily: "Zen Tokyo Zoo, cursive" }}
//           >
//             ALSO
//           </motion.div>
//         </div>
//         <p
//           className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300"
//           style={{ fontFamily: "Zen Tokyo Zoo, cursive" }}
//         >
//           Target
//         </p>
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="flex justify-between w-full max-w-[500px] px-6 md:px-0 text-4xl font-semibold mt-6"
//       >
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="text-blue-700 dark:text-blue-400"
//           style={{ fontFamily: "Fredericka the Great, cursive" }}
//         >
//           OUR
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="text-red-600 dark:text-red-400"
//           style={{ fontFamily: "Fredericka the Great, cursive" }}
//         >
//           USER
//         </motion.span>
//       </motion.div>

//       <motion.p
//         variants={itemVariants}
//         className="text-sm md:text-base mt-4"
//         style={{ fontFamily: "Fredericka the Great, cursive" }}
//       >
//         <span className="font-semibold text-blue-600 dark:text-blue-400">
//           OF SMALL & STARTUP
//         </span>{" "}
//         BUSINESSES
//       </motion.p>

//       <motion.p
//         variants={itemVariants}
//         className="text-xl font-bold mt-4 text-gray-700 dark:text-gray-300"
//         style={{ fontFamily: "Rubik Scribble, cursive" }}
//       >
//         WITH
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="min-h-[50vh] flex flex-col items-center justify-center space-y-6"
//       >
//         <motion.p
//           animate={{ x: [0, -10, 10, -5, 5, 0] }}
//           transition={{
//             delay: 1.5,
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="text-xl md:text-2xl font-semibold tracking-widest text-blue-800 dark:text-blue-400"
//           style={{ fontFamily: "Piedra, cursive" }}
//         >
//           POCKET
//         </motion.p>
//         <motion.p
//           whileHover={{ scale: 1.05 }}
//           className="text-2xl md:text-3xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400"
//           style={{ fontFamily: "Rubik Scribble, cursive" }}
//         >
//           FRIENDLY
//         </motion.p>
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-4 mt-4"
//         >
//           <div className="w-6 h-[2px] bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400"></div>
//           <p
//             className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200"
//             style={{ fontFamily: "Piedra, cursive" }}
//           >
//             PRICE
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// NEW CODE WITH WROLKING

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function BusinessTarget() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const bounceVariants = {
//     initial: { y: -20, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   // Gradient text class for consistent styling
//   const gradientTextClass =
//     "bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 dark:from-blue-500 dark:to-red-400";

//   return (
//     <motion.div
//       id="businesses"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-12 bg-white dark:bg-gray-900"
//     >
//       <motion.div variants={itemVariants}>
//         <h2
//           className={`text-4xl md:text-5xl font-semibold ${gradientTextClass}`}
//           style={{ fontFamily: "Tilt Prism" }}
//         >
//           Alongwith
//         </h2>
//       </motion.div>

//       <motion.div variants={bounceVariants} initial="initial" animate="animate">
//         <h1
//           className={`text-6xl md:text-7xl font-bold tracking-wide ${gradientTextClass}`}
//           style={{ fontFamily: "Teameasy" }}
//         >
//           LARGE BUSINESSES
//         </h1>
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="space-y-6 flex flex-col items-center"
//       >
//         <p
//           className={`text-3xl md:text-4xl uppercase tracking-widest font-bold ${gradientTextClass}`}
//           style={{ fontFamily: "Akronim" }}
//         >
//           We
//         </p>
//         <div className="flex gap-4">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`inline-block border-4 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-full text-2xl md:text-3xl font-bold ${gradientTextClass} shadow-lg`}
//             style={{ fontFamily: "Zen Tokyo Zoo" }}
//           >
//             WILL
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`inline-block border-4 border-red-600 dark:border-red-400 px-8 py-3 rounded-full text-2xl md:text-3xl font-bold ${gradientTextClass} shadow-lg`}
//             style={{ fontFamily: "Zen Tokyo Zoo" }}
//           >
//             ALSO
//           </motion.div>
//         </div>
//         <p
//           className={`text-3xl md:text-4xl uppercase tracking-widest font-bold ${gradientTextClass}`}
//           style={{ fontFamily: "Zen Tokyo Zoo" }}
//         >
//           Target
//         </p>
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="flex justify-center items-center gap-8 w-full text-6xl md:text-7xl lg:text-8xl font-bold mt-8"
//       >
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className={gradientTextClass}
//           style={{ fontFamily: "Fredericka the Great" }}
//         >
//           OUR
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className={gradientTextClass}
//           style={{ fontFamily: "Fredericka the Great" }}
//         >
//           USER
//         </motion.span>
//       </motion.div>

//       <motion.p
//         variants={itemVariants}
//         className={`text-2xl md:text-3xl lg:text-4xl mt-6 font-bold ${gradientTextClass}`}
//         style={{ fontFamily: "Fredericka the Great" }}
//       >
//         <span className={`font-bold ${gradientTextClass}`}>
//           OF SMALL & STARTUP
//         </span>{" "}
//         BUSINESSES
//       </motion.p>

//       <motion.p
//         variants={itemVariants}
//         className={`text-4xl md:text-5xl font-bold mt-8 ${gradientTextClass}`}
//         style={{ fontFamily: "Rubik Scribble" }}
//       >
//         WITH
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="min-h-[40vh] flex flex-col items-center justify-center space-y-8"
//       >
//         <motion.p
//           animate={{ x: [0, -10, 10, -5, 5, 0] }}
//           transition={{
//             delay: 1.5,
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest ${gradientTextClass}`}
//           style={{ fontFamily: "Piedra" }}
//         >
//           POCKET
//         </motion.p>
//         <motion.p
//           whileHover={{ scale: 1.05 }}
//           className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-widest ${gradientTextClass}`}
//           style={{ fontFamily: "Rubik Scribble" }}
//         >
//           FRIENDLY
//         </motion.p>
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-6 mt-6"
//         >
//           <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 rounded-full"></div>
//           <p
//             className={`text-5xl md:text-6xl lg:text-7xl font-bold ${gradientTextClass}`}
//             style={{ fontFamily: "Piedra" }}
//           >
//             PRICE
//           </p>
//           <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 rounded-full"></div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

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
      className={`min-h-screen flex flex-col justify-center px-4 text-center space-y-12 bg-white dark:bg-gray-900 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
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
          className={`text-4xl md:text-5xl font-semibold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Tilt Prism",
            lineHeight: "2",
            paddingBottom: "0.5em",
            fontSize: "100px",
          }}
        >
          Alongwith
        </h2>
      </div>

      {/* Large Businesses */}
      <div className="transform transition-all duration-1000 hover:scale-105">
        <h1
          className={`text-5xl md:text-6xl font-bold tracking-wide ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Teameasy",
            fontSize: "205px",
            lineHeight: "2",
            paddingBottom: "0.5em",
          }}
        >
          LARGE BUSINESSES
        </h1>
      </div>

      {/* We, WILL, ALSO, Target section - exactly like image */}
      <div className="space-y-6 flex flex-col items-center">
        {/* We */}
        <div className="relative inline-block">
          <p
            className={`text-3xl md:text-4xl uppercase tracking-widest font-bold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
            style={{
              fontFamily: "Akronim",
              fontSize: "100px",
              lineHeight: "2",
              paddingBottom: "0.5em",
            }}
          >
            We
          </p>
        </div>

        {/* WILL and ALSO on separate lines */}
        <div className="space-y-4 flex flex-col items-center">
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
              className={`inline-block border-2 border-blue-600 dark:border-blue-400 px-6 py-2 rounded-full text-2xl md:text-3xl font-bold ${gradientTextClass} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              style={{
                fontFamily: "Akronim",
                fontSize: "100px",
                lineHeight: "1.7",
                paddingBottom: "0", // No extra padding at the bottom
                height: "175px", // Adjusted height for better balance
              }}
            >
              WILL
            </div>
          </div>

          <div
            className={`inline-block border-2 border-red-600 dark:border-red-400 px-8 py-3 rounded-full text-2xl md:text-3xl font-bold ${gradientTextClass} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
            style={{
              fontFamily: "Akronim",
              fontSize: "100px",
              lineHeight: "3",
              paddingBottom: "0em",
            }}
          >
            ALSO
          </div>
        </div>
      </div>

      {/* TARGET OUR USER section */}
      <div className="flex justify-center items-center gap-8 w-full text-base md:text-lg lg:text-xl font-bold mt-8">
        <span
          className={`${gradientTextClass} hover:scale-110 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Zen Tokyo Zoo",
            fontSize: "100px",
            lineHeight: "2",
            paddingBottom: "0.5em",
          }}
        >
          TARGET
        </span>
        <span
          className={`${gradientTextClass} hover:scale-110 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Zen Tokyo Zoo",
            fontSize: "100px",
            lineHeight: "2",
            paddingBottom: "0.5em",
          }}
        >
          OUR
        </span>
        <span
          className={`${gradientTextClass} hover:scale-110 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Zen Tokyo Zoo",
            fontSize: "100px",
            lineHeight: "2",
            paddingBottom: "0.5em",
          }}
        >
          USERS
        </span>
      </div>

      <p
        className={`text-4xl md:text-5xl font-bold mt-8 ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
        style={{ fontFamily: "Fredericka the Great" }}
      >
        Of
      </p>

      {/* OF SMALL & STARTUP BUSINESSES */}
      <div className="relative">
        <p
          className={`text-2xl md:text-3xl lg:text-4xl mt-6 font-bold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
          style={{
            fontFamily: "Fredericka the Great",
            fontSize: "100px",
            lineHeight: "3",
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
        className={`text-4xl md:text-5xl font-bold mt-8 ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
        style={{ fontFamily: "Fredericka the Great" }}
      >
        WITH
      </p>

      {/* POCKET FRIENDLY PRICE section */}
      <div className="min-h-[40vh] flex flex-col justify-center space-y-8">
        {/* POCKET - Left aligned */}
        <div className="w-full max-w-6xl flex justify-start">
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest ${gradientTextClass} text-left hover:scale-105 transition-transform cursor-pointer`}
            style={{
              fontFamily: "Rubik Scribble",
              // animation: "shake 1.5s ease-in-out infinite",
              fontSize: "100px",
              lineHeight: "3",
              paddingBottom: "0.5em",
            }}
          >
            POCKET
          </p>
        </div>

        {/* FRIENDLY - Center aligned */}
        <div className="w-full max-w-6xl flex justify-center">
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer text-center`}
            style={{
              fontFamily: "Fredericka the Great",
              fontSize: "100px",
              lineHeight: "2",
              paddingBottom: "0.5em",
            }}
          >
            FRIENDLY
          </p>
        </div>

        {/* PRICE - Right aligned with lines */}
        <div className="w-full max-w-6xl flex justify-end">
          <div className="flex items-center gap-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 rounded-full"></div>
            <p
              className={`text-2xl md:text-3xl lg:text-4xl font-bold ${gradientTextClass} hover:scale-105 transition-transform cursor-pointer`}
              style={{
                fontFamily: "Rubik Scribble",
                fontSize: "100px",
                lineHeight: "2",
                paddingBottom: "0.5em",
              }}
            >
              PRICE
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400 rounded-full"></div>
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
  );
}

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function BusinessTarget() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const bounceVariants = {
//     initial: { y: -20, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   return (
//     <motion.div
//       id="businesses"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-8 bg-white dark:bg-gray-900"
//     >
//       <motion.div variants={itemVariants}>
//         <h2
//           className="text-lg font-semibold text-red-600 dark:text-red-400"
//           style={{ fontFamily: "Tilt Prism, cursive" }}
//         >
//           Alongwith
//         </h2>
//       </motion.div>

//       <motion.div variants={bounceVariants} initial="initial" animate="animate">
//         <h1
//           className="text-5xl md:text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600 dark:from-blue-500 dark:to-red-400"
//           style={{ fontFamily: "Teameasy, sans-serif" }}
//         >
//           LARGE BUSINESSES
//         </h1>
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="space-y-3 flex flex-col items-center"
//       >
//         <p
//           className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300"
//           style={{ fontFamily: "Akronim, cursive" }}
//         >
//           We
//         </p>
//         <div className="flex gap-2">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-blue-600 dark:border-blue-400 px-4 py-1 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm"
//             style={{ fontFamily: "Zen Tokyo Zoo, cursive" }}
//           >
//             WILL
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-red-600 dark:border-red-400 px-4 py-1 rounded-full text-sm font-semibold text-red-600 dark:text-red-400 shadow-sm"
//             style={{ fontFamily: "Zen Tokyo Zoo, cursive" }}
//           >
//             ALSO
//           </motion.div>
//         </div>
//         <p
//           className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300"
//           style={{ fontFamily: "Zen Tokyo Zoo, cursive" }}
//         >
//           Target
//         </p>
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="flex justify-between w-full max-w-[500px] px-6 md:px-0 text-4xl font-semibold mt-6"
//       >
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="text-blue-700 dark:text-blue-400"
//           style={{ fontFamily: "Fredericka the Great, cursive" }}
//         >
//           OUR
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.1 }}
//           className="text-red-600 dark:text-red-400"
//           style={{ fontFamily: "Fredericka the Great, cursive" }}
//         >
//           USER
//         </motion.span>
//       </motion.div>

//       <motion.p
//         variants={itemVariants}
//         className="text-sm md:text-base mt-4"
//         style={{ fontFamily: "Fredericka the Great, cursive" }}
//       >
//         <span className="font-semibold text-blue-600 dark:text-blue-400">
//           OF SMALL & STARTUP
//         </span>{" "}
//         BUSINESSES
//       </motion.p>

//       <motion.p
//         variants={itemVariants}
//         className="text-xl font-bold mt-4 text-gray-700 dark:text-gray-300"
//         style={{ fontFamily: "Rubik Scribble, cursive" }}
//       >
//         WITH
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="min-h-[50vh] flex flex-col items-center justify-center space-y-6"
//       >
//         <motion.p
//           animate={{ x: [0, -10, 10, -5, 5, 0] }}
//           transition={{
//             delay: 1.5,
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="text-xl md:text-2xl font-semibold tracking-widest text-blue-800 dark:text-blue-400"
//           style={{ fontFamily: "Piedra, cursive" }}
//         >
//           POCKET
//         </motion.p>
//         <motion.p
//           whileHover={{ scale: 1.05 }}
//           className="text-2xl md:text-3xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400"
//           style={{ fontFamily: "Rubik Scribble, cursive" }}
//         >
//           FRIENDLY
//         </motion.p>
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-4 mt-4"
//         >
//           <div className="w-6 h-[2px] bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400"></div>
//           <p
//             className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200"
//             style={{ fontFamily: "Piedra, cursive" }}
//           >
//             PRICE
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }
