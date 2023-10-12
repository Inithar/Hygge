import { Database } from "./supabase";
import { BadgeColor } from "../components/Badge/Badge.styled";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Brand = Database["public"]["Tables"]["brands"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];
export type Address = Database["public"]["Tables"]["addresses"]["Row"];
export type Order = Database["public"]["Tables"]["orders"]["Row"];
export type OrderedProduct = Database["public"]["Tables"]["orderedProducts"]["Row"];

export interface PopulateProduct extends Omit<Product, "category" | "brand"> {
  category: Pick<Category, "name" | "color">;
  brand: Pick<Brand, "name">;
}

export interface PopulateOrder extends Omit<Order, "address"> {
  address: Address;
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
