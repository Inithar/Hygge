import { FiShoppingCart as CartIcon } from "react-icons/fi";

import { LinkButton } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Container } from "./EmptyCart.styled";

export const EmptyCart = () => (
  <Container>
    <CartIcon />

    <Heading as="h2">Your cart is currently empty</Heading>

    <div>
      <Text>Before proceed to checkout, you must add some products to your cart.</Text>
      <Text>You will find a lot of interesting products on our "Products" page.</Text>
    </div>

    <LinkButton to="/products">Shop Now</LinkButton>
  </Container>
);
