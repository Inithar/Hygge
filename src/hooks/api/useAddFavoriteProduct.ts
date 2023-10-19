import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addFavoriteProduct } from "../../services/favoriteProductsApi";

export const useAddFavoriteProduct = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: addFavoriteProduct,
    onSuccess: () => {
      toast.success("Product successfully added to favorite products");
      queryClient.invalidateQueries({ queryKey: ["favoriteProducts"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { addFavoriteProduct: mutate, isAdding: isLoading };
};
