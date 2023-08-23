import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Feature } from "../../../components/Feature/Feature";
import { Container, Features } from "./WhyUs.styled";

import { features } from "../../../data/home";

export const WhyUs = () => (
  <Section>
    <SectionTitle title="Why People Choose Us" subtitle="Why Us" align="center" margin />

    <Container>
      {features.map((feature) => (
        <Features key={crypto.randomUUID()}>
          <Feature {...feature} align="center" />
        </Features>
      ))}
    </Container>
  </Section>
);
