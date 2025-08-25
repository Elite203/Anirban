import React, { Suspense } from "react";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import BeeScene from "../components/BeeSchene";
import BusinessTarget from "../components/sections/BusinessTarget";
import Merquery from "../components/sections/Merquery";
import { Helmet } from "react-helmet";
const Services = React.lazy(() => import("@/components/sections/Services"));
const Team = React.lazy(() => import("@/components/sections/Team"));
const Process = React.lazy(() => import("@/components/sections/Process"));
const Testimonials = React.lazy(() =>
  import("@/components/sections/Testimonials")
);
const Achievements = React.lazy(() =>
  import("@/components/sections/Achievements")
);
const GlobalBusiness = React.lazy(() =>
  import("@/components/sections/GlobalBusiness")
);
const FAQ = React.lazy(() => import("@/components/sections/FAQ"));
const CTA = React.lazy(() => import("@/components/sections/CTA"));

const LoadingFallback = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-black">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
  </div>
);

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          ANIRBAN'S SKILL ACADEMY | A Digital Service Providing company
          in India
        </title>
        <meta
          name="description"
          content="Transform your career with Anirbans Skill Academy. Get industry-recognized certifications, expert-led training, and 100% placement assistance. Explore our professional courses today!"
        />
        <link rel="canonical" href="https://anirbansskillacademy.in/" />
        {/* Add specific Open Graph tags for the homepage here if they differ from global */}
      </Helmet>

      <main className="relative z-10">
        <BeeScene />

        {/* <section id="hero" className="section min-h-screen"> */}
        <Hero />

        {/* </section> */}

        {/* <section id="about" className="section min-h-screen"> */}
        <About />
        {/* </section> */}

        <BusinessTarget />
        {/* <section id="skills" className="section min-h-screen"> */}
        <Skills />
        {/* </section> */}

        {/* <Suspense fallback={<LoadingFallback />}> */}
        {/* <section id="services" className="section min-h-screen"> */}
        <Services />
        {/* </section> */}

        {/* <section id="team" className="section min-h-screen"> */}
        <Team />
        {/* </section> */}

        {/* <section id="process" className="section min-h-screen"> */}
        <Process />
        {/* </section> */}
        <div className="relative w-full h-[150px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/5.svg')" }}
          />
        </div>
        {/* <section id="testimonials" className="section min-h-screen"> */}
        <Testimonials />
        {/* </section> */}

        {/* <section id="achievements" className="section min-h-screen"> */}
        <Achievements />

        {/* <section id="global" className="section min-h-screen"> */}
        <GlobalBusiness />
        {/* </section> */}
        <Merquery />
        {/* 
        <section id="faq" className="section min-h-screen"> */}
        <FAQ />
        {/* </section> */}

        {/* <section id="cta" className="section min-h-screen"> */}
        <CTA />
        {/* </section> */}
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default HomePage;
