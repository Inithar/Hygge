import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productsApi";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products: data, isLoading, error };
};
