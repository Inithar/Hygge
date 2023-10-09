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
import { Confirmation } from "./screens/Confirmation/Confirmation";

import { Account } from "./screens/Account/Account";
import { Home as AccountHome } from "./screens/Account/Home/Home";
import { Orders } from "./screens/Account/Orders/Orders";
import { Order } from "./screens/Account/Order/Order";
import { Addresses } from "./screens/Account/Addresses/Addresses";

import { Register } from "./screens/Register/Register";
import { Login } from "./screens/Login/Login";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { UnderConstruction } from "./screens/UnderConstruction/UnderConstruction";

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
          <Route path="/checkout/confirmation" element={<Confirmation />} />
          <Route path="/account/" element={<Account />}>
            <Route path="home" element={<AccountHome />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<Order />} />
            <Route path="addresses" element={<Addresses />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>

      <Route path="/under-construction" element={<UnderConstruction />} />
    </Route>
  </ReactRoutes>
);
