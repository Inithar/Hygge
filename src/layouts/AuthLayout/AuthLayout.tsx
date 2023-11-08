import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/api/useUser";

export const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      location.key === "default" ? navigate("/") : navigate(location.pathname === "/register" ? -2 : -1);
    }
  }, [isAuthenticated, navigate, location]);

  return <Outlet />;
};
