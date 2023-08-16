import { css, keyframes } from "styled-components";

import { theme } from "./theme";
import { transformObject } from "../utils/transformObject";
import { Breakpoint } from "../constants/breakpoints";

export type Color = keyof typeof availableColors;
export type FontFamily = keyof typeof availableFonts;
export type FontSize = keyof typeof theme.fontSizes;
export type BorderRadius = keyof typeof theme.borderRadius;

const availableColors = transformObject(theme.colors);
const availableFonts = transformObject(theme.fontFamilies);

const skeletonLoading = keyframes`
  0% {
    background-color: #CBCFD1;
  }

  100% {
    background-color: #F0F3F5;
  }
`;

export const skeletonAnimation = css`
  opacity: 0.7;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export function media(breakpoint: Breakpoint) {
  return theme.media[breakpoint];
}

export function setColor(color: Color) {
  return availableColors[color];
}

export function setFontFamily(font: FontFamily) {
  return availableFonts[font];
}

export function setFontSize(fontSize: { smallScreen: string; mediumScreen?: string; largeScreen?: string }) {
  return css`
    font-size: ${fontSize.smallScreen};

    ${media("sm")} {
      font-size: ${fontSize.mediumScreen};
    }

    ${media("md")} {
      font-size: ${fontSize.largeScreen};
    }
  `;
}

export function rgba(hex: string, alpha: number) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, (r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
  }
}
