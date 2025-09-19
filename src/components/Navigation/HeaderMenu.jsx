// src/components/Navigation/HeaderMenu.jsx
import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

export default function HeaderMenu({ 
  items = [],
  className = "",
  itemClassName = "",
  activeClass,
  inactiveClass
}) {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Determine initial active item based on URL
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash;
      
      // Find matching item
      const active = items.find(item => 
        item.href === currentPath || 
        item.href === currentPath + currentHash ||
        (currentPath === '/' && item.href === '/')
      );
      
      if (active) {
        setActiveItem(active.href);
      }
    }
  }, [items]);

  return (
    <nav className={`flex items-center flex-wrap ${className}`}>
      {items.map((item, index) => (
        <MenuItem
          key={item.href || index}
          label={item.label}
          href={item.href}
          isActive={item.active || activeItem === item.href}
          className={itemClassName}
          activeClass={activeClass}
          inactiveClass={inactiveClass}
          onClick={() => setActiveItem(item.href)}
        />
      ))}
    </nav>
  );
}