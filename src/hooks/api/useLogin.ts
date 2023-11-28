import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Credentials, login as loginApi } from "../../services/authApi";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (credentials: Credentials) => loginApi(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("You have successfully logged in")
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { login, isLoading };
};
