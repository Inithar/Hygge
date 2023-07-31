import styled, { css } from "styled-components";

import { Color, FontFamily, setColor, setFontFamily } from "../styles/helpers";
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

const setFontSize = (smallScreen: string, mediumScreen?: string) => css`
  font-size: ${smallScreen};

  ${({ theme }) => theme.media.md} {
    font-size: ${mediumScreen};
  }
`;

const fontSizes = {
  xs: setFontSize(xs),
  sm: setFontSize(sm),
  md: setFontSize(md, lg),
  lg: setFontSize(lg, xl),
  xl: setFontSize(xl, xxl),
};

export const Text = styled.p<TextProps>`
  text-align: ${({ align }) => align ?? "start"};
  color: ${({ color }) => setColor(color ?? "textDark")};
  font-family: ${({ fontFamily }) => setFontFamily(fontFamily ?? "montserratRegular")};

  ${({ fontSize }) => fontSizes[fontSize ?? "md"]}
`;
