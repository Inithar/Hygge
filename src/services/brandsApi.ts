import { supabase } from "../lib/supabase";

export const getBrands = async () => {
  const { data: brands, error } = await supabase.from("brands").select("*");

  if (error) {
    throw new Error("Brands could not be loaded");
  }

  return brands;
};
