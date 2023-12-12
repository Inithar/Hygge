import { useCart } from "../../../hooks/context/useCart";

import { LinkButton } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Box, Container, StyledReceipt } from "./Receipt.styled";

import { SHIPPING_COST } from "../../../constants/settings";

export const Receipt = () => {
  const { productsTotal, discountTotal, cartTotal } = useCart();

  return (
    <StyledReceipt>
      <Heading as="h3">Cart Total</Heading>

      <Container>
        <Box>
          <p>Products:</p>
          <p>${productsTotal}</p>
        </Box>
        <Box>
          <p>Discount:</p>
          <p>${discountTotal}</p>
        </Box>
        <Box>
          <p>Shipping:</p>
          <p>${SHIPPING_COST}</p>
        </Box>
        <Box>
          <p>Total:</p>
          <p>${cartTotal}</p>
        </Box>
      </Container>

      <LinkButton to={"/checkout"}>Checkout</LinkButton>
    </StyledReceipt>
  );
};
