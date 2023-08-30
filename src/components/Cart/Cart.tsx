import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Heading } from "../Heading";
import {
  Item,
  Items,
  Wrapper,
  StyledLink,
  RemoveItemButton,
  Details,
  Price,
  Old,
  Current,
  Quantity,
  Total,
} from "./Cart.styled";
import { Button } from "../Button";

export const Cart = () => {
  const { items, removeFromCart } = useCart();

  return (
    <Wrapper>
      <Heading as="h3">My cart</Heading>

      <Items>
        {items.map(({ id, name, image, oldPrice, currentPrice, qty }) => (
          <Item key={id}>
            <StyledLink to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
              <img src={image} alt={`${name} product photo`} />
            </StyledLink>

            <Details>
              <Link to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
                {name} 10 ml
              </Link>

              <Price>
                {oldPrice ? <Old>${oldPrice}</Old> : null}
                <Current>${currentPrice}</Current>
              </Price>

              <Quantity>
                <p>Quantity:</p>
                <p>{qty}</p>
              </Quantity>
            </Details>

            <RemoveItemButton onClick={() => removeFromCart(id)} aria-label={`Remove ${name} from cart`}>
              <img src="/icons/delete.svg" alt="delete icon" />
            </RemoveItemButton>
          </Item>
        ))}
      </Items>

      <Total>
        <p>Total:</p>
        <p>${items.reduce((acc, val) => acc + val.currentPrice * val.qty, 0)}</p>
      </Total>

      <Button block variation="secondary">
        Edit Cart
      </Button>
    </Wrapper>
  );
};
