import { useState, useEffect, useRef } from 'react';

/**
 * Smooth intersection observer hook for editorial scroll animations
 */
export function useInView(options = { threshold: 0.14 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold]);

  return [ref, isVisible];
}
