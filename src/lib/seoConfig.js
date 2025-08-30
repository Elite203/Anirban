// SEO Configuration for ANIRBAN'S SKILL ACADEMY
export const siteConfig = {
  name: "ANIRBAN'S SKILL ACADEMY",
  description: "Transform your career with ANIRBAN'S SKILL ACADEMY. Get industry-recognized certifications, expert-led training, and 100% placement assistance.",
  url: "https://anirbansskillacademy.in",
  ogImage: "https://anirbansskillacademy.in/social-preview.jpg",
  logo: "https://anirbansskillacademy.in/logo.png",
  author: "ANIRBAN'S SKILL ACADEMY",
  keywords: [
    "skill development services",
    "professional certification services", 
    "career training services",
    "online education India",
    "skill academy services",
    "job-ready skills services",
    "vocational training services",
    "professional courses services",
    "career guidance services",
    "skill development programs services"
  ],
  social: {
    twitter: "@AnirbansSkillAcademy", // Update with actual handle
    facebook: "https://facebook.com/anirbansskillacademy", // Update with actual URL
    linkedin: "https://linkedin.com/company/anirbansskillacademy", // Update with actual URL
    youtube: "https://youtube.com/@anirbansskillacademy", // Update with actual URL
    instagram: "https://instagram.com/anirbansskillacademy" // Update with actual URL
  }
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: `${siteConfig.name} | A Digital Service Providing Company in India`,
    description: "Transform your career with Anirbans Skill Academy. Get industry-recognized certifications, expert-led training, and 100% placement assistance. Explore our professional courses today!",
    path: "/",
    keywords: [...siteConfig.keywords, "digital services India", "skill academy", "professional training"],
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: siteConfig.logo,
            width: 500,
            height: 500
          },
          description: siteConfig.description,
          foundingDate: "2020", // Update with actual founding date
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressRegion: "India"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"]
          },
          sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.linkedin,
            siteConfig.social.youtube,
            siteConfig.social.instagram
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          url: siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          publisher: {
            "@id": `${siteConfig.url}/#organization`
          },
          potentialAction: [
            {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/#webpage`,
          url: siteConfig.url,
          name: siteConfig.name,
          isPartOf: {
            "@id": `${siteConfig.url}/#website`
          },
          about: {
            "@id": `${siteConfig.url}/#organization`
          },
          description: siteConfig.description
        }
      ]
    }
  },
  about: {
    title: `About Us - ${siteConfig.name}`,
    description: "Learn about ANIRBAN'S SKILL ACADEMY - our mission, story, and values that drive our commitment to providing exceptional digital services and professional training.",
    path: "/about",
    keywords: [...siteConfig.keywords, "about us", "company story", "mission", "values"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.name,
        description: "A leading digital service provider and skill development academy in India",
        url: siteConfig.url,
        logo: siteConfig.logo
      }
    }
  },
  contact: {
    title: `Contact Us - ${siteConfig.name}`,
    description: "Get in touch with ANIRBAN'S SKILL ACADEMY for professional training, digital services, and career development opportunities. We're here to help transform your future.",
    path: "/contact",
    keywords: [...siteConfig.keywords, "contact", "get in touch", "support"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"]
        }
      }
    }
  },
  services: {
    title: `Our Services - ${siteConfig.name}`,
    description: "Explore our comprehensive range of digital services including web development, app development, SEO, content writing, and professional training programs.",
    path: "/services",
    keywords: [...siteConfig.keywords, "services", "web development", "app development", "SEO", "digital marketing"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url
      },
      serviceType: "Digital Services and Professional Training",
      description: "Comprehensive digital services and skill development programs"
    }
  },
  terms: {
    title: `Terms of Service - ${siteConfig.name}`,
    description: "Read the terms of service for ANIRBAN'S SKILL ACADEMY. Understand our policies, user agreements, and service conditions.",
    path: "/terms",
    keywords: ["terms of service", "user agreement", "policies"],
    noIndex: false
  },
  privacy: {
    title: `Privacy Policy - ${siteConfig.name}`,
    description: "Learn how ANIRBAN'S SKILL ACADEMY protects your privacy and handles your personal information. Read our comprehensive privacy policy.",
    path: "/privacy",
    keywords: ["privacy policy", "data protection", "personal information"],
    noIndex: false
  },
  refund: {
    title: `Refund Policy - ${siteConfig.name}`,
    description: "Understand our refund and cancellation policy for courses and services at ANIRBAN'S SKILL ACADEMY.",
    path: "/refund-policy",
    keywords: ["refund policy", "cancellation", "terms"],
    noIndex: false
  },
  shipping: {
    title: `Shipping Policy - ${siteConfig.name}`,
    description: "Learn about our shipping and delivery policies for physical materials and course resources.",
    path: "/shipping-policy",
    keywords: ["shipping policy", "delivery", "course materials"],
    noIndex: false
  }
};

// Generate meta tags for a page
export const generateMetaTags = (pageKey) => {
  const config = pageConfigs[pageKey] || pageConfigs.home;
  const canonical = `${siteConfig.url}${config.path}`;
  
  return {
    title: config.title,
    description: config.description,
    canonical,
    keywords: config.keywords?.join(", "),
    noIndex: config.noIndex || false,
    openGraph: {
      type: "website",
      url: canonical,
      title: config.title,
      description: config.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: config.title
        }
      ],
      siteName: siteConfig.name,
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.social.twitter,
      creator: siteConfig.social.twitter,
      title: config.title,
      description: config.description,
      image: siteConfig.ogImage
    },
    structuredData: config.structuredData
  };
};

// Core Web Vitals and Performance Config
export const performanceConfig = {
  // Critical resources to preload
  preloadResources: [
    { href: "/logo.png", as: "image", type: "image/png" },
    { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap", as: "style" }
  ],
  
  // DNS prefetch domains
  dnsPrefetch: [
    "//fonts.googleapis.com",
    "//fonts.gstatic.com",
    "//www.google-analytics.com",
    "//www.googletagmanager.com"
  ],
  
  // Preconnect domains
  preconnect: [
    { href: "https://fonts.googleapis.com" },
    { href: "https://fonts.gstatic.com", crossorigin: true }
  ]
};