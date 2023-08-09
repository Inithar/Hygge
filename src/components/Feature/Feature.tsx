import { Icon } from "../Icon/Icon";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { StyledFeature, Container } from "./Feature.styled";

export type AlignOption = "start" | "center";

type FeatureProps = {
  icon: string;
  title: string;
  text: string;
  align?: AlignOption;
};

export const Feature = ({ icon, title, text, align = "start" }: FeatureProps) => (
  <StyledFeature align={align}>
    <Icon src={icon} iconSize="lg" paddingSize="md" variation="fill" />

    <Container align={align}>
      <Heading as="h4">{title}</Heading>
      <Text fontSize="lg" align={align}>
        {text}
      </Text>
    </Container>
  </StyledFeature>
);
