import { css } from "styled-components";

import { theme } from "./theme";
import { transformObject } from "../utils/transformObject";
import { Breakpoint } from "../constants/breakpoints";

export type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type Color = keyof typeof availableColors;
export type FontFamily = keyof typeof availableFonts;

const availableColors = transformObject(theme.colors);
const availableFonts = transformObject(theme.fontFamilies);

export const media = (breakpoint: Breakpoint) => theme.media[breakpoint];

export const setColor = (color: Color) => availableColors[color];
export const setFontFamily = (font: FontFamily) => availableFonts[font];
export const setPositionValue = (value: string | undefined) => (value === undefined ? "unset" : value);

export const setPosition = (position: Position) => css`
  top: ${setPositionValue(position?.top)};
  right: ${setPositionValue(position?.right)};
  bottom: ${setPositionValue(position?.bottom)};
  left: ${setPositionValue(position?.left)};
`;

export const setFontSize = (fontSize: { smallScreen: string; mediumScreen?: string; largeScreen?: string }) => css`
  font-size: ${fontSize.smallScreen};

  ${media("sm")} {
    font-size: ${fontSize.mediumScreen};
  }

  ${media("md")} {
    font-size: ${fontSize.largeScreen};
  }
`;

export const rgba = (hex: string, alpha: number) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, (r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
  }
};