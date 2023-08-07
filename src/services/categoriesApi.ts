import { supabase } from "../lib/supabase";

export const getCategories = async () => {
  const { data: categories, error } = await supabase.from("categories").select("*");

  if (error) {
    throw new Error("Categories could not be loaded");
  }

  return categories;
};
