import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Feature } from "../../../components/Feature/Feature";
import { Container, ValueBox } from "./Values.styled";

import { valuesSectionData } from "../../../data/about";

export const Values = () => (
  <Section>
    <SectionTitle
      title={valuesSectionData.sectionTitle}
      subtitle={valuesSectionData.sectionSubtitle}
      align="center"
      margin
    />

    <Container>
      {valuesSectionData.values.map((value) => (
        <ValueBox key={crypto.randomUUID()}>
          <Feature {...value} align="center" />
        </ValueBox>
      ))}
    </Container>
  </Section>
);
