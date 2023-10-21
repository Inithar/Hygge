import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getUserFavoriteProducts } from "../../services/favoriteProductsApi";

export const useUserFavoriteProducts = (id: string) => {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isLoading, error } = useQuery({
    queryKey: ["userFavoriteProducts", id, page],
    queryFn: () => getUserFavoriteProducts({ page, userId: id }),
  });

  return {
    favoriteProducts: data?.favoriteProducts.map(({ product }) => product),
    count: data?.count,
    isLoading,
    error,
  };
};
