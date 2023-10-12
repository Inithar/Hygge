import { Icon } from "../Icon/Icon";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { StyledFeature, Container } from "./Feature.styled";

export type AlignOption = "start" | "center";

type FeatureProps = {
  icon: string;
  name: string;
  description: string;
  align?: AlignOption;
};

export const Feature = ({ icon, name, description, align = "start" }: FeatureProps) => (
  <StyledFeature align={align}>
    <Icon src={icon} iconSize="lg" paddingSize="md" variation="fill" />

    <Container align={align}>
      <Heading as="h4">{name}</Heading>
      <Text fontSize="lg" align={align}>
        {description}
      </Text>
    </Container>
  </StyledFeature>
);
