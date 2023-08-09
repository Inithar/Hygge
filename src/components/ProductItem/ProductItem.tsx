import { Link } from "react-router-dom";

import { Badge } from "../Badge/Badge";
import { BadgeColor } from "../Badge/Badge.styled";
import { Skeleton } from "../Skeleton";
import {
  Container,
  AddToCartBtn,
  StyledProductItem,
  ProductData,
  Name,
  Details,
  Price,
  Old,
  Current,
  BadgeContainer,
  DetailsSkeleton,
} from "./ProductItem.styled";

type ProductProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  sale: number | null;
  isNew: boolean;
  category: {
    name: string;
    color: string;
  };
};

export const ProductItem = ({ id, name, image, price, sale, category, isNew }: ProductProps) => {
  const currentPrice = sale ? Math.floor(((100 - sale) / 100) * price) : price;

  return (
    <StyledProductItem>
      <BadgeContainer>
        {isNew && (
          <Badge solid color="green">
            NEW IN
          </Badge>
        )}

        {sale && <Badge solid color="red">{`${sale.toString()}% OFF`}</Badge>}
      </BadgeContainer>

      <Container>
        <Link to={`/products/${id}`} aria-label={`Link to ${name} product details`}>
          <img src={image} alt={`Picture of ${name} product`} />
        </Link>

        <AddToCartBtn aria-label={`Add ${name} to cart`}>Add to Cart</AddToCartBtn>
      </Container>

      <ProductData>
        <Link to={`/products/${id}`}>
          <Name>{name}</Name>
        </Link>

        <Details>
          <Badge color={category.color as BadgeColor}>{category.name}</Badge>
          <Price>
            <Old isDisplay={Boolean(sale)}>${price}</Old>
            <Current>${currentPrice}</Current>
          </Price>
        </Details>
      </ProductData>
    </StyledProductItem>
  );
};

export const ProductItemSkeleton = () => (
  <div>
    <Skeleton width={"100%"} height={"31.2rem"} borderRadius="lg" />

    <DetailsSkeleton>
      <Skeleton width="55%" height="3.2rem" />

      <div>
        <Skeleton width="40%" height="3.7rem" borderRadius="sm" />
        <Skeleton width="18%" height="2.4rem" />
      </div>
    </DetailsSkeleton>
  </div>
);
