import { useState } from "react";
import { IoMdHeart as Heart, IoIosHeartEmpty as HeartEmpty } from "react-icons/io";

import { useUser } from "../../../hooks/api/useUser";
import { useCart } from "../../../hooks/context/useCart";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useAddFavoriteProduct } from "../../../hooks/api/useAddFavoriteProduct";
import { useDeleteFavoriteProduct } from "../../../hooks/api/useDeleteFavoriteProduct";

import { Counter } from "../../../components/Counter/Counter";
import { Badge } from "../../../components/Badge/Badge";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Box, Container, Price, Old, Current, Controls, FavoriteButton, StyledButton } from "./Information.styled";

import { PopulateProduct } from "../../../types/collection";
import { BREAKPOINTS } from "../../../constants/breakpoints";

type InformationProps = PopulateProduct & {
  isProductFavorite: boolean;
};

export const Information = ({ id, name, category, sale, price, images, isProductFavorite }: InformationProps) => {
  const { width } = useWindowSize();
  const { addToCart } = useCart();

  const { user } = useUser();
  const { addFavoriteProduct, isAdding } = useAddFavoriteProduct();
  const { deleteFavoriteProduct, isDeleting } = useDeleteFavoriteProduct();

  const [qty, setQty] = useState(1);

  const currentPrice = sale ? Math.floor(((100 - sale) / 100) * price) : price;

  function handleAddToCart() {
    addToCart({ id, name, image: images[0], currentPrice, oldPrice: sale ? price : undefined, qty });
    setQty(1);
  }

  function handleFavoriteButtonClick() {
    const data = { userId: user!.id, productId: id };
    isProductFavorite ? deleteFavoriteProduct(data) : addFavoriteProduct(data);
  }

  return (
    <Container>
      <SectionTitle title={name} subtitle="Selling fast" align={width < BREAKPOINTS.xl ? "center" : "start"} />

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
          <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>

          <FavoriteButton
            onClick={handleFavoriteButtonClick}
            disabled={isAdding || isDeleting}
            isFavorite={isProductFavorite}
          >
            {isProductFavorite ? <Heart /> : <HeartEmpty />}
          </FavoriteButton>
        </div>
      </Controls>
    </Container>
  );
};
