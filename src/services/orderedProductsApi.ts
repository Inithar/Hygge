import { supabase } from "../lib/supabase";
import { OrderedProduct } from "../types/collection";

type NewOrderedProduct = Omit<OrderedProduct, "id" | "created_at" | "status">;

export const getOrderedProducts = async (id: number) => {
  const { data: orderedProducts, error } = await supabase
    .from("orderedProducts")
    .select('*, order!inner("id")')
    .eq("order.id", id);

  if (error) {
    throw new Error("Ordered products could not be loaded");
  }

  return orderedProducts;
};

export const createOrderedProduct = async (products: NewOrderedProduct[]) => {
  const { data: createdOrder, error } = await supabase.from("orderedProducts").insert(products).select();

  if (error) {
    throw new Error("Product could not be created");
  }

  return createdOrder;
};
