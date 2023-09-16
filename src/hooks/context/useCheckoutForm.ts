import { useContext } from "react";
import { CheckoutFormContext } from "../../screens/Checkout/Checkout";

export const useCheckoutForm = () => {
  const context = useContext(CheckoutFormContext);

  if (context === undefined) {
    throw new Error("CheckoutFormContext was used outside of the CheckoutFormProvider");
  }

  return context;
};
