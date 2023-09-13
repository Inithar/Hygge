import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/api/useUser";

export const AuthLayout = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate(-1);
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};
