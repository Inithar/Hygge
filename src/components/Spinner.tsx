import styled, { css, keyframes } from "styled-components";
import { rgba } from "../styles/helpers";

type SpinnerTypes = {
  size?: keyof typeof sizes;
};

const setSize = (dimension: string, borderWidth: string) => css`
  height: ${dimension};
  width: ${dimension};
  border-width: ${borderWidth};
`;

const sizes = {
  sm: setSize("4rem", "0.6rem"),
  md: setSize("8rem", "1rem"),
  lg: setSize("16rem", "1.4rem"),
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<SpinnerTypes>`
  margin-inline: auto;
  border-style: solid;
  border-color: ${({ theme }) => rgba(theme.colors.primary, 0.24)};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;

  ${({ size }) => sizes[size ?? "sm"]}
`;
