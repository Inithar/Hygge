import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getOrders } from "../../services/ordersApi";

import { subtractDays } from "../../utils/subtractDays";

export const useOrders = (customer?: string) => {
  const [searchParams] = useSearchParams();

  const period = searchParams.get("period");

  const filter =
    !period || period === "from-the-beginning"
      ? null
      : { field: "created_at", value: subtractDays(new Date(), Number(period)).toDateString() };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", filter, page, customer],
    queryFn: () => getOrders({ filter, page, customer }),
  });

  return { orders: data?.orders, count: data?.count, isLoading, error };
};
