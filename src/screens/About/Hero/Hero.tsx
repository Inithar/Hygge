import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Picture } from "../../../components/Picture";
import { Container } from "./Hero.styled";

export const Hero = () => (
  <Section>
    <SectionTitle title={"All About Us"} subtitle={"Learn More"} margin />

    <Container>
      <Picture
        src="/images/about/hero-mobile.png"
        alt="Cosmetics"
        sources={[{ srcSet: "/images/about/hero-desktop.png", breakpoint: "xs" }]}
      />
    </Container>
  </Section>
);
