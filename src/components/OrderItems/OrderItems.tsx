import { useOrderedProducts } from "../../hooks/api/useOrderedProducts";

import { Text } from "../Text";
import { Items, Item, StyledLink, Container } from "./OrderItems.styled";

type OrderedItemsProps = {
  orderId: number;
};

export const OrderItems = ({ orderId }: OrderedItemsProps) => {
  const { orderedProducts } = useOrderedProducts(orderId);

  return (
    <Container>
      <Text>Here's what you ordered:</Text>

      <Items>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {orderedProducts?.map(({ id, order, name, quantity, price, image }) => (
            <tr key={id}>
              <td>
                <Item>
                  <StyledLink to={""}>
                    <img src={image} alt={`${name} product photo`} />
                  </StyledLink>
                  <p>{name}</p>
                </Item>
              </td>
              <td>{quantity}</td>
              <td>${price}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th colSpan={2}>Shipping:</th>
            <td>$8</td>
          </tr>
          <tr>
            <th colSpan={2}>Total:</th>
            <td>
              <span>${orderedProducts?.reduce((acc, { price, quantity }) => acc + price * quantity, 0)}</span>
            </td>
          </tr>
        </tfoot>
      </Items>
    </Container>
  );
};
