// BeeController.jsx - UPDATED VERSION WITH ACCURATE POSITIONS
import { useEffect } from "react";
import { gsap } from "gsap";

const sectionPositions = [
  {
    id: "hero",
    position: { x: 2.8, y: -1, z: 0 }, // Top right - large arrow
    rotation: { x: 0, y: 1.5, z: 0 }, // Facing left/down
    scale: 1.4, // Large arrow = large bee
  },
  {
    id: "about", // "Why Choose ANIRBAN'S SKILL ACADEMY"
    position: { x: 2.2, y: -0.3, z: -0.8 }, // Right side, pointing left
    rotation: { x: 0, y: -1.2, z: 0 }, // Strong left facing
    scale: 1.2, // Medium-large arrow
  },
  {
    id: "businesses", // "LARGE BUSINESSES"
    position: { x: -2.8, y: 0.3, z: -1.0 }, // Left side, pointing right
    rotation: { x: 0, y: 0.8, z: 0 }, // Facing right
    scale: 1.3, // Large arrow = large bee
  },
  {
    id: "projects", // "Technical Skills"
    position: { x: 2.6, y: 0.2, z: -0.9 }, // Right side, pointing left
    rotation: { x: 0, y: -1.0, z: 0 }, // Facing left
    scale: 1.1, // Medium arrow
  },
  {
    id: "services", // "Our Services"
    position: { x: -2.5, y: -0.6, z: -1.1 }, // Left side, pointing right
    rotation: { x: 0.2, y: 0.7, z: 0 }, // Facing right/down
    scale: 1.0, // Medium arrow
  },
  {
    id: "testimonials", // "What Our Clients Say"
    position: { x: 2.3, y: -0.1, z: -1.0 }, // Right side, pointing left
    rotation: { x: 0, y: -0.9, z: 0 }, // Facing left
    scale: 1.1, // Medium arrow
  },
  {
    id: "team", // "Meet Our Team"
    position: { x: 4.7, y: -0.8, z: -0.8 }, // Move further right
    rotation: { x: 0, y: -1.57, z: 0 }, // Face directly left (radians: -π/2)
    scale: 0.7, // Medium-large bee
  },
  {
    id: "achievements", // "Our Achievements"
    position: { x: -2.6, y: -0.2, z: -1.3 }, // Left side, pointing left
    rotation: { x: 0, y: -0.6, z: 0 }, // Facing left (arrow points left)
    scale: 1.1, // Medium arrow
  },
  {
    id: "process", // "Our Development Process"
    position: { x: -2.7, y: -1.0, z: -1.0 }, // Left side, pointing left
    rotation: { x: 0.1, y: -0.7, z: 0 }, // Facing left (arrow points left)
    scale: 1.0, // Large arrow
  },
  {
    id: "global", // "Choose your business industry" (Global map)
    position: { x: -2.4, y: -2.9, z: -1.2 }, // Left side, pointing left
    rotation: { x: 0, y: -5.8, z: 0 }, // Facing left (arrow points left)
    scale: 2.2, // Medium-large arrow
  },
  {
    id: "merquery",
    position: { x: 0, y: -1.8, z: -1.5 }, // Bottom center
    rotation: { x: 0.3, y: 0, z: 0 }, // Facing forward/down
    scale: 1.0,
  },
  {
    id: "faq",
    position: { x: -5, y: -1.8, z: -1.5 }, // Bottom center
    rotation: { x: 0.2, y: -10, z: 0 }, // Facing forward/down
    scale: 0.6,
  },
  {
    id: "cta",
    position: { x: 0, y: -2.2, z: -1.8 }, // Bottom
    rotation: { x: 0.4, y: 0, z: 0 }, // Facing forward/down
    scale: 2.9,
  },
  {
    id: "footer",
    position: { x: 0, y: -1.8, z: -1.5 }, // Bottom center
    rotation: { x: 0.3, y: 0, z: 0 }, // Facing forward/down
    scale: 1.0,
  },
];

