import { Details } from "./Details/Details";
import { Features } from "./Features/Features";
import { Reviews } from "./Reviews/Reviews";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";
import { Newsletter } from "../../components/Newsletter/Newsletter";

export const Product = () => (
  <>
    <Details />
    <Features />
    <Reviews />
    <RelatedProducts />
    <Newsletter />
  </>
);
