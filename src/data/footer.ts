import { FiFacebook as Facebook, FiInstagram as Instagram, FiTwitter as Twitter } from "react-icons/fi";

export const socials = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/",
  },
  {
    Icon: Twitter,
    href: "https://www.twitter.com/",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/",
  },
];

export const boxes = [
  {
    heading: "Categories",
    links: [
      { label: "Balms", href: "/products?category=Balms" },
      { label: "Eye Care", href: "/products?category=Eye+Care" },
      { label: "Featured", href: "/products?category=Featured" },
      { label: "Masks", href: "/products?category=Masks" },
      { label: "Moisturizers", href: "/products?category=Moisturizers" },
      { label: "Night Care", href: "/products?category=Night+Care" },
      { label: "Sun Care", href: "/products?category=Sun+Care" },
      { label: "Treatments", href: "/products?category=Treatments" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/terms-and-conditions" },
      { label: "Return Policy", href: "/terms-and-conditions" },
      { label: "Shipping", href: "/terms-and-conditions" },
      { label: "Data Protection", href: "/terms-and-conditions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Faq", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/under-construction" },
      { label: "Vision", href: "/under-construction" },
      { label: "Culture", href: "/under-construction" },
    ],
  },
];
