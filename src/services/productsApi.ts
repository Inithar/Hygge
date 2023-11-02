import { supabase } from "../lib/supabase";
import { PopulateProduct } from "../types/collection";

export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select(`*, category("name", "color")`)
    .returns<PopulateProduct[]>();

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return products;
};
