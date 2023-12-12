import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteFavoriteProduct } from '../../services/favoriteProductsApi';

export const useDeleteFavoriteProduct = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteFavoriteProduct,
    onSuccess: () => {
      toast.success("Product successfully removed from favorite products");

      queryClient.invalidateQueries({
        queryKey: ["userFavoriteProducts"],
      });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { deleteFavoriteProduct: mutate, isDeleting: isLoading };
};
