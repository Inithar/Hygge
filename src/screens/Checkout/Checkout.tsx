import { Dispatch, SetStateAction, createContext, useState } from "react";

import { useMultiStepForm } from "../../hooks/useMultiStepForm";

import { Cart } from "../../components/Cart/Cart";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Personal } from "./Personal/Personal";
import { Shipping } from "./Shipping/Shipping";
import { Payment } from "./Payment/Payment";
import { Container } from "./Checkout.styled";

import { FormValues as PersonalData } from "./Personal/Personal";

type OrderData = PersonalData & {
  address: number | null;
};

type CheckoutContextType = {
  next: () => void;
  orderData: OrderData;
  setOrderData: Dispatch<SetStateAction<OrderData>>;
};

export const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const Checkout = () => {
  const { step, next } = useMultiStepForm([<Personal />, <Shipping />, <Payment />]);

  const [orderData, setOrderData] = useState<OrderData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: null,
  });

  const value = {
    next,
    orderData,
    setOrderData,
  };

  return (
    <Section>
      <SectionTitle title="Checkout" subtitle="Almost there" margin />

      <Container>
        <CheckoutContext.Provider value={value}>{step}</CheckoutContext.Provider>
        <Cart />
      </Container>
    </Section>
  );
};
