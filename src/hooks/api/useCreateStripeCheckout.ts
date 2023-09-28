import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStripeCheckout } from "../../services/ordersApi";

export const useCreateStripeCheckout = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createStripeCheckout,
    onSuccess: (data) => {
      queryClient.setQueryData(["clientSecret"], data);
    },
  });

  return { createStripeCheckout: mutate, isCreating: isLoading };
};
