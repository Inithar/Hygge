import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Feature } from "../../../components/Feature/Feature";
import { Container, Features } from "./WhyUs.styled";

import { whyUsSectionData } from "../../../data/home";

export const WhyUs = () => (
  <Section>
    <SectionTitle
      title={whyUsSectionData.sectionTitle}
      subtitle={whyUsSectionData.sectionSubtitle}
      align="center"
      margin
    />

    <Container>
      {whyUsSectionData.features.map((feature) => (
        <Features key={crypto.randomUUID()}>
          <Feature {...feature} align="center" />
        </Features>
      ))}
    </Container>
  </Section>
);
