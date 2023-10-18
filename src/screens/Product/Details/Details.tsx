import { useState } from "react";
import { useParams } from "react-router-dom";

import { useProduct } from "../../../hooks/api/useProduct";
import { useWindowSize } from "../../../hooks/useWindowSize";

import { SpinnerContainer } from "../Product.styled";
import { Information } from "../Information/Information";
import { Spinner } from "../../../components/Spinner";
import { Slider } from "../../../components/Slider/Slider";
import { Container, Images, StyledSection, Button, Figure } from "./Details.styled";

import { breakpoints } from "../../../constants/breakpoints";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 600,
};

export const Details = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct(Number(id));

  const { width } = useWindowSize();
  const isMobile = width < breakpoints.xs;

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner size="lg" />
      </SpinnerContainer>
    );
  }

  if (!product) {
    return <div>error</div>;
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
      {isMobile ? mobileImageSection : desktopImageSection}

      <Information {...product} />
    </StyledSection>
  );
};
