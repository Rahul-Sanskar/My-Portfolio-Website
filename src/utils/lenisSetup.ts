/**
 * Lenis Smooth Scroll Setup
 * 
 * This file initializes Lenis and syncs it with GSAP ScrollTrigger.
 * 
 * Why each step is needed:
 * 1. Create single Lenis instance - prevents multiple scroll handlers
 * 2. RAF loop - Lenis needs requestAnimationFrame to update smoothly
 * 3. ScrollTrigger.update() - syncs GSAP animations with Lenis scroll position
 * 4. scrollerProxy - tells ScrollTrigger to use Lenis scroll values instead of native
 * 5. ScrollTrigger.refresh() - recalculates all trigger positions after setup
 */

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create Lenis instance with optimized settings
export const lenis = new Lenis({
  duration: 1.2, // Scroll duration (higher = smoother but slower)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for natural feel
  orientation: "vertical", // Vertical scrolling
  gestureOrientation: "vertical", // Touch gesture direction
  smoothWheel: true, // Smooth mousewheel scrolling
  wheelMultiplier: 1, // Mousewheel sensitivity
  touchMultiplier: 2, // Touch scroll sensitivity
  infinite: false, // No infinite scroll
});

// Sync Lenis with GSAP ScrollTrigger
// This is CRITICAL - without this, ScrollTrigger animations won't sync with Lenis
lenis.on("scroll", ScrollTrigger.update);

// Tell GSAP to use Lenis scroll values instead of native scroll
// This prevents conflicts between Lenis smooth scroll and ScrollTrigger
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert GSAP time to milliseconds for Lenis
});

// Disable GSAP's lag smoothing to prevent conflicts with Lenis
gsap.ticker.lagSmoothing(0);

/**
 * Initialize Lenis and set up ScrollTrigger integration
 * Call this once when your app mounts
 */
export function initLenis() {
  // Refresh ScrollTrigger after Lenis is ready
  // This ensures all trigger positions are calculated correctly
  ScrollTrigger.refresh();
}

/**
 * Scroll to a specific element smoothly
 * @param target - CSS selector, element, or scroll position
 * @param options - Lenis scroll options
 */
export function scrollTo(
  target: string | HTMLElement | number,
  options?: {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
  }
) {
  lenis.scrollTo(target, options);
}

/**
 * Stop smooth scrolling (useful for modals, overlays)
 */
export function stopScroll() {
  lenis.stop();
}

/**
 * Resume smooth scrolling
 */
export function startScroll() {
  lenis.start();
}

/**
 * Destroy Lenis instance (cleanup on unmount)
 */
export function destroyLenis() {
  lenis.destroy();
}
