import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateOrder } from "../../services/ordersApi";

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order"],
      });
    },
  });

  return { updateOrder: mutate, isUpdating: isLoading };
};
