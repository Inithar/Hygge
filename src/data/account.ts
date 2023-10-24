import { FiBox as Box, FiFacebook as Facebook, FiInstagram as Instagram, FiTwitter as Twitter, FiHeart as Heart } from "react-icons/fi";
import { MdOutlineAttachEmail as Email, MdOutlineInfo as Info, MdOutlineLocationOn as Location } from "react-icons/md";
import { PiIdentificationCard as IdentificationCard } from "react-icons/pi";
import { GoHome as Home } from "react-icons/go";

export const links = [
  {
    category: "My Account",
    links: [
      {
        title: "Account Home",
        url: "/account/home",
        Icon: Home,
      },
      {
        title: "Your Orders",
        url: "/account/orders",
        Icon: Box,
      },
      {
        title: "Your Wishlist",
        url: "/account/wishlist",
        Icon: Heart,
      },
    ],
  },
  {
    category: "Account Settings",
    links: [
      {
        title: "Account Details",
        url: "/account/details",
        Icon: IdentificationCard,
      },
      {
        title: "Addresses",
        url: "/account/addresses",
        Icon: Location,
      },
    ],
  },
  {
    category: "Customer Service",
    links: [
      {
        title: "Contact Us",
        url: "/contact",
        Icon: Email,
      },
      {
        title: "Faq",
        url: "/faq",
        Icon: Info,
      },
      {
        title: "Facebook",
        url: "https://www.facebook.com/",
        Icon: Facebook,
      },
      {
        title: "Twitter",
        url: "https://www.twitter.com/",
        Icon: Twitter,
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/s",
        Icon: Instagram,
      },
    ],
  },
];
