import { Picture } from "../../../components/Picture";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Container, StyledSection } from "./Hero.styled";

import { heroSectionData } from "../../../data/about";

export const Hero = () => (
  <StyledSection>
    <SectionTitle title={heroSectionData.sectionTitle} subtitle={heroSectionData.sectionSubtitle} />

    <Container>
      <Picture
        src={heroSectionData.img.mobile}
        alt={heroSectionData.img.alt}
        sources={[{ srcSet: heroSectionData.img.desktop, breakpoint: "xs" }]}
      />
    </Container>
  </StyledSection>
);
