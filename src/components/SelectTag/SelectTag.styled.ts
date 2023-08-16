import styled, { css } from "styled-components";
import { media, rgba } from "../../styles/helpers";

export const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0 1.2rem 1.4rem;
  width: fit-content;
  transition: border-bottom-color 0.3s, border-radius 0.3s;

  ${({ theme: { fontSizes, fontFamilies, borderRadius, colors } }) => css`
    background-color: ${colors.accent.one};
    border-radius: ${borderRadius.sm};

    span {
      font-size: ${fontSizes.sm};
      font-family: ${fontFamilies.montserrat.semiBold};
    }
  `}

  ${media("sm")} {
    padding: 1.6rem 0 1.6rem 2.2rem;

    ${({ theme: { fontSizes, borderRadius } }) => css`
      border-radius: ${borderRadius.md};

      span {
        font-size: ${fontSizes.lg};
      }
    `};
  }
`;

export const DeleteButton = styled.button`
  padding: 1.2rem 1.4rem;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: 0;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => rgba(theme.colors.accent.two, 0.8)};
  }

  ${media("sm")} {
    padding: 1.6rem 2.2rem;
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;
