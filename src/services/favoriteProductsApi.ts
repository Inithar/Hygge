import { supabase } from "../lib/supabase";

import { PopulateFavoriteProducts } from "../types/collection";
import { FAVORITE_PRODUCTS_PAGE_SIZE } from "../constants/settings";

export const addFavoriteProduct = async ({ userId, productId }: { userId: string; productId: number }) => {
  const { data, error } = await supabase
    .from("favorite_products")
    .insert([{ customer: userId, product: productId }])
    .select()
    .single();

  if (error) {
    throw new Error("Product could not be added");
  }

  return data;
};

export const getUserFavoriteProducts = async ({ userId, page }: { userId: string; page: number }) => {
  let query = supabase
    .from("favorite_products")
    .select(`*, product(*, category("name", "color"), brand("name"))`, { count: "exact" })
    .eq("customer", userId)
    .returns<PopulateFavoriteProducts[]>();

  if (page) {
    const from = (page - 1) * FAVORITE_PRODUCTS_PAGE_SIZE;
    const to = from + FAVORITE_PRODUCTS_PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: favoriteProducts, error, count } = await query;

  if (error) {
    throw new Error("Favorite products could not be loaded");
  }

  return { favoriteProducts, count };
};
