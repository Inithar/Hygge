import { Text } from "../Text";
import { Heading } from "../Heading";
import { StyledSectionTitle } from "./SectionTitle.styled";

export type AlignOption = "start" | "center" | "end";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  align?: AlignOption;
};

export const SectionTitle = ({ title, subtitle, align = "start" }: SectionTitleProps) => (
  <StyledSectionTitle align={align}>
    <Text fontSize="sm" fontFamily="montserratSemiBold" color="secondary" align={align}>
      - {subtitle}
    </Text>
    <Heading as="h2">{title}</Heading>
  </StyledSectionTitle>
);
