import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteAddress } from "../../services/addressesApi";

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      toast.success("Address successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["userAddresses"],
      });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { deleteAddress: mutate, isDeleting: isLoading };
};
