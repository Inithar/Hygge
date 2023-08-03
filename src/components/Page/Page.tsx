import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Main } from "./Page.styled";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Page = () => {
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
