import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

export const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isLoading, error, isAuthenticated };
};
