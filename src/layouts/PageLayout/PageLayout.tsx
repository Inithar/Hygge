import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Main } from "./PageLayout.styled";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const PageLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
