import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signup } from "../../services/authApi";

export const useSignup = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { signup: mutate, isLoading, error };
};
