import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

import { PageLayout } from "./layouts/PageLayout/PageLayout";
import { RootLayout } from "./layouts/RootLayout/RootLayout";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { Home } from "./screens/Home/Home";
import { Products } from "./screens/Products/Products";
import { About } from "./screens/About/About";
import { Contact } from "./screens/Contact/Contact";
import { Cart } from "./screens/Cart/Cart";
import { CartProvider } from "./context/cart";
import { Faq } from "./screens/Faq/Faq";
import { TermsAndConditions } from "./screens/TermsAndConditions/TermsAndConditions";
import { Register } from "./screens/Register/Register";
import { Login } from "./screens/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Account } from "./screens/Account/Account";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />

          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route element={<PageLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/account/" element={<Account />}></Route>
                  </Route>

                  <Route element={<AuthLayout />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </StyleSheetManager>
  </QueryClientProvider>
);
