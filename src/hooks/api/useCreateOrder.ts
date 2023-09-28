import toast from "react-hot-toast";
import { Stripe, StripeElements } from "@stripe/stripe-js";

import { useMutation } from "@tanstack/react-query";
import { useCart } from "../context/useCart";
import { useCreateOrderedProduct } from "./useCreateOrderedProduct";

import { createOrder } from "../../services/ordersApi";

export const useCreateOrder = (stripe: Stripe | null, elements: StripeElements | null) => {
  const { items } = useCart();
  const { createOrderedProduct } = useCreateOrderedProduct();

  const { mutate, isLoading } = useMutation({
    mutationFn: createOrder,
    onSuccess: async (order) => {
      if (!stripe || !elements) {
        return;
      }

      const orderedItemsData = items.map(({ name, image, currentPrice, qty }) => ({
        name,
        image,
        price: currentPrice,
        quantity: qty,
        order: order.id,
      }));

      createOrderedProduct(orderedItemsData);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `http://localhost:5173/checkout/confirmation?order=${order.id}`,
        },
      });

      if (error.type === "card_error" || error.type === "validation_error") {
        toast.error(error.message as string);
      } else {
        toast.error("An unexpected error occurred. Try again later.");
      }
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { createOrder: mutate, isCreating: isLoading };
};
