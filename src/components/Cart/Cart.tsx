import { Link } from "react-router-dom";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import { useCart } from "../../hooks/context/useCart";

import { Heading } from "../Heading";
import { LinkButton } from "../Button";
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
  Buttons,
} from "./Cart.styled";

type CartProps = {
  place?: "header" | "checkout";
};

export const Cart = ({ place = "checkout" }: CartProps) => {
  const { items, cartTotal, removeFromCart } = useCart();

  return (
    <Wrapper>
      {place === "checkout" && <Heading as="h3">My cart</Heading>}

      <Items>
        {items.map(({ id, name, image, oldPrice, currentPrice, qty }) => (
          <Item key={id}>
            <StyledLink to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
              <img src={image} alt={`${name} product photo`} />
            </StyledLink>

            <Details>
              <Link to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
                {name}
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
              <CloseIcon />
            </RemoveItemButton>
          </Item>
        ))}
      </Items>

      <Total>
        <p>Total:</p>
        <p>${cartTotal}</p>
      </Total>

      <Buttons>
        {place === "header" && (
          <LinkButton to="/checkout" block>
            Checkout
          </LinkButton>
        )}

        <LinkButton to="/cart" block variation="secondary">
          Edit Cart
        </LinkButton>
      </Buttons>
    </Wrapper>
  );
};
