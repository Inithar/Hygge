import { useQuery } from "@tanstack/react-query";
import { getOrderedProducts } from "../../services/orderedProductsApi";

export const useOrderedProducts = (orderId: number) => {
  const {
    data: orderedProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orderedProducts", orderId],
    queryFn: () => getOrderedProducts(orderId),
  });

  return { orderedProducts, isLoading, error };
};
