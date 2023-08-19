import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Box, Container, Dot, Left, Right, StyledSection, TextContainer } from "./WhenItStarted.styled";

import { whenItStartedSectionData } from "../../../data/about";
import { Picture } from "../../../components/Picture";
import { Text } from "../../../components/Text";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { breakpoints } from "../../../constants/breakpoints";

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
        <Box>
          <Dot />
          <TextContainer>
            <Text color="primary" fontSize="lg" fontFamily="montserratSemiBold">
              Natural Ingredients Only
            </Text>
            <Text fontSize="lg">
              10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products
              using only natural ingredients, he did not even think twice.
            </Text>
          </TextContainer>
        </Box>

        <Box>
          <Dot />
          <TextContainer>
            <Text color="primary" fontSize="lg" fontFamily="montserratSemiBold">
              Natural Ingredients Only
            </Text>
            <Text fontSize="lg">
              One of our main goals from the start was to offer high quality products that would also have affordable
              prices. We just can’t believe that we have finally achieved this and now we are proud of it.
            </Text>
          </TextContainer>
        </Box>
      </Right>
    </StyledSection>
  );
};
