import { useMutation } from "@tanstack/react-query";
import { createOrderedProduct } from "../../services/orderedProductsApi";

export const useCreateOrderedProduct = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: createOrderedProduct,
  });

  return { createOrderedProduct: mutate, isCreating: isLoading };
};
