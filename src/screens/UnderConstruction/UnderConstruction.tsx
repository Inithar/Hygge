import { LinkButton } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Section } from "./UnderConstruction.styled";

export const UnderConstruction = () => (
  <Section>
    <img src="/images/under-construction.jpg" />
    <Heading as="h1">
      <span>Coming soon...</span>
      Page is under construction
    </Heading>
    <LinkButton to="/">Go to home page</LinkButton>
  </Section>
);
