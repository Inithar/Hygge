import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

import { Routes } from "./Routes";
import { CartProvider } from "./context/cart";
import { Toaster } from "./components/Toaster";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <Toaster />

          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </StyleSheetManager>
  </QueryClientProvider>
);
