// src/components/Navigation/MenuItem.jsx
import React, { useState, useEffect } from 'react';

export default function MenuItem({ 
  label, 
  href, 
  isActive = false,
  className = "",
  activeClass = "bg-secondary text-white",
  inactiveClass = "text-gray-700 hover:bg-primary hover:text-white",
  onClick
}) {
  const [isCurrentlyActive, setIsCurrentlyActive] = useState(isActive);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Handle hash-based sections
    if (href?.startsWith('#')) {
      const sectionId = href.substring(1);
      
      const handleScroll = () => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const offset = 100; // Adjust based on header height
        
        // Check if section is in viewport
        const isInView = rect.top <= offset && rect.bottom >= offset;
        setIsCurrentlyActive(isInView);
      };

      // Check current hash on mount
      if (window.location.hash === href) {
        setIsCurrentlyActive(true);
      }

      // Listen to scroll events
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For regular pages, check if current path matches
      const currentPath = window.location.pathname;
      setIsCurrentlyActive(currentPath === href);
    }
  }, [href]);

  const handleClick = (e) => {
    // Handle smooth scrolling for hash links
    if (href?.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      
      if (section) {
        const offset = 80; // Adjust based on your fixed header height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }
    
    // Call custom onClick if provided
    if (onClick) onClick(e);
  };

  const finalClassName = `
    px-6 py-3.5 h6 cursor-pointer transition-all duration-200
    ${isCurrentlyActive ? activeClass : inactiveClass}
    ${className}
  `.trim();

  return (
    <a
      href={href}
      onClick={handleClick}
      className={finalClassName}
      aria-current={isCurrentlyActive ? 'page' : undefined}
    >
      {label}
    </a>
  );
}