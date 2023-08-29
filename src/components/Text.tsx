import styled from "styled-components";

import { Color, FontFamily, setColor, setFontFamily, setFontSize } from "../styles/helpers";
import { theme } from "../styles/theme";

type TextProps = {
  align?: "start" | "center" | "end";
  fontSize?: keyof typeof fontSizes;
  fontFamily?: FontFamily;
  color?: Color;
};

const {
  fontSizes: { xs, sm, md, lg, xl, "2xl": xxl },
} = theme;

const fontSizes = {
  xs: setFontSize({ smallScreen: xs }),
  sm: setFontSize({ smallScreen: sm }),
  md: setFontSize({ smallScreen: md, largeScreen: lg }),
  lg: setFontSize({ smallScreen: lg, largeScreen: xl }),
  xl: setFontSize({ smallScreen: xl, largeScreen: xxl }),
};

export const Text = styled.p<TextProps>`
  text-align: ${({ align }) => align ?? "start"};
  color: ${({ color }) => setColor(color ?? "textDark")};
  font-family: ${({ fontFamily }) => setFontFamily(fontFamily ?? "montserratRegular")};

  ${({ fontSize }) => fontSizes[fontSize ?? "md"]}
`;
