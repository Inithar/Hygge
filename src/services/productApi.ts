import { supabase } from "../lib/supabase";
import { PopulateProductFeatures } from "../types/collection";

export const getProductFeatures = async (id: number) => {
  const { data: features, error } = await supabase
    .from("products_features")
    .select("*, feature(*)")
    .eq("product", id)
    .returns<PopulateProductFeatures[]>();

  if (error) {
    throw new Error("Product features could not be loaded");
  }

  return features;
};
