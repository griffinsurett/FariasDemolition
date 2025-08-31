// iconsConfig.js
export const iconConfig = {
  include: {
    // keep your existing includes...
    lucide: [
      'mail','phone','map-pin','navigation','marker-pin','map','linkedin','twitter','github','instagram','yelp',
      'chevron-left','chevron-right','menu','x','star',
    ],
    
    // ✅ Font Awesome 6 Solid versions
    'fa6-solid': [
      'envelope',            // Email
      'phone',               // Phone
      'location-dot',        // Location
      'trash-can',           // Junk Removal
      'house',               // Estate Cleanouts
      'building',            // Exterior Demolition
      'truck',               // Hauling
      'broom',               // Cleanups
      'screwdriver-wrench',  // Repairs/Prep
      'helmet-safety',       // Safety
      'person-digging'       // Demo/Excavation
    ],
    
    // ✅ Font Awesome 6 Regular (outline) versions  
    'fa6-regular': [
      'home',               // Estate Cleanouts (outline)
      'trash-can',           // Junk Removal (outline)
      'building',            // Exterior Demolition (outline)  
      'truck',               // Hauling (outline)
      'broom',               // Cleanups (outline)
      'screwdriver-wrench',  // Repairs/Prep (outline)
      'helmet-safety',       // Safety (outline)
      'person-digging'       // Demo/Excavation (outline)
      // Note: 'house' might not be available in fa6-regular
    ],
  },
  svgoOptions: {
    multipass: true,
    plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }],
  },
};