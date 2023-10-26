import styled, { css } from "styled-components";
import { media, setFontFamily } from "../../styles/helpers";

const borderRadiusStyles = css<{ isBodyOpen: boolean }>`
  transition: border-radius 0.3s;
  border-radius: ${({ theme: { borderRadius }, isBodyOpen }) =>
    isBodyOpen ? `${borderRadius.sm} ${borderRadius.sm} 0 0` : borderRadius.sm};

  ${media("sm")} {
    border-radius: ${({ theme: { borderRadius }, isBodyOpen }) =>
      isBodyOpen ? `${borderRadius.md} ${borderRadius.md} 0 0` : borderRadius.md};
  }
`;

export const Label = styled.p`
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${media("sm")} {
    margin-bottom: 1.6rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Container = styled.div<{ isBodyOpen: boolean }>`
  position: relative;
  min-width: 16rem;
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${borderRadiusStyles}

  & > div {
    border-bottom-color: ${({ theme, isBodyOpen }) => (isBodyOpen ? "transparent" : theme.colors.accent.one)};
    transition: border-bottom-color 0.3s;

    ${borderRadiusStyles}

    & > svg {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
      transition: transform 0.3s;
      transform: rotate(${({ isBodyOpen }) => (isBodyOpen ? "180deg" : "0deg")});
    }
  }

  & > ul {
    visibility: ${({ isBodyOpen }) => (isBodyOpen ? "visible" : "hidden")};
  }

  ${media("sm")} {
    & > div > svg {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  padding: 1.2rem 1.4rem;
  cursor: pointer;
  white-space: nowrap;

  ${({ theme: { fontSizes, fontFamilies, colors } }) => css`
    font-size: ${fontSizes.sm};
    font-family: ${fontFamilies.montserrat.semiBold};
    border: 0.2rem solid ${colors.accent.one};
  `}

  ${media("sm")} {
    gap: 3.2rem;
    padding: 1.6rem 2.2rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Body = styled.ul`
  position: absolute;
  top: calc(100% - 0.2rem);
  padding: 1rem 1.4rem;
  width: 100%;
  border-width: 0 0.2rem 0.2rem;
  border-style: solid;
  z-index: 999;

  ${({ theme: { colors, borderRadius } }) => css`
    background-color: ${colors.basic.white};
    border-color: ${colors.accent.one};
    border-radius: 0 0 ${borderRadius.sm} ${borderRadius.sm};
  `}

  ${media("sm")} {
    padding: 1.6rem 2.2rem;
    border-radius: ${({ theme: { borderRadius } }) => `0 0 ${borderRadius.md} ${borderRadius.md}`};
  }
`;

export const Option = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ isSelected }) => setFontFamily(isSelected ? "montserratSemiBold" : "montserratRegular")};
  cursor: pointer;
  transition: color 0.3s, font-family 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:last-child) {
    padding-bottom: 1.6rem;
  }

  svg {
    flex-shrink: 0;
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
    transition: opacity 0.3s;
  }

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};

    &:not(:last-child) {
      padding-bottom: 3.2rem;
    }
  }
`;
