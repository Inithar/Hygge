import styled, { css } from "styled-components";

export type IconBoxProps = {
  paddingSize?: keyof typeof paddingSizes;
  iconSize?: keyof typeof iconSizes;
  variation?: keyof typeof variations;
};

const paddingSizes = {
  sm: "1.2rem",
  md: "1.6rem",
};

const iconSizes = {
  sm: "1.6rem",
  md: "2.4rem",
  lg: "3.2rem",
};

const variations = {
  fill: css`
    background-color: ${({ theme }) => theme.colors.accent.one};
  `,

  outline: css`
    background-color: transparent;
    border: 0.2rem solid ${({ theme }) => theme.colors.basic.black};
  `,
};

export const IconBox = styled.div<IconBoxProps>`
  display: inline-flex;
  padding: ${({ paddingSize }) => (paddingSize ? paddingSizes[paddingSize] : 0)};
  border-radius: 50%;

  ${({ variation }) => variation && variations[variation]}

  & > img {
    ${({ iconSize }) => css`
      width: ${iconSizes[iconSize ?? "sm"]};
      height: ${iconSizes[iconSize ?? "sm"]};
    `};
  }
`;
