import { LinkButton } from "../../components/Button";
import { Heading, Image, Section, Text } from "./UnderConstruction.styled";

export const UnderConstruction = () => (
  <Section>
    <Image src="/images/under-construction.png" alt="" />
    <Heading>This page is under construction</Heading>
    <Text>We are working on it!</Text>
    <LinkButton to="/">Go to home page</LinkButton>
  </Section>
);
