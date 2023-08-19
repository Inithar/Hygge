import { useWindowSize } from "../../../hooks/useWindowSize";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Text } from "../../../components/Text";
import { Picture } from "../../../components/Picture";
import { Box, Container, Dot, Left, Right, StyledSection, TextContainer } from "./WhenItStarted.styled";

import { breakpoints } from "../../../constants/breakpoints";
import { whenItStartedSectionData } from "../../../data/about";

export const WhenItStarted = () => {
  const { width } = useWindowSize();
  const { sectionTitle, sectionSubtitle, img } = whenItStartedSectionData;

  return (
    <StyledSection>
      <Left>
        <SectionTitle
          title={sectionTitle}
          subtitle={sectionSubtitle}
          align={width < breakpoints.lg ? "center" : "start"}
          margin
        />

        <Container>
          <Picture
            src={img.mobile}
            alt={img.alt}
            sources={[
              { srcSet: img.desktop, breakpoint: "lg" },
              { srcSet: img.tablet, breakpoint: "xs" },
            ]}
          />
        </Container>
      </Left>

      <Right>
        {whenItStartedSectionData.reasons.map(({ title, body }) => (
          <Box key={crypto.randomUUID()}>
            <Dot />
            <TextContainer>
              <Text color="primary" fontSize="lg" fontFamily="montserratSemiBold">
                {title}
              </Text>
              <Text fontSize="lg">{body}</Text>
            </TextContainer>
          </Box>
        ))}
      </Right>
    </StyledSection>
  );
};
