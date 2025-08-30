import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SEOAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 tracking
    const trackPageView = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'G-YOUR-MEASUREMENT-ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page views on route change
    trackPageView();

    // Track Core Web Vitals for SEO
    const trackWebVitals = () => {
      if (typeof gtag !== 'undefined') {
        // Track LCP (Largest Contentful Paint)
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              gtag('event', 'LCP', {
                event_category: 'Web Vitals',
                value: Math.round(entry.startTime),
                custom_parameter_1: entry.url || window.location.href,
              });
            }
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Track FID (First Input Delay)
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            gtag('event', 'FID', {
              event_category: 'Web Vitals',
              value: Math.round(entry.processingStart - entry.startTime),
            });
          }
        }).observe({ entryTypes: ['first-input'] });

        // Track CLS (Cumulative Layout Shift)
        let clsValue = 0;
        let clsEntries = [];
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              clsEntries.push(entry);
            }
          }
          gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
          });
        }).observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Initialize web vitals tracking
    if (typeof PerformanceObserver !== 'undefined') {
      trackWebVitals();
    }

    // Track user engagement for SEO signals
    const trackEngagement = () => {
      let startTime = Date.now();
      let maxScroll = 0;

      const updateMaxScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        maxScroll = Math.max(maxScroll, scrollPercent);
      };

      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (typeof gtag !== 'undefined' && timeSpent > 10) {
          gtag('event', 'engagement_time', {
            event_category: 'Engagement',
            value: timeSpent,
            custom_parameter_1: window.location.pathname,
          });
        }
      };

      const trackScrollDepth = () => {
        if (typeof gtag !== 'undefined' && maxScroll > 0) {
          gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            value: maxScroll,
            custom_parameter_1: window.location.pathname,
          });
        }
      };

      window.addEventListener('scroll', updateMaxScroll);
      window.addEventListener('beforeunload', () => {
        trackTimeOnPage();
        trackScrollDepth();
      });

      return () => {
        window.removeEventListener('scroll', updateMaxScroll);
        trackTimeOnPage();
        trackScrollDepth();
      };
    };

    const cleanupEngagement = trackEngagement();

    return cleanupEngagement;
  }, [location]);

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-MEASUREMENT-ID"
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YOUR-MEASUREMENT-ID', {
            send_page_view: false,
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true
            },
            custom_map: {
              'custom_parameter_1': 'page_path',
              'custom_parameter_2': 'content_group1'
            }
          });
        `}
      </script>

      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-YOUR-CONTAINER-ID');
        `}
      </script>

      {/* Schema.org structured data for improved SERP features */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://anirbansskillacademy.in/#website",
              "url": "https://anirbansskillacademy.in",
              "name": "ANIRBAN'S SKILL ACADEMY",
              "description": "Professional skill development and career training services",
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://anirbansskillacademy.in/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Organization",
              "@id": "https://anirbansskillacademy.in/#organization",
              "name": "ANIRBAN'S SKILL ACADEMY",
              "url": "https://anirbansskillacademy.in",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://anirbansskillacademy.in/#logo",
                "url": "https://anirbansskillacademy.in/logo.png",
                "width": 500,
                "height": 500,
                "caption": "ANIRBAN'S SKILL ACADEMY Logo"
              },
              "image": {
                "@id": "https://anirbansskillacademy.in/#logo"
              },
              "description": "Professional skill development and career training services with industry-recognized certifications and 100% placement assistance.",
              "foundingDate": "2020-01-01",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"],
                  "areaServed": "IN"
                }
              ],
              "sameAs": [
                "https://facebook.com/anirbansskillacademy",
                "https://linkedin.com/company/anirbansskillacademy",
                "https://youtube.com/@anirbansskillacademy",
                "https://instagram.com/anirbansskillacademy"
              ]
            }
          ]
        })}
      </script>

      {/* Microsoft Clarity for behavior analytics */}
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR-CLARITY-PROJECT-ID");
        `}
      </script>

      {/* Facebook Pixel for conversion tracking */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR-FACEBOOK-PIXEL-ID');
          fbq('track', 'PageView');
        `}
      </script>

      <noscript>{`
        <img 
          height="1" 
          width="1" 
          style="display:none"
          src="https://www.facebook.com/tr?id=YOUR-FACEBOOK-PIXEL-ID&ev=PageView&noscript=1"
          alt=""
        />
      `}</noscript>
    </Helmet>
  );
};

export default SEOAnalytics;