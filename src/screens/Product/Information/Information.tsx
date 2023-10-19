import toast from "react-hot-toast";
import { useState } from "react";

import { useUser } from "../../../hooks/api/useUser";
import { useCart } from "../../../hooks/context/useCart";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useAddFavoriteProduct } from "../../../hooks/api/useAddFavoriteProduct";

import { Counter } from "../../../components/Counter/Counter";
import { Button } from "../../../components/Button";
import { Badge } from "../../../components/Badge/Badge";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Box, Container, Price, Old, Current, Controls, Icon } from "./Information.styled";

import { PopulateProduct } from "../../../types/collection";
import { breakpoints } from "../../../constants/breakpoints";

export const Information = ({ id, name, category, sale, price, images }: PopulateProduct) => {
  const { width } = useWindowSize();
  const { addToCart } = useCart();
  const { addFavoriteProduct } = useAddFavoriteProduct();
  const { user } = useUser();

  const [qty, setQty] = useState(1);

  const currentPrice = sale ? Math.floor(((100 - sale) / 100) * price) : price;

  function handleAddToCart() {
    addToCart({ id, name, image: images[0], currentPrice, oldPrice: sale ? price : undefined, qty });
    setQty(1);

    toast.success("Product has been added to the cart");
  }

  return (
    <Container>
      <SectionTitle title={name} subtitle="Selling fast" align={width < breakpoints.xl ? "center" : "start"} />

      <Box>
        <Badge color={category.color} size="lg">
          {category.name}
        </Badge>
        <Price>
          <Old isDisplay={Boolean(sale)}>${price}</Old>
          <Current>${currentPrice}</Current>
        </Price>
      </Box>

      <Controls>
        <Counter value={qty} onChange={(value) => setQty(value)} min={1} max={99} />

        <div>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
          <Icon onClick={() => addFavoriteProduct({ customerId: user!.id, productId: id })}>
            <img src="/icons/heart.svg" alt="Heart icon" />
          </Icon>
        </div>
      </Controls>
    </Container>
  );
};
