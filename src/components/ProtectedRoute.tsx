import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "../hooks/api/useUser";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <Outlet />;
};
