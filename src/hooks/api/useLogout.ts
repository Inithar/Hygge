import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout } from "../../services/authApi";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout: mutate, isLoading, isError };
};
