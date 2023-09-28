import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/ordersApi";

export const useOrder = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrder(id),
  });

  return { order: data, isLoading, error };
};
