import { useProducts } from "../../../hooks/useProducts";
import { useWindowSize } from "../../../hooks/useWindowSize";

import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { LinkButton } from "../../../components/Button";
import { ProductItem, ProductItemSkeleton } from "../../../components/ProductItem/ProductItem";
import { Container, ProductsContainer } from "./Products.styled";

import { breakpoints } from "../../../constants/breakpoints";

import { productsSectionData } from "../../../data/home";

export const Products = () => {
  const { products, isLoading } = useProducts();
  const { width } = useWindowSize();

  const isMobile = width < breakpoints.xs;

  return (
    <Section>
      <SectionTitle
        title={productsSectionData.sectionTitle}
        subtitle={productsSectionData.sectionSubtitle}
        align={isMobile ? "center" : "start"}
      />

      <ProductsContainer>
        {isLoading
          ? [...Array(8).keys()].map(() => <ProductItemSkeleton key={crypto.randomUUID()} />)
          : products?.map(
              (product) =>
                product.display && (
                  <ProductItem {...product} isNew={product.new} image={product.images[0]} key={product.id} />
                )
            )}
      </ProductsContainer>

      <Container>
        <LinkButton to="/products">{productsSectionData.button}</LinkButton>
      </Container>
    </Section>
  );
};
