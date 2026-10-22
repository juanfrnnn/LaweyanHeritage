import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track which section is currently in view.
 * Returns the ID of the active section for navbar highlighting.
 */
export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
