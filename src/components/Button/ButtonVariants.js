// src/components/ButtonVariants.js

const baseButtonClasses =
  "inline-flex items-center justify-center hover:pulseGlow cursor-pointer";

  const buttonClasses = `${baseButtonClasses} shadow-lg rounded-full px-8 md:px-10 py-4 h6`;

export const ButtonVariants = {
  primary: {
    buttonClasses: `${buttonClasses} bg-primary text-white hover:brightness-110`,
  },
  secondary: {
    buttonClasses: `${buttonClasses} bg-light-primary text-gray-900 hover:bg-gray-100 ring-1 ring-white/30`,
  },
  link: {
    buttonClasses: `${baseButtonClasses}`,
  },
};
