import styled from "styled-components";

import { theme } from "../styles/theme";
import { setFontSize } from "../styles/helpers";

const { fontSizes } = theme;

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};

  ${(props) => {
    switch (props.as) {
      case "h1":
        return setFontSize({ smallScreen: fontSizes["3xl"], mediumScreen: fontSizes["4xl"] });

      case "h2":
        return setFontSize({ smallScreen: fontSizes["3xl"], mediumScreen: fontSizes["4xl"] });

      case "h3":
        return setFontSize({ smallScreen: fontSizes["2xl"], largeScreen: fontSizes["3xl"] });

      case "h4":
        return setFontSize({ smallScreen: fontSizes.lg, largeScreen: fontSizes["2xl"] });

      default:
        throw new Error(`Unknown heading - ${props.as}`);
    }
  }}
`;
