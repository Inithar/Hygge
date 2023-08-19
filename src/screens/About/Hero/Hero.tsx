import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Picture } from "../../../components/Picture";
import { Container } from "./Hero.styled";

import { heroSectionData } from "../../../data/about";

export const Hero = () => (
  <Section>
    <SectionTitle title={heroSectionData.sectionTitle} subtitle={heroSectionData.sectionSubtitle} margin />

    <Container>
      <Picture
        src={heroSectionData.img.mobile}
        alt={heroSectionData.img.alt}
        sources={[{ srcSet: heroSectionData.img.desktop, breakpoint: "xs" }]}
      />
    </Container>
  </Section>
);
