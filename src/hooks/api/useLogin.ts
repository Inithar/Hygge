import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Credentials, login as loginApi } from "../../services/authApi";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (credentials: Credentials) => loginApi(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, isLoading };
};
