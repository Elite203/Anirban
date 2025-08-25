import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

// Dynamically import portfolio components
const portfolioComponents = {
  "web-development": React.lazy(() => import("./web-development")),
  "website-ui-ux-design": React.lazy(() => import("./website-ui-ux-design")),
  "android-app-development": React.lazy(() => import("./android-app-development")),
  "android-app-ui-ux-design": React.lazy(() => import("./android-app-ui-ux-design")),
  "web-hosting-management": React.lazy(() => import("./web-hosting-management")),
  "software-consultation": React.lazy(() => import("./software-consultation")),
  "content-writing": React.lazy(() => import("./content-writing")),
  "google-meta-ads": React.lazy(() => import("./google-meta-ads")),
  "digital-marketing-seo": React.lazy(() => import("./digital-marketing-seo")),
  "photo-editing": React.lazy(() => import("./photo-editing")),
  "logo-design": React.lazy(() => import("./logo-design")),
  "video-editing": React.lazy(() => import("./video-editing")),
  "motion-graphics": React.lazy(() => import("./motion-graphics")),
  "business-license-registration": React.lazy(() => import("./business-license-registration")),
  "protect-your-brand": React.lazy(() => import("./protect-your-brand")),
  // Add other service portfolios as they are created
};

export default function Portfolio() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const handleBackToServices = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Get the component for the current service or a default/not found component
  const PortfolioComponent =
    portfolioComponents[serviceSlug] ||
    (() => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <p className="text-xl text-gray-600">
            The requested portfolio could not be found.
          </p>
        </div>
      </div>
    ));

  // Portfolio titles mapping
  const portfolioTitles = {
    "web-development": "Web Development Portfolio - ANIRBAN'S SKILL ACADEMY",
    "website-ui-ux-design": "Website UI/UX Design Portfolio - ANIRBAN'S SKILL ACADEMY",
    "android-app-development": "Android App Development Portfolio - ANIRBAN'S SKILL ACADEMY",
    "android-app-ui-ux-design": "Android App UI/UX Design Portfolio - ANIRBAN'S SKILL ACADEMY",
    "web-hosting-management": "Web Hosting Management Portfolio - ANIRBAN'S SKILL ACADEMY",
    "software-consultation": "Software Consultation Portfolio - ANIRBAN'S SKILL ACADEMY",
    "content-writing": "Content Writing Portfolio - ANIRBAN'S SKILL ACADEMY",
    "google-meta-ads": "Google & Meta Ads Portfolio - ANIRBAN'S SKILL ACADEMY",
    "digital-marketing-seo": "Digital Marketing & SEO Portfolio - ANIRBAN'S SKILL ACADEMY",
    "photo-editing": "Photo Editing Portfolio - ANIRBAN'S SKILL ACADEMY",
    "logo-design": "Logo Design Portfolio - ANIRBAN'S SKILL ACADEMY",
    "video-editing": "Video Editing Portfolio - ANIRBAN'S SKILL ACADEMY",
    "motion-graphics": "Motion Graphics Portfolio - ANIRBAN'S SKILL ACADEMY",
    "business-license-registration": "Business License Registration Portfolio - ANIRBAN'S SKILL ACADEMY",
    "protect-your-brand": "Brand Protection Portfolio - ANIRBAN'S SKILL ACADEMY"
  };

  // Portfolio descriptions mapping
  const portfolioDescriptions = {
    "web-development": "Explore our web development portfolio showcasing custom websites, web applications, and digital solutions at ANIRBAN'S SKILL ACADEMY.",
    "website-ui-ux-design": "Discover our UI/UX design portfolio featuring beautiful, user-friendly website interfaces created by ANIRBAN'S SKILL ACADEMY.",
    "android-app-development": "View our Android app development portfolio with innovative mobile solutions built by ANIRBAN'S SKILL ACADEMY.",
    // Add more descriptions as needed
  };

  const defaultDescription = `View our portfolio of work at ANIRBAN'S SKILL ACADEMY. We deliver high-quality digital solutions and creative services.`;
  const defaultTitle = "Our Portfolio - ANIRBAN'S SKILL ACADEMY";

  const pageTitle = portfolioTitles[serviceSlug] || defaultTitle;
  const pageDescription = portfolioDescriptions[serviceSlug] || defaultDescription;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href={`https://anirbansskillacademy.in/portfolio/${serviceSlug}`}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://anirbansskillacademy.in/portfolio/${serviceSlug}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <div className="container mx-auto px-4 py-8 mt-20">
      <Link
        to="/#services"
        onClick={handleBackToServices}
        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Services
      </Link>

      <React.Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }
      >
        <PortfolioComponent />
      </React.Suspense>
      </div>
    </>
  );
}
