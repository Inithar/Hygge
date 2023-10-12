import { useParams } from "react-router-dom";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { useProductFeatures } from "../../../hooks/api/useProductFeatures";

import { SpinnerContainer } from "../Product.styled";
import { Spinner } from "../../../components/Spinner";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Feature } from "../../../components/Feature/Feature";
import { Container, StyledSection } from "./Features.styled";

import { breakpoints } from "../../../constants/breakpoints";

export const Features = () => {
  const { id } = useParams();
  const { features, isLoading } = useProductFeatures(Number(id));

  const { width } = useWindowSize();
  const isDesktop = width >= breakpoints.lg;

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner size="lg" />
      </SpinnerContainer>
    );
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
