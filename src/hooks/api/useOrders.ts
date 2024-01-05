import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getOrders } from "../../services/ordersApi";

import { subtractDays } from "../../utils/subtractDays";
import { ORDERS_PAGE_SIZE } from "../../constants/settings";

export const useOrders = (customer?: string) => {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const period = searchParams.get("period");

  const filter =
    !period || period === "from-the-beginning"
      ? null
      : { field: "created_at", value: subtractDays(new Date(), Number(period)).toDateString() };

  console.log(filter);

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", filter, page, customer],
    queryFn: () => getOrders({ filter, page, customer }),
  });

  const pageCount = Math.ceil(data?.count || 1 / ORDERS_PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, page + 1, customer],
      queryFn: () => getOrders({ filter, page: page + 1, customer }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, page - 1, customer],
      queryFn: () => getOrders({ filter, page: page - 1, customer }),
    });
  }

  return { orders: data?.orders, count: data?.count, isLoading, error };
};
