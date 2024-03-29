import { BlogPost } from "../types/collection";

export const features = [
  {
    icon: "https://xtvkltvzbtkdsixwpjdr.supabase.co/storage/v1/object/public/features-icons/box.svg",
    name: "Easy Returns",
    description: "Our return policy is simple and that is why customers love our shop.",
  },
  {
    icon: "https://xtvkltvzbtkdsixwpjdr.supabase.co/storage/v1/object/public/features-icons/user.svg",
    name: "Customer Service",
    description: "We offer amazing customer service no matter what happens.",
  },
  {
    icon: "https://xtvkltvzbtkdsixwpjdr.supabase.co/storage/v1/object/public/features-icons/star.svg",
    name: "High Quality",
    description: "All of our products go through very strict inspection before we dispatch them.",
  },
];

export const reviews = [
  {
    profileImg: "/images/profile-pic.png",
    name: "Amy",
    surname: "Smith",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit velit ex consequat urna",
  },
  {
    profileImg: "/images/profile-pic-2.png",
    name: "Isabella",
    surname: "Müller",
    review: "Morbi finibus, enim nec euismod tempus, velit ex consequat urna, vitae viverra neque risus",
  },
  {
    profileImg: "/images/profile-pic-3.png",
    name: "Aisha",
    surname: "Patel",
    review: "In odio massa, accumsan at ex et, vehicula maximus nunc ipsum dolor sit amet",
  },
];

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Morning Skincare Routine: 10 Top Tips for you",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-1.jpg",
    tag: {
      title: "recent",
      color: "green",
    },
    category: {
      title: "Top tips",
      color: "yellow",
    },
  },
  {
    id: "2",
    title: "New Collection is Out",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-2.jpg",
    category: {
      title: "New in",
      color: "blue",
    },
  },
  {
    id: "3",
    title: "Always Stay Fresh",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-3.jpg",
    tag: {
      title: "popular",
      color: "red",
    },
    category: {
      title: "How to",
      color: "pink",
    },
  },
  {
    id: "4",
    title: "Improve your Skin now",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-4.jpg",
    category: {
      title: "Masks",
      color: "green",
    },
  },
  {
    id: "5",
    title: "Stay Safe in the Sun",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-5.jpg",
    category: {
      title: "Sun care",
      color: "yellow",
    },
  },
  {
    id: "6",
    title: "Explore our Bestselling Products",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-6.jpg",
    category: {
      title: "Bestsellers",
      color: "blue",
    },
  },
  {
    id: "7",
    title: "5 Great Tips to Get that Perfect Skin",
    url: "/under-construction",
    img: "/images/home/blog/blog-pic-7.jpg",
    category: {
      title: "Top tips",
      color: "pink",
    },
  },
];
