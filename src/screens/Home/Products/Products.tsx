import { useWindowSize } from "../../../hooks/useWindowSize";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { LinkButton } from "../../../components/Button";
import { Products as ProductsGrid } from "../../../components/Products/Products";
import { Container, StyledSection } from "./Products.styled";

import { breakpoints } from "../../../constants/breakpoints";

import { productsSectionData } from "../../../data/home";

export const Products = () => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.xs;

  return (
    <StyledSection>
      <SectionTitle
        title={productsSectionData.sectionTitle}
        subtitle={productsSectionData.sectionSubtitle}
        align={isMobile ? "center" : "start"}
      />

      <ProductsGrid />

      <Container>
        <LinkButton to="/products">{productsSectionData.button}</LinkButton>
      </Container>
    </StyledSection>
  );
};
