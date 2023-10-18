import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/productApi";

export const useProduct = (id: number) => {
  console.log("test");

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  return { product: data, isLoading, error };
};
