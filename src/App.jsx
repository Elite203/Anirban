import React, { useEffect, Suspense, useState, startTransition } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import MainLayout from "@/components/layout/MainLayout";
import usePreventDevTools from "@/hooks/usePreventDevTools";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import useDisableCopy from "@/hooks/useDisableCopy";
import RippleEffect from "@/components/ui_extended/RippleEffect";

const HomePage = React.lazy(() => import("@/pages/HomePage"));
const AboutPage = React.lazy(() => import("@/pages/AboutPage"));
const TermsPage = React.lazy(() => import("@/pages/TermsPage"));
const PrivacyPage = React.lazy(() => import("@/pages/PrivacyPage"));
const RefundPage = React.lazy(() => import("@/pages/RefundPage"));
const ShippingPage = React.lazy(() => import("@/pages/ShippingPage"));
const ContactPage = React.lazy(() => {
  console.log("Loading ContactPage...");
  return import("@/pages/ContactPage");
});
// const ServicePage = React.lazy(() => import("@/pages/ServicePage"));
const Portfolio = React.lazy(() => import("@/components/portfolio"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

function App() {
  usePreventDevTools();
  useSmoothScroll();
  useDisableCopy();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fallback timer in case video fails to load
    const timer = setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 5000); // 5 seconds fallback
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide/show scrollbar based on loading state
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrollbar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <>
      <Helmet>
        <title>ANIRBAN'S SKILL ACADEMY - Professional Skill Development & Career Training Services</title>
        <meta
          name="description"
          content="Transform your career with ANIRBAN'S SKILL ACADEMY. Get industry-recognized certifications, expert-led training, and 100% placement assistance. Enroll in our professional courses today!"
        />
        <html className="dark" />
      </Helmet>
      {/* Ripple effect */}
      <RippleEffect />
      {/* Always render main content for LCP */}
      <Suspense
        fallback={
          <div className="fixed inset-0 bg-black flex items-center justify-center z-[10000]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout loading={loading} />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="refund-policy" element={<RefundPage />} />
            <Route path="shipping-policy" element={<ShippingPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* <Route path="services/:slug" element={<ServicePage />} /> */}
            <Route path="services/:serviceSlug" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      {/* Overlay splash screen if loading */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            src="/4sec.mp4"
            autoPlay
            muted
            style={{
              width: "50%",
              height: "50",
              objectFit: "cover"
            }}
            onEnded={() => {
              startTransition(() => {
                setLoading(false);
              });
            }}
          />
        </div>
      )}
      <Toaster />
    </>
  );
}

export default App;
