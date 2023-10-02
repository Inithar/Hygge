import { FormEvent } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useCreateOrder } from "../../../hooks/api/useCreateOrder";
import { useCheckout } from "../../../hooks/context/useCheckout";
import { useCart } from "../../../hooks/context/useCart";

import { Spinner } from "../../../components/Spinner";
import { Button } from "../../../components/Button";
import { Form } from "./PaymentForm.styled";

import { NewOrder } from "../../../services/ordersApi";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { cartTotal } = useCart();
  const { orderData } = useCheckout();
  const { createOrder, isCreating: isCreatingOrder } = useCreateOrder(stripe, elements);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createOrder({ ...orderData, amount: cartTotal } as NewOrder);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button block disabled={isCreatingOrder}>
        {isCreatingOrder ? <Spinner secondary /> : "Order and Pay"}
      </Button>
    </Form>
  );
};
