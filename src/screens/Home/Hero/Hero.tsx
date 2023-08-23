import { LinkButton } from "../../../components/Button";
import { Picture } from "../../../components/Picture";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { StyledSection, Details, PictureContainer } from "./Hero.styled";

export const Hero = () => (
  <StyledSection>
    <Details>
      <SectionTitle title="We Offer the Best Products for your Skin" subtitle="Skincare Products" />
      <LinkButton to="/products" aria-label="Shop Now - Link to products page">
        Shop Now
      </LinkButton>
    </Details>

    <PictureContainer>
      <Picture
        src="/images/home/hero-mobile.png"
        alt="Skin care products"
        sources={[{ srcSet: "/images/home/hero-desktop.png", breakpoint: "xs" }]}
      />
    </PictureContainer>
  </StyledSection>
);
