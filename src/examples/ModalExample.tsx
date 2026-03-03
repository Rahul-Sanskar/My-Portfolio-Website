/**
 * Example: Using Lenis with Modals/Overlays
 * 
 * This shows how to properly disable/enable scroll when showing modals
 * to prevent background scrolling.
 */

import { useState, useEffect } from "react";
import { disableScroll, enableScroll } from "../utils/lenisHelpers";

export function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Disable smooth scroll when modal opens
      disableScroll();
    } else {
      // Re-enable smooth scroll when modal closes
      enableScroll();
    }

    // Cleanup: ensure scroll is enabled when component unmounts
    return () => {
      enableScroll();
    };
  }, [isModalOpen]);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Title</h2>
            <p>Background scroll is disabled while this modal is open.</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Example: Scroll Progress Indicator
 * 
 * Shows a progress bar that fills as user scrolls down the page
 */

import { onScroll } from "../utils/lenisHelpers";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Listen to Lenis scroll events
    const cleanup = onScroll((data: any) => {
      // data.progress is 0 to 1
      setProgress(data.progress * 100);
    });

    return cleanup;
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        backgroundColor: "var(--accentColor)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
      }}
    />
  );
}

/**
 * Example: Back to Top Button
 * 
 * Shows a button when user scrolls down, hides when at top
 */

import { scrollToTop, isAtTop } from "../utils/lenisHelpers";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cleanup = onScroll(() => {
      setIsVisible(!isAtTop());
    });

    return cleanup;
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => scrollToTop(2)}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "15px 20px",
        backgroundColor: "var(--accentColor)",
        color: "#000",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        zIndex: 1000,
        fontSize: "16px",
        fontWeight: "600",
      }}
    >
      ↑ Top
    </button>
  );
}

/**
 * Example: Scroll to Section with Offset
 * 
 * Useful when you have a fixed header
 */

import { scrollToWithOffset } from "../utils/lenisHelpers";

export function NavigationMenu() {
  const HEADER_HEIGHT = 80; // Your fixed header height

  const handleNavClick = (sectionId: string) => {
    scrollToWithOffset(`#${sectionId}`, HEADER_HEIGHT);
  };

  return (
    <nav>
      <button onClick={() => handleNavClick("about")}>About</button>
      <button onClick={() => handleNavClick("work")}>Work</button>
      <button onClick={() => handleNavClick("contact")}>Contact</button>
    </nav>
  );
}

/**
 * Example: Parallax Effect with Lenis
 * 
 * Create smooth parallax scrolling effects
 */

export function ParallaxSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const cleanup = onScroll((data: any) => {
      // Create parallax effect by moving element slower than scroll
      setOffset(data.scroll * 0.5);
    });

    return cleanup;
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <h1>Parallax Content</h1>
      </div>
    </div>
  );
}

/**
 * CSS for Modal Example
 * 
 * Add this to your CSS file:
 * 
 * .modal-overlay {
 *   position: fixed;
 *   top: 0;
 *   left: 0;
 *   width: 100%;
 *   height: 100%;
 *   background: rgba(0, 0, 0, 0.8);
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 *   z-index: 9999;
 * }
 * 
 * .modal-content {
 *   background: var(--backgroundColor);
 *   padding: 40px;
 *   border-radius: 10px;
 *   max-width: 500px;
 *   width: 90%;
 * }
 */
