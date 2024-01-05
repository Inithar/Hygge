import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getOrder } from "../../services/ordersApi";
import { getOrderedProducts } from "../../services/orderedProductsApi";

export const useOrder = (id: number) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
  });

  queryClient.prefetchQuery({ queryKey: ["orderedProducts", id], queryFn: () => getOrderedProducts(id) });

  return { order: data, isLoading, error };
};
