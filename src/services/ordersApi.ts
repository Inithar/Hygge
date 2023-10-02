import { supabase } from "../lib/supabase";
import { Item } from "../context/cart";

import { ORDERS_PAGE_SIZE } from "../constants/settings";
import { Order, PopulateOrder } from "../types/collection";

export type NewOrder = Omit<Order, "id" | "created_at" | "status">;

type UpdateOrder = {
  newOrderData: Partial<Order>;
  id: number;
};

type GetOrdersParams = {
  filter: { field: string; value: number | string | Date } | null;
  page: number;
};

export const getOrders = async ({ filter, page }: GetOrdersParams) => {
  let query = supabase.from("orders").select("*", { count: "exact" });

  if (filter) {
    query = query.gte(filter.field, filter.value);
  }

  if (page) {
    const from = (page - 1) * ORDERS_PAGE_SIZE;
    const to = from + ORDERS_PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: orders, error, count } = await query;

  if (error) {
    throw new Error("Orders could not be loaded");
  }

  return { orders, count };
};

export const getOrder = async (orderId: number) => {
  const { data: order, error } = await supabase
    .from("orders")
    .select(`*, address(*)`)
    .eq("id", orderId)
    .single<PopulateOrder>();

  if (error) {
    throw new Error("Order could not be loaded");
  }

  return order;
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
