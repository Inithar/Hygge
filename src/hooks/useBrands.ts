import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../services/brandsApi";

export const useBrands = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  return { brands: data, isLoading, error };
};
