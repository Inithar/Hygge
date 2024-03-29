import { useParams } from "react-router-dom";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { useRelatedProducts } from "../../../hooks/api/useRelatedProducts";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Slider } from "../../../components/Slider/Slider";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import { Error } from "../../../components/Error/Error";
import { Loader } from "../Product.styled";
import { ProductContainer, StyledSection } from "./RelatedProducts.styled";

import { BREAKPOINTS } from "../../../constants/breakpoints";

const sliderSettings = {
  className: "slider variable-width",
  arrows: true,
  accessibility: true,
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  swipeToSlide: true,
  adaptiveHeight: true,
};

export const RelatedProducts = () => {
  const { id } = useParams();
  const { relatedProducts, isLoading, error } = useRelatedProducts(Number(id));

  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.xs;

  if (isLoading) {
    return <Loader />;
  }

  if (!relatedProducts || error) {
    return <Error />;
  }

  return (
    <StyledSection>
      <SectionTitle title="Related Products" subtitle="Explore More" align={isMobile ? "center" : "start"} />

      <Slider settings={sliderSettings} gap="4rem">
        {relatedProducts?.map((product) => (
          <ProductContainer key={product.id}>
            <ProductItem {...product} createdAt={product.created_at} image={product.images[0]} />
          </ProductContainer>
        ))}
      </Slider>
    </StyledSection>
  );
};
