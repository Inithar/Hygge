import { LinkButton } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { Container } from "./Empty.styled";

export const Empty = () => (
  <Container>
    <img src="/public/icons/cart.svg" alt="Cart icon" />

    <Heading as="h2">Your cart is currently empty</Heading>

    <div>
      <Text>Before proceed to checkout, you must add some products to your cart.</Text>
      <Text>You will find a lot of interesting products on our "Products" page.</Text>
    </div>

    <LinkButton to="/products">Shop Now</LinkButton>
  </Container>
);
