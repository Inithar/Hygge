import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Credentials, login as loginApi } from "../../services/authApi";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (credentials: Credentials) => loginApi(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, isLoading };
};
