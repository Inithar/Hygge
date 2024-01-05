import { useParams } from "react-router-dom";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { useProductFeatures } from "../../../hooks/api/useProductFeatures";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Feature } from "../../../components/Feature/Feature";
import { Error } from "../../../components/Error/Error";
import { Loader } from "../Product.styled";
import { Container, StyledSection } from "./Features.styled";

import { BREAKPOINTS } from "../../../constants/breakpoints";

export const Features = () => {
  const { id } = useParams();
  const { features, isLoading, error } = useProductFeatures(Number(id));

  const { width } = useWindowSize();
  const isDesktop = width >= BREAKPOINTS.lg;

  if (isLoading) {
    return <Loader />;
  }

  if (!features || error) {
    return <Error />;
  }

  return (
    <StyledSection>
      <SectionTitle title="Explore the Features" subtitle="Product Features" align={isDesktop ? "start" : "center"} />

      <Container>
        {features?.map(({ feature }) => (
          <Feature {...feature} key={feature.id} align={isDesktop ? "start" : "center"} />
        ))}
      </Container>
    </StyledSection>
  );
};
