import { useOrderedProducts } from "../../hooks/api/useOrderedProducts";

import { Text } from "../Text";
import { Spinner } from "../Spinner";
import { Items, Item, ImageContainer, Container, SpinnerWrapper } from "./OrderItems.styled";

import { SHIPPING_COST } from "../../constants/settings";

type OrderedItemsProps = {
  orderId: number;
};

export const OrderItems = ({ orderId }: OrderedItemsProps) => {
  const { orderedProducts, isLoading } = useOrderedProducts(orderId);

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner size="lg" />
      </SpinnerWrapper>
    );
  }

  if (!orderedProducts) {
    return <div>error</div>;
  }

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
          {orderedProducts.map(({ id, name, quantity, price, image }) => (
            <tr key={id}>
              <td>
                <Item>
                  <ImageContainer>
                    <img src={image} alt={`${name} product photo`} />
                  </ImageContainer>
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
              <span>
                ${orderedProducts.reduce((acc, { price, quantity }) => acc + price * quantity, 0) + SHIPPING_COST}
              </span>
            </td>
          </tr>
        </tfoot>
      </Items>
    </Container>
  );
};
