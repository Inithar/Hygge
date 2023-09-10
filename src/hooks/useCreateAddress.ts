import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createAddress } from "../services/addressesApi";

export const useCreateAddress = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createAddress,
    onSuccess: () => {
      toast.success("New address successfully created");
      queryClient.invalidateQueries({ queryKey: ["userAddresses"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { createAddress: mutate, isCreating: isLoading };
};
