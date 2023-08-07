import { LinkButton } from "../../../components/Button";
import { Picture } from "../../../components/Picture";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { StyledSection, Details, PictureContainer } from "./Hero.styled";

import { heroSectionData } from "../../../data/home";

export const Hero = () => (
  <StyledSection>
    <Details>
      <SectionTitle title={heroSectionData.sectionTitle} subtitle={heroSectionData.sectionSubtitle} />
      <LinkButton to="/products" aria-label="Shop Now - Link to products page">
        Shop Now
      </LinkButton>
    </Details>

    <PictureContainer>
      <Picture
        src={heroSectionData.img.mobile}
        alt={heroSectionData.img.alt}
        sources={[{ srcSet: heroSectionData.img.desktop, breakpoint: "xs" }]}
      />
    </PictureContainer>
  </StyledSection>
);
