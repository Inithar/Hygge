import { Feature } from "../../../components/Feature/Feature";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Container, ValueBox } from "./Values.styled";
import { StyledSection } from "../Hero/Hero.styled";

import { valuesSectionData } from "../../../data/about";

export const Values = () => (
  <StyledSection>
    <SectionTitle title={valuesSectionData.sectionTitle} subtitle={valuesSectionData.sectionSubtitle} align="center" />

    <Container>
      {valuesSectionData.values.map((value) => (
        <ValueBox key={crypto.randomUUID()}>
          <Feature {...value} align="center" />
        </ValueBox>
      ))}
    </Container>
  </StyledSection>
);
