import styled, { css } from "styled-components";

import { BorderRadius, Color, FontSize, media, rgba, setColor } from "../../styles/helpers";
import { theme } from "../../styles/theme";

export type BadgeColor = keyof typeof availableColors;

export type StyledBadgeProps = {
  size?: keyof typeof sizes;
  color: BadgeColor;
  solid?: boolean;
};

const availableColors = {
  green: "primary",
  blue: "secondary",
  yellow: "tertiaryOne",
  pink: "tertiaryTwo",
  red: "accentTwo",
};

const setSizeValues = (padding: string, fontSize: FontSize, borderRadius: BorderRadius) => css`
  padding: ${padding};
  font-size: ${({ theme }) => theme.fontSizes[fontSize]};
  border-radius: ${({ theme }) => theme.borderRadius[borderRadius]};
`;

const sizes = {
  sm: setSizeValues("0.8rem 1.6rem", "xs", "sm"),

  md: css`
    ${setSizeValues("0.8rem 1.6rem", "xs", "sm")}

    ${media("sm")} {
      ${setSizeValues("1.2rem 3.2rem", "lg", "md")}
    }
  `,

  lg: css`
    ${setSizeValues("1.2rem 2.4rem", "sm", "sm")}

    ${media("sm")} {
      ${setSizeValues("1.2rem 3.2rem", "lg", "md")}
    }
  `,
};

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-block;
  font-family: ${theme.fontFamilies.montserrat.bold};
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  ${({ size }) => sizes[size || "sm"]};

  ${({ color, solid }) => css`
    color: ${setColor(solid ? "basicWhite" : (availableColors[color] as Color))};
    background-color: ${rgba(setColor(availableColors[color] as Color), solid ? 1 : 0.1)};
    border: ${solid ? `0.2rem solid ${setColor("basicWhite")}` : "none"};
  `}
`;
