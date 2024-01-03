import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useCart } from "../context/useCart";
import { logout } from "../../services/authApi";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { clearCart } = useCart();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      clearCart();
      navigate("/login", { replace: true });
    },
  });

  return { logout: mutate, isLoading, isError };
};
