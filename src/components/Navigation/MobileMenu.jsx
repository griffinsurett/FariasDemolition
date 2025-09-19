// src/components/Navigation/MobileMenu.jsx - Enhanced version
import React, { useState } from 'react';
import Modal from '../Modal';

export default function MobileMenu({ 
  items = [],
  showGetQuoteButton = true
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (e, href) => {
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
    
    // Close modal after clicking
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Styled to match your design */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden inline-flex items-center justify-center p-2 text-dark-primary hover:text-primary transition-colors"
        aria-label="Open menu"
      >
        <svg 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="w-screen h-screen bg-light-primary p-0 flex flex-col justify-between"
        overlayClass="bg-black bg-opacity-50 lg:hidden"
        closeButtonClass="absolute top-4 right-4 z-10 text-gray-700 hover:text-primary transition-colors bg-white rounded-full p-2 shadow-md"
      >
        {/* Header with Logo/Title */}
        <div className="bg-primary text-white py-6 px-6">
          <h2 className="text-2xl font-bold text-center">Faria's Demolition</h2>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col py-4">
          {items.map((item, index) => (
            <a
              key={item.href || index}
              href={item.href}
              onClick={(e) => handleItemClick(e, item.href)}
              className="px-6 py-4 text-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-200 flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* Get Quote Button */}
        {showGetQuoteButton && (
          <div className="p-6 pt-0">
            <a 
              href="#quote" 
              onClick={(e) => handleItemClick(e, '#quote')}
              className="block text-center bg-primary text-white px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-lg text-lg font-semibold"
            >
              Get Quote
            </a>
          </div>
        )}

        {/* Footer with contact info */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-2xl">
          <div className="flex justify-center space-x-6 text-sm">
            <a href="tel:732-374-1957" className="text-gray-600 hover:text-primary transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call
              </span>
            </a>
            <a href="mailto:fariasdemolition@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </span>
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}