import { Heading } from "../Heading";
import { Text } from "../Text";
import { StyledFeature, Container, IconBox } from "./Feature.styled";

export type AlignOption = "start" | "center";

type FeatureProps = {
  icon: string;
  name: string;
  description: string;
  align?: AlignOption;
};

export const Feature = ({ icon, name, description, align = "start" }: FeatureProps) => (
  <StyledFeature align={align}>
    <IconBox>
      <img src={icon} alt="icon" />
    </IconBox>

    <Container align={align}>
      <Heading as="h4">{name}</Heading>
      <Text align={align}>{description}</Text>
    </Container>
  </StyledFeature>
);
