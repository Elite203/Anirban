import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Skip to main content functionality
    const createSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50 focus:z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.top = '-40px';
      skipLink.style.left = '6px';
      skipLink.style.padding = '8px';
      skipLink.style.background = '#2563EB';
      skipLink.style.color = 'white';
      skipLink.style.textDecoration = 'none';
      skipLink.style.borderRadius = '4px';
      skipLink.style.zIndex = '9999';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add main content landmark if not exists
    const addMainLandmark = () => {
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1');
      }
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus-visible {
          outline: 2px solid #2563EB !important;
          outline-offset: 2px !important;
        }
        
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .focus\\:not-sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: revert !important;
          margin: revert !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA live regions for dynamic content
    const addLiveRegions = () => {
      // Polite live region for non-urgent updates
      if (!document.getElementById('aria-live-polite')) {
        const politeRegion = document.createElement('div');
        politeRegion.id = 'aria-live-polite';
        politeRegion.setAttribute('aria-live', 'polite');
        politeRegion.setAttribute('aria-atomic', 'true');
        politeRegion.className = 'sr-only';
        document.body.appendChild(politeRegion);
      }

      // Assertive live region for urgent updates
      if (!document.getElementById('aria-live-assertive')) {
        const assertiveRegion = document.createElement('div');
        assertiveRegion.id = 'aria-live-assertive';
        assertiveRegion.setAttribute('aria-live', 'assertive');
        assertiveRegion.setAttribute('aria-atomic', 'true');
        assertiveRegion.className = 'sr-only';
        document.body.appendChild(assertiveRegion);
      }
    };

    // Check for proper heading hierarchy
    const checkHeadingHierarchy = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      
      headings.forEach((heading, index) => {
        const currentLevel = parseInt(heading.tagName.charAt(1));
        
        if (index === 0 && currentLevel !== 1) {
          console.warn('SEO/A11y Warning: Page should start with an h1 element');
        }
        
        if (currentLevel > previousLevel + 1) {
          console.warn(`SEO/A11y Warning: Heading level skip detected. Found ${heading.tagName} after h${previousLevel}`);
        }
        
        previousLevel = currentLevel;
      });
    };

    // Add alt text checking for images
    const checkImageAltText = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.getAttribute('aria-hidden')) {
          console.warn('A11y Warning: Image missing alt text:', img.src);
        }
      });
    };

    // Initialize accessibility enhancements
    createSkipLink();
    addMainLandmark();
    enhanceFocusManagement();
    addLiveRegions();
    
    // Run checks in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        checkHeadingHierarchy();
        checkImageAltText();
      }, 1000);
    }

    // Keyboard navigation enhancement
    const handleKeyboardNavigation = (e) => {
      // Add Tab focus indicators
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('user-is-tabbing');
    };

    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('mousedown', handleMouseDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <Helmet>
      {/* Accessibility meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Reduced motion support */}
      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
          
          @media (prefers-contrast: high) {
            * {
              border-color: ButtonText !important;
            }
          }
          
          @media (forced-colors: active) {
            * {
              forced-color-adjust: auto !important;
            }
          }
        `}
      </style>
    </Helmet>
  );
};

export default AccessibilityEnhancer;