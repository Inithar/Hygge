import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Wrapper } from "./Page.styled";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Page = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
};
