import { Item } from '../context/cart';
import { supabase } from "../lib/supabase";
import { Order, PopulateOrder } from "../types/collection";

export type NewOrder = Omit<Order, "id" | "created_at" | "status">;
type UpdateOrder = { newOrderData: Partial<Order>; id: number };

export const getOrder = async (orderId: number) => {
  const { data: addresses, error } = await supabase
    .from("orders")
    .select(`*, address(*)`)
    .eq("id", orderId)
    .single<PopulateOrder>();

  if (error) {
    throw new Error("Order could not be loaded");
  }

  return addresses;
};

export const createOrder = async (order: NewOrder) => {
  const { data: createdOrder, error } = await supabase.from("orders").insert([order]).select().single();

  if (error) {
    throw new Error("Order could not be created");
  }

  return createdOrder;
};

export const updateOrder = async ({ newOrderData, id }: UpdateOrder) => {
  const { data, error } = await supabase.from("orders").update(newOrderData).eq("id", id).select().single();

  if (error) {
    throw new Error("Order could not be updated");
  }

  return data;
};

export const createStripeCheckout = async (items: Item[]) => {
  const { data: clientSecret, error } = await supabase.functions.invoke("create-stripe-checkout", {
    body: JSON.stringify({
      items,
    }),
  });

  if (error) {
    throw new Error("Checkout could not be created");
  }

  return clientSecret;
};
