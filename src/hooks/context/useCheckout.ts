import { useContext } from "react";
import { CheckoutContext } from "../../screens/Checkout/Checkout";

export const useCheckout = () => {
  const context = useContext(CheckoutContext);

  if (context === undefined) {
    throw new Error("CheckoutContext was used outside of the CheckoutProvider");
  }

  return context;
};
