import { LinkButton } from "../../../../components/Button";
import { Picture } from "../../../../components/Picture";
import { SectionTitle } from "../../../../components/SectionTitle/SectionTitle";
import { StyledSection, Details, PictureContainer } from "./Hero.styled";

import { hero } from "../../../../data/home";

export const Hero = () => (
  <StyledSection>
    <Details>
      <SectionTitle title={hero.sectionTitle} subtitle={hero.sectionSubtitle} />
      <LinkButton to="/products" aria-label="Shop Now - Link to products page">
        Shop Now
      </LinkButton>
    </Details>

    <PictureContainer>
      <Picture src={hero.img.mobile} alt={hero.img.alt} sources={[{ srcSet: hero.img.desktop, breakpoint: "xs" }]} />
    </PictureContainer>
  </StyledSection>
);
