import { Outlet } from "react-router-dom";

import { useUser } from "../../hooks/useUser";

import { Spinner } from "../../components/Spinner";
import { FullPage } from "./RootLayout.styled";

export const RootLayout = () => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <FullPage>
        <Spinner size="lg"/>
      </FullPage>
    );
  }

  return <Outlet />;
};
