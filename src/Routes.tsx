import { Routes as ReactRoutes, Route } from "react-router-dom";

import { PageLayout } from "./layouts/PageLayout/PageLayout";
import { RootLayout } from "./layouts/RootLayout/RootLayout";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";

import { Home } from "./screens/Home/Home";
import { Products } from "./screens/Products/Products";
import { About } from "./screens/About/About";
import { Contact } from "./screens/Contact/Contact";
import { Cart } from "./screens/Cart/Cart";
import { Faq } from "./screens/Faq/Faq";
import { TermsAndConditions } from "./screens/TermsAndConditions/TermsAndConditions";

import { Checkout } from "./screens/Checkout/Checkout";

import { Account } from "./screens/Account/Account";
import { Addresses } from "./screens/Account/Addresses/Addresses";

import { Register } from "./screens/Register/Register";
import { Login } from "./screens/Login/Login";

import { ProtectedRoute } from "./components/ProtectedRoute";

export const Routes = () => (
  <ReactRoutes>
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/" element={<Account />}>
            <Route path="addresses" element={<Addresses />} />R
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    </Route>
  </ReactRoutes>
);
