// src/components/ButtonVariants.js

export const baseButtonClasses =
  "inline-flex items-center justify-center rounded-full px-8 md:px-10 py-4 h6 transition-all shadow-lg cursor-pointer";

export const ButtonVariants = {
  primary: {
    buttonClasses: `${baseButtonClasses} bg-primary text-white hover:brightness-110`,
  },
  secondary: {
    buttonClasses: `${baseButtonClasses} bg-light-primary text-gray-900 hover:bg-gray-100 ring-1 ring-white/30`,
  },
};
