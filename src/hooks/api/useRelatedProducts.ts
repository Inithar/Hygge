import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "../../services/productApi";

export const useRelatedProducts = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["relatedProducts", id],
    queryFn: () => getRelatedProducts(id),
  });

  return { relatedProducts: data?.map(({ related_product }) => related_product), isLoading, error };
};
