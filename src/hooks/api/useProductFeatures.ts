import { useQuery } from "@tanstack/react-query";
import { getProductFeatures } from "../../services/productApi";

export const useProductFeatures = (id: number) => {
  const {
    data: features,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productFeatures"],
    queryFn: () => getProductFeatures(id),
  });

  return { features, isLoading, error };
};
