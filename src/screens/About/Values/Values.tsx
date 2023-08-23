import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Feature } from "../../../components/Feature/Feature";
import { Container, ValueBox } from "./Values.styled";

import { values } from "../../../data/about";

export const Values = () => (
  <Section>
    <SectionTitle title="Our Core Values" subtitle="Company Values" align="center" margin />

    <Container>
      {values.map((value) => (
        <ValueBox key={crypto.randomUUID()}>
          <Feature {...value} align="center" />
        </ValueBox>
      ))}
    </Container>
  </Section>
);
