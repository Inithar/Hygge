import { supabase } from "../lib/supabase";

export const addFavoriteProduct = async ({ customerId, productId }: { customerId: string; productId: number }) => {
  const { data, error } = await supabase
    .from("favorite_products")
    .insert([{ customer: customerId, product: productId }])
    .select()
    .single();

  if (error) {
    throw new Error("Product could not be added");
  }

  return data;
};
