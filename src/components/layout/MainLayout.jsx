import React from "react";
import { Outlet } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui_extended/CustomCursor";
import CursorTrail from "@/components/ui_extended/CursorTrail";

const MainLayout = ({ loading }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative transition-colors duration-300 overflow-x-hidden">
      <CustomCursor />
      <CursorTrail />
      <Header loading={loading} />
      <main className="w-full">
        <div className="w-full mx-auto">
          {!loading && <Outlet />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

// import React, { Suspense } from "react";
// import { Outlet } from "react-router-dom";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import CustomCursor from "@/components/ui_extended/CustomCursor";
// import CursorTrail from "@/components/ui_extended/CursorTrail";
// import RippleEffect from "@/components/ui_extended/RippleEffect";
// // Simple Error Boundary
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }
//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="p-8 text-center text-red-600">
//           Something went wrong. Please refresh the page.
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const MainLayout = () => {
//   return (
//     <ErrorBoundary>
//       <Suspense
//         fallback={
//           <div className="min-h-screen flex items-center justify-center text-xl">
//             <RippleEffect />
//           </div>
//         }
//       >
//         <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative transition-colors duration-300">
//           <CustomCursor />
//           <CursorTrail />
//           <Header />
//           <main>
//             <Outlet />
//           </main>
//           <Footer />
//         </div>
//       </Suspense>
//     </ErrorBoundary>
//   );
// };

// export default MainLayout;
