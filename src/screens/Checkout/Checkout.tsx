import { Dispatch, Fragment, SetStateAction, createContext, useState } from "react";

import { useCart } from "../../hooks/context/useCart";
import { useUser } from "../../hooks/api/useUser";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";

import { Cart } from "../../components/Cart/Cart";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import { Personal } from "./Personal/Personal";
import { Shipping } from "./Shipping/Shipping";
import { Payment } from "./Payment/Payment";
import { Circle, Container, Line, Steps } from "./Checkout.styled";

import { FormValues as PersonalData } from "./Personal/Personal";
import { OrderAddress } from "../../types/collection";

type OrderData = Partial<PersonalData> & {
  address: Omit<OrderAddress, "created_at"> | null;
};

type CheckoutContextType = {
  next: () => void;
  orderData: OrderData;
  setOrderData: Dispatch<SetStateAction<OrderData>>;
};

export const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const Checkout = () => {
  const { user } = useUser();
  const { isCartEmpty } = useCart();

  const { step, next, goTo, currentStepIndex, numberOfSteps } = useMultiStepForm([
    <Personal />,
    <Shipping />,
    <Payment />,
  ]);

  const [orderData, setOrderData] = useState<OrderData>({
    name: user?.user_metadata.name,
    surname: user?.user_metadata.surname,
    email: user?.email,
    phone: user?.user_metadata.phone,
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

      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <Container>
          <Steps>
            {[...Array(numberOfSteps).keys()].map((i) => (
              <Fragment key={i}>
                <Circle onClick={() => goTo(i)} disabled={i > currentStepIndex}>
                  {i + 1}
                </Circle>
                {i !== numberOfSteps - 1 && <Line disabled={i > currentStepIndex} />}
              </Fragment>
            ))}
          </Steps>

          <CheckoutContext.Provider value={value}>{step}</CheckoutContext.Provider>
          <Cart />
        </Container>
      )}
    </Section>
  );
};
