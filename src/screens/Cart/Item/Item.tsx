import { Link } from "react-router-dom";

import { Item as ItemType } from "../../../context/cart";
import { useCart } from "../../../hooks/context/useCart";

import { Counter } from "../../../components/Counter/Counter";
import { Heading } from "../../../components/Heading";
import { Controls, Current, Details, Old, Price, StyledItem, StyledLink } from "./Item.styled";

export const Item = ({ id, image, name, oldPrice, currentPrice, qty }: ItemType) => {
  const { removeFromCart, setItemQty } = useCart();

  return (
    <StyledItem>
      <StyledLink to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
        <img src={image} alt={`${name} product photo`} />
      </StyledLink>

      <Details>
        <Heading as="h3">
          <Link to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
            {name} <span>10g</span>
          </Link>
        </Heading>

        <Price>
          {oldPrice ? <Old>${oldPrice}</Old> : null}
          <Current>${currentPrice}</Current>
        </Price>

        <Controls>
          <Counter value={qty} onChange={(value) => setItemQty(id, value)} min={1} max={99} />

          <button onClick={() => removeFromCart(id)} aria-label={`Remove ${name} from cart`}>
            <img src="/icons/delete.svg" alt="delete icon" />
          </button>
        </Controls>
      </Details>
    </StyledItem>
  );
};
