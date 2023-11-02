import { useWindowSize } from "../../../hooks/useWindowSize";

import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { LinkButton } from "../../../components/Button";
import { Products as ProductsGrid } from "../../../components/Products/Products";
import { Container } from "./Products.styled";

import { BREAKPOINTS } from "../../../constants/breakpoints";

export const Products = () => {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.xs;

  return (
    <Section>
      <SectionTitle title="Explore our Products" subtitle="Our Products" align={isMobile ? "center" : "start"} margin />

      <ProductsGrid maxNumberOfProducts={8} />

      <Container>
        <LinkButton to="/products">View All</LinkButton>
      </Container>
    </Section>
  );
};
