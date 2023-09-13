import { useMutation } from "@tanstack/react-query";

import { signup } from "../../services/authApi";

export const useSignup = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => {},
  });

  return { signup: mutate, isLoading, error };
};
