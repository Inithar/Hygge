import { Database } from "./supabase";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];

export interface ProductWithCategory extends Omit<Product, "category"> {
  category: Pick<Category, "name" | "color">;
}
