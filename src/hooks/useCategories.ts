import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoriesApi";

export const useCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { categories: data, isLoading, error };
};
