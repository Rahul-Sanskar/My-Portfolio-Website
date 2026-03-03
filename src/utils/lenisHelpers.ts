/**
 * Lenis Helper Functions
 * Common use cases for Lenis smooth scroll
 */

import { lenis, scrollTo, stopScroll, startScroll } from "./lenisSetup";

/**
 * Scroll to top of page
 */
export function scrollToTop(duration = 1.5) {
  scrollTo(0, { duration });
}

/**
 * Scroll to bottom of page
 */
export function scrollToBottom(duration = 1.5) {
  scrollTo(document.body.scrollHeight, { duration });
}

/**
 * Check if user is at top of page
 */
export function isAtTop(): boolean {
  return lenis.scroll === 0;
}

/**
 * Check if user is at bottom of page
 */
export function isAtBottom(): boolean {
  return lenis.scroll >= lenis.limit;
}

/**
 * Get current scroll position
 */
export function getScrollPosition(): number {
  return lenis.scroll;
}

/**
 * Get scroll progress (0 to 1)
 */
export function getScrollProgress(): number {
  return lenis.progress;
}

/**
 * Disable scroll (useful for modals, menus)
 */
export function disableScroll() {
  stopScroll();
  document.documentElement.classList.add("lenis-stopped");
}

/**
 * Enable scroll
 */
export function enableScroll() {
  startScroll();
  document.documentElement.classList.remove("lenis-stopped");
}

/**
 * Scroll to element with offset (useful for fixed headers)
 * @param selector - CSS selector or element
 * @param headerHeight - Height of fixed header
 */
export function scrollToWithOffset(
  selector: string | HTMLElement,
  headerHeight = 80
) {
  scrollTo(selector, {
    offset: -headerHeight,
    duration: 1.5,
  });
}

/**
 * Add scroll event listener
 * @param callback - Function to call on scroll
 * @returns Cleanup function
 */
export function onScroll(callback: (data: any) => void): () => void {
  lenis.on("scroll", callback);
  return () => lenis.off("scroll", callback);
}

/**
 * Example usage in React component:
 * 
 * import { useEffect } from "react";
 * import { onScroll, scrollToTop, disableScroll, enableScroll } from "../utils/lenisHelpers";
 * 
 * function MyComponent() {
 *   useEffect(() => {
 *     // Listen to scroll
 *     const cleanup = onScroll((data) => {
 *       console.log("Scroll position:", data.scroll);
 *     });
 *     
 *     return cleanup;
 *   }, []);
 *   
 *   return (
 *     <button onClick={() => scrollToTop()}>Back to Top</button>
 *   );
 * }
 */
