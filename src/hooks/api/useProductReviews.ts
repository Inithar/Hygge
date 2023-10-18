import { useQuery } from "@tanstack/react-query";
import { getProductReviews } from "../../services/productApi";

export const useProductReviews = (id: number) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productReviews", id],
    queryFn: () => getProductReviews(id),
  });

  return { reviews, isLoading, error };
};
