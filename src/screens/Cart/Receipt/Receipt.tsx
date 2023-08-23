import { useCart } from "../../../hooks/useCart";

import { LinkButton } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Box, Container, StyledReceipt } from "./Receipt.styled";

export const Receipt = () => {
  const { items } = useCart();

  const taxPercentage = 15;
  const shippingCost = 8;
  const subtotal = items.reduce((acc, val) => acc + val.currentPrice * val.qty, 0);
  const tax = Number((subtotal * (taxPercentage / 100)).toFixed(2));

  return (
    <StyledReceipt>
      <Heading as="h3">Cart Total</Heading>

      <Container>
        <Box>
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </Box>
        <Box>
          <p>Tax:</p>
          <p>${tax}</p>
        </Box>
        <Box>
          <p>Shipping:</p>
          <p>${shippingCost}</p>
        </Box>
        <Box>
          <p>Total:</p>
          <p>${subtotal + tax + shippingCost}</p>
        </Box>
      </Container>

      <LinkButton to={"/checkout"}>Checkout</LinkButton>
    </StyledReceipt>
  );
};
