import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateAddress } from "../services/addressesApi";

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateAddress,
    onSuccess: () => {
      toast.success("Address successfully updated");

      queryClient.invalidateQueries({
        queryKey: ["userAddresses"],
      });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { updateAddress: mutate, isUpdating: isLoading };
};
