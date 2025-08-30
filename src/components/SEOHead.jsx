import React from 'react';
import { Helmet } from 'react-helmet';
import { generateMetaTags, performanceConfig } from '@/lib/seoConfig';

const SEOHead = ({ 
  pageKey = 'home',
  customTitle,
  customDescription,
  customKeywords,
  customImage,
  noIndex = false,
  customStructuredData
}) => {
  const metaTags = generateMetaTags(pageKey);
  
  // Override with custom values if provided
  const title = customTitle || metaTags.title;
  const description = customDescription || metaTags.description;
  const keywords = customKeywords || metaTags.keywords;
  const ogImage = customImage || metaTags.openGraph.images[0].url;
  const shouldIndex = noIndex || metaTags.noIndex;
  const structuredData = customStructuredData || metaTags.structuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaTags.canonical} />
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={shouldIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} 
      />
      
      {/* Open Graph */}
      <meta property="og:type" content={metaTags.openGraph.type} />
      <meta property="og:url" content={metaTags.openGraph.url} />
      <meta property="og:title" content={metaTags.openGraph.title} />
      <meta property="og:description" content={metaTags.openGraph.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={metaTags.openGraph.siteName} />
      <meta property="og:locale" content={metaTags.openGraph.locale} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={metaTags.twitter.card} />
      <meta name="twitter:site" content={metaTags.twitter.site} />
      <meta name="twitter:creator" content={metaTags.twitter.creator} />
      <meta name="twitter:title" content={metaTags.twitter.title} />
      <meta name="twitter:description" content={metaTags.twitter.description} />
      <meta name="twitter:image" content={metaTags.twitter.image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="ANIRBAN'S SKILL ACADEMY" />
      <meta name="generator" content="ANIRBAN'S SKILL ACADEMY" />
      <meta name="theme-color" content="#2563EB" />
      <meta name="msapplication-TileColor" content="#2563EB" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ANIRBAN'S SKILL ACADEMY" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="ICBM" content="20.5937,78.9629" />
      
      {/* Performance Optimizations */}
      {performanceConfig.preloadResources.map((resource, index) => (
        <link
          key={index}
          rel="preload"
          href={resource.href}
          as={resource.as}
          type={resource.type}
          crossOrigin={resource.crossorigin ? "anonymous" : undefined}
        />
      ))}
      
      {performanceConfig.dnsPrefetch.map((domain, index) => (
        <link key={index} rel="dns-prefetch" href={domain} />
      ))}
      
      {performanceConfig.preconnect.map((connection, index) => (
        <link
          key={index}
          rel="preconnect"
          href={connection.href}
          crossOrigin={connection.crossorigin ? "anonymous" : undefined}
        />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563EB" />
      
      {/* Language */}
      <html lang="en" prefix="og: https://ogp.me/ns#" />
    </Helmet>
  );
};

export default SEOHead;