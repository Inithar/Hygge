import { useState } from "react";
import { useParams } from "react-router-dom";

import { useUser } from "../../../hooks/api/useUser";
import { useProduct } from "../../../hooks/api/useProduct";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useUserFavoriteProducts } from "../../../hooks/api/useUserFavoriteProducts";

import { Loader } from "../Product.styled";
import { Information } from "../Information/Information";
import { Slider } from "../../../components/Slider/Slider";
import { Container, Images, StyledSection, Button, Figure } from "./Details.styled";

import { BREAKPOINTS } from "../../../constants/breakpoints";
import { Error } from "../../../components/Error/Error";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 600,
};

export const Details = () => {
  const { id } = useParams();
  const { width } = useWindowSize();

  const { user } = useUser();

  const { product, isLoading: isProductDataLoading } = useProduct(Number(id));
  const { favoriteProducts, isLoading: isUserFavoriteProductsLoading } = useUserFavoriteProducts(user?.id);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (isProductDataLoading || isUserFavoriteProductsLoading) {
    return <Loader />;
  }

  if (!product || !favoriteProducts) {
    return <Error />;
  }

  const mobileImageSection = (
    <Slider settings={settings}>
      {product.images.map((image) => (
        <div key={crypto.randomUUID()}>
          <Figure>
            <img src={image} alt="Product image" />
          </Figure>
        </div>
      ))}
    </Slider>
  );

  const desktopImageSection = (
    <Container>
      <Figure>
        <img src={product.images[currentPhotoIndex]} alt="Product image" />
      </Figure>

      <Images>
        {product.images.map((image, index) => (
          <Button
            isActive={index === currentPhotoIndex}
            onClick={() => setCurrentPhotoIndex(index)}
            key={crypto.randomUUID()}
          >
            <img src={image} alt="Product image" />
          </Button>
        ))}
      </Images>
    </Container>
  );

  return (
    <StyledSection>
      {width < BREAKPOINTS.xs ? mobileImageSection : desktopImageSection}

      <Information
        {...product}
        isProductFavorite={Boolean(favoriteProducts.find((favoriteProduct) => favoriteProduct.id === product.id))}
      />
    </StyledSection>
  );
};
