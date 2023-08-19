import { useWindowSize } from "../../../hooks/useWindowSize";

import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { LinkButton } from "../../../components/Button";
import { Products as ProductsGrid } from "../../../components/Products/Products";
import { Container } from "./Products.styled";

import { breakpoints } from "../../../constants/breakpoints";
import { productsSectionData } from "../../../data/home";

export const Products = () => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoints.xs;

  return (
    <Section>
      <SectionTitle
        title={productsSectionData.sectionTitle}
        subtitle={productsSectionData.sectionSubtitle}
        align={isMobile ? "center" : "start"}
        margin
      />

      <ProductsGrid />

      <Container>
        <LinkButton to="/products">{productsSectionData.button}</LinkButton>
      </Container>
    </Section>
  );
};
