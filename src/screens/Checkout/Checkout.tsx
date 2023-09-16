import { Dispatch, SetStateAction, createContext, useState } from "react";

import { useMultiStepForm } from "../../hooks/useMultiStepForm";

import { Cart } from "../../components/Cart/Cart";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Personal } from "./Personal/Personal";
import { Shipping } from "./Shipping/Shipping";
import { Container } from "./Checkout.styled";

import { FormValues as PersonalData } from "./Personal/Personal";

type CheckoutData = PersonalData & {
  addressId: number | null;
};

type CheckoutFormContextType = {
  next: () => void;
  checkoutData: CheckoutData;
  setCheckoutData: Dispatch<SetStateAction<CheckoutData>>;
};

export const CheckoutFormContext = createContext<CheckoutFormContextType | undefined>(undefined);

export const Checkout = () => {
  const { step, next } = useMultiStepForm([<Personal />, <Shipping />]);

  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    name: "",
    surname: "",
    phone: "",
    addressId: null,
  });

  console.log(checkoutData);

  const value = {
    next,
    checkoutData,
    setCheckoutData,
  };

  return (
    <Section>
      <SectionTitle title="Checkout" subtitle="Almost there" margin />

      <Container>
        <CheckoutFormContext.Provider value={value}>{step}</CheckoutFormContext.Provider>
        <Cart />
      </Container>
    </Section>
  );
};
