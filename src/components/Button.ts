import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { media } from "../styles/helpers";

type ButtonProps = {
  variation?: keyof typeof variations;
  block?: boolean;
};

const variations = {
  primary: css`
    color: ${({ theme }) => theme.colors.text.light};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
  `,

  secondary: css`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accent.one};
    box-shadow: ${({ theme }) => theme.shadows.md};
  `,
};

const styles = css<ButtonProps>`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
  text-transform: capitalize;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: opacity 0.3s, transform 0.3s;

  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ variation }) => variations[variation || "primary"]}

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.6;
  }

  ${media("sm")} {
    padding: 1.6rem 4rem;
    font-size: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const Button = styled.button<ButtonProps>`
  ${styles}
`;

export const LinkButton = styled(Link)<ButtonProps>`
  ${styles}
`;
