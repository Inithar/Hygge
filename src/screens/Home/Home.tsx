import { Hero } from "./Hero/Hero";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { WhyUs } from "./WhyUs/WhyUs";
import { Reviews } from "../../components/Reviews/Reviews";

import { reviews } from "../../data/home";

export const Home = () => (
  <>
    <Hero />
    <Categories />
    <Products />
    <WhyUs />
    <Reviews reviews={reviews} />
  </>
);
