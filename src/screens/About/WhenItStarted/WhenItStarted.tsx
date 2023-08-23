import { useWindowSize } from "../../../hooks/useWindowSize";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Text } from "../../../components/Text";
import { Picture } from "../../../components/Picture";
import { Box, Container, Dot, Left, Right, StyledSection, TextContainer } from "./WhenItStarted.styled";

import { breakpoints } from "../../../constants/breakpoints";
import { reasons } from "../../../data/about";

export const WhenItStarted = () => {
  const { width } = useWindowSize();

  return (
    <StyledSection>
      <Left>
        <SectionTitle
          title="How and When it has All Started"
          subtitle="How it has Started"
          align={width < breakpoints.lg ? "center" : "start"}
          margin
        />

        <Container>
          <Picture
            src="/images/about/how-it-started-mobile.png"
            alt="Cosmetics"
            sources={[
              { srcSet: "/images/about/how-it-started-desktop.png", breakpoint: "lg" },
              { srcSet: "/images/about/how-it-started-tablet.png", breakpoint: "xs" },
            ]}
          />
        </Container>
      </Left>

      <Right>
        {reasons.map(({ title, body }) => (
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
