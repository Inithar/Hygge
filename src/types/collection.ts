import { Database } from "./supabase";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Brand = Database["public"]["Tables"]["brands"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];

export interface PopulateProduct extends Omit<Product, "category" | "brand"> {
  category: Pick<Category, "name" | "color">;
  brand: Pick<Brand, "name">;
}