const BeeController = ({ modelRef }) => {
  useEffect(() => {
    // console.log("BeeController initialized, modelRef:", modelRef?.current);

    // Wait for both modelRef and DOM to be ready
    const initializeBeeController = () => {
      if (!modelRef?.current) {
        console.warn("ModelRef not available yet, retrying...");
        setTimeout(initializeBeeController, 100);
        return;
      }

      // Check if sections exist in DOM
      const sections = document.querySelectorAll("section[id], div[id]");
      const validSections = Array.from(sections).filter(
        (s) => s.id && sectionPositions.find((pos) => pos.id === s.id)
      );

      if (validSections.length === 0) {
        console.warn("No valid sections found, retrying...");
        setTimeout(initializeBeeController, 200);
        return;
      }

      // console.log(
      //   "Valid sections found:",
      //   validSections.map((s) => s.id)
      // );

      // Use IntersectionObserver for better performance and accuracy
      const observerOptions = {
        root: null,
        rootMargin: "-10% 0px -10% 0px", // Trigger when section is 10% visible
        threshold: [0.2, 0.4, 0.6, 0.8],
      };

      const observer = new IntersectionObserver((entries) => {
        let maxRatio = 0;
        let activeSection = "hero";

        entries.forEach((entry) => {
          if (
            entry.intersectionRatio > maxRatio &&
            entry.intersectionRatio > 0.2
          ) {
            maxRatio = entry.intersectionRatio;
            activeSection = entry.target.id || "hero";
          }
        });

        // console.log(
        //   "Active section:",
        //   activeSection,
        //   "Visibility:",
        //   maxRatio.toFixed(2)
        // );

        const target =
          sectionPositions.find((pos) => pos.id === activeSection) ||
          sectionPositions[0];

        // console.log("Moving bee to:", target);

        if (modelRef?.current) {
          // Kill existing animations to prevent conflicts
          gsap.killTweensOf(modelRef.current.position);
          gsap.killTweensOf(modelRef.current.rotation);
          gsap.killTweensOf(modelRef.current.scale);

          // FASTER animations - reduced from 2.5s to 1.2s
          gsap.to(modelRef.current.position, {
            x: target.position.x,
            y: target.position.y,
            z: target.position.z,
            duration: 1.2, // Much faster movement
            ease: "power2.out",
          });

          gsap.to(modelRef.current.rotation, {
            x: target.rotation.x,
            y: target.rotation.y,
            z: target.rotation.z,
            duration: 1.0, // Fast rotation
            ease: "power2.out",
          });

          gsap.to(modelRef.current.scale, {
            x: target.scale,
            y: target.scale,
            z: target.scale,
            duration: 0.8, // Quick scale change
            ease: "power2.out",
          });

          // Add subtle floating animation - shorter and faster
          gsap.to(modelRef.current.position, {
            y: target.position.y + 0.08,
            duration: 1.0, // Faster floating
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.2, // Start after main animation
          });
        }
      }, observerOptions);

      // Observe all sections
      const sectionsAll = document.querySelectorAll("section[id], div[id]");
      // console.log(
      //   "Found sections:",
      //   Array.from(sectionsAll)
      //     .map((s) => s.id)
      //     .filter(Boolean)
      // );

      sectionsAll.forEach((section) => {
        if (
          section.id &&
          sectionPositions.find((pos) => pos.id === section.id)
        ) {
          observer.observe(section);
          // console.log("Observing section:", section.id);
        }
      });

      // Initialize with hero position immediately
      if (modelRef?.current) {
        const heroTarget = sectionPositions[0];
        gsap.set(modelRef.current.position, heroTarget.position);
        gsap.set(modelRef.current.rotation, heroTarget.rotation);
        gsap.set(modelRef.current.scale, {
          x: heroTarget.scale,
          y: heroTarget.scale,
          z: heroTarget.scale,
        });
      }

      // Cleanup
      return () => {
        observer.disconnect();
        if (modelRef?.current) {
          gsap.killTweensOf(modelRef.current.position);
          gsap.killTweensOf(modelRef.current.rotation);
          gsap.killTweensOf(modelRef.current.scale);
        }
      };
    };

    // Call the initializer
    initializeBeeController();

    // No cleanup needed here, cleanup is handled inside initializeBeeController
  }, [modelRef]);

  return null;
};

export default BeeController;
