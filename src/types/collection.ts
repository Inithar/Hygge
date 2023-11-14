import { Database } from "./supabase";
import { BadgeColor } from "../components/Badge/Badge.styled";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];
export type Address = Database["public"]["Tables"]["addresses"]["Row"];
export type Order = Database["public"]["Tables"]["orders"]["Row"];
export type OrderedProduct = Database["public"]["Tables"]["orderedProducts"]["Row"];
export type Feature = Database["public"]["Tables"]["features"]["Row"];
export type ProductFeatures = Database["public"]["Tables"]["products_features"]["Row"];
export type RelatedProducts = Database["public"]["Tables"]["related_products"]["Row"];
export type FavoriteProducts = Database["public"]["Tables"]["favorite_products"]["Row"];
export type OrderAddress = Database["public"]["Tables"]["orders_addresses"]["Row"]

export type OrderStatus = Database["public"]["Tables"]["orders"]["Row"]["status"];

export interface PopulateProduct extends Omit<Product, "category"> {
  category: Pick<Category, "name" | "color">;
}

export interface PopulateOrder extends Omit<Order, "address"> {
  address: Address;
}

export interface PopulateProductFeatures extends Omit<ProductFeatures, "feature"> {
  feature: Feature;
}

export interface PopulateRelatedProducts extends Omit<RelatedProducts, "related_product"> {
  ["related_product"]: PopulateProduct;
}

export interface PopulateFavoriteProducts extends Omit<FavoriteProducts, "product"> {
  product: PopulateProduct;
}

export type BlogPost = {
  id: string;
  title: string;
  url: string;
  img: string;
  tag?: {
    title: string;
    color: BadgeColor;
  };
  category: {
    title: string;
    color: BadgeColor;
  };
};
