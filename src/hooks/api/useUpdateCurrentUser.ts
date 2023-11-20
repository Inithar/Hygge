import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCurrentUser } from "../../services/userApi";

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { updateCurrentUser: mutate, isUpdating: isLoading };
};
