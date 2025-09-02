// src/SiteData.js - Compatible with both Astro and React
const siteDomain = import.meta.env.PUBLIC_SITE_DOMAIN;
import Logo from "@/assets/farias.png"

export const SiteData = {
  title: "Faria's Demolition",
  legalName: "Faria's Demolition LLC",
  tagline: "Demolition & Disposal Services in NJ",
  Logo: Logo.src,
  description: "Welcome to Faria's Demolition and Disposal – your one-stop solution for cleaning and clearing in the State of New Jersey. Experience our efficient Demolition & Disposal, Junk Removal, and Estate Cleanouts. We handle, haul, recycle, and respect your space. Make room for the future with Faria's!",
  domain: siteDomain,
  url: `https://${siteDomain}`,
};

// Contact items using Font Awesome solid icons
export const contactItems = [
  {
    type: "email",
    label: "fariasdemolition@gmail.com",
    href: "mailto:fariasdemolition@gmail.com",
    icon: "fa6-solid:envelope",
  },
  {
    type: "phone",
    label: "732-374-1957",
    href: "tel:732-374-1957",
    icon: "fa6-solid:phone",
  },
  {
    type: "location",
    label: "Monmouth County, NJ",
    href: null,
    icon: "fa6-solid:map-pin",
  },
];

// Social media links using Font Awesome brands icons
export const socialMediaLinks = [
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/faria-s-demolition-and-disposal-middletown-township?uid=raWcbRzosIXfHAV1mWDXFQ&utm_source=ishare",
    icon: "fa6-brands:yelp",
  },
  {
    name: "Instagram", 
    href: "https://www.instagram.com/fariasdemolition/",
    icon: "fa6-brands:instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/people/Farias-Demolition-Disposal/100090931177545/?mibextid=LQQJ4d",
    icon: "fa6-brands:linkedin",
  },
];