import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useQueryClient } from "@tanstack/react-query";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useCart } from "../../../hooks/context/useCart";
import { useCreateStripeCheckout } from "../../../hooks/api/useCreateStripeCheckout";

import { FormStepWrapper } from "../FormStepWrapper/FormStepWrapper";

import { Spinner } from "../../../components/Spinner";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { SpinnerWrapper } from "./Payment.styled";

import { breakpoints } from "../../../constants/breakpoints";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY, { locale: "en" });

export const Payment = () => {
  const queryClient = useQueryClient();

  const { width } = useWindowSize();
  const { items } = useCart();
  const { createStripeCheckout, isCreating: isCreatingCheckout } = useCreateStripeCheckout();

  useEffect(() => {
    createStripeCheckout(items);
  }, [createStripeCheckout, items]);

  const isMobile = width < breakpoints.xs;
  const queryData = queryClient.getQueryData<{ clientSecret: string | undefined }>(["clientSecret"]);

  const options = {
    clientSecret: queryData?.clientSecret,
    appearance: {
      variables: {
        borderRadius: "3.2rem",
        fontSizeBase: "16px",
        spacingUnit: isMobile ? "10px" : "12px",
        fontFamily: "Montserrat, sans-serif",
      },
      rules: {
        ".Input": {
          padding: isMobile ? "13px 24px" : "20px 24px",
          fontSize: isMobile ? "16px" : "20px",
        },

        ".Input::placeholder": {
          fontFamily: "Montserrat, sans-serif",
          color: "rgb(26, 32, 44, 0.4)",
          fontWeight: "400",
        },

        ".Label": {
          marginBottom: isMobile ? "8px" : "16px",
          fontSize: isMobile ? "14px" : "16px",
        },
      },
    },
  };

  return (
    <FormStepWrapper heading="Payment Details">
      {isCreatingCheckout ? (
        <SpinnerWrapper>
          <Spinner size="lg" />
        </SpinnerWrapper>
      ) : (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      )}
    </FormStepWrapper>
  );
};
