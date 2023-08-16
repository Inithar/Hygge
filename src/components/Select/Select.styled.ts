import styled, { css } from "styled-components";
import { media, setFontFamily } from "../../styles/helpers";

export const Container = styled.div`
  position: relative;
  min-width: 16rem;
`;

export const Head = styled.div<{ isBodyOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  padding: 1.2rem 1.4rem;
  cursor: pointer;
  transition: border-bottom-color 0.3s, border-radius 0.3s;
  white-space: nowrap;

  ${({ theme: { fontSizes, fontFamilies, borderRadius, colors }, isBodyOpen }) => css`
    font-size: ${fontSizes.sm};
    font-family: ${fontFamilies.montserrat.semiBold};
    border: 2px solid ${colors.accent.one};
    border-bottom-color: ${isBodyOpen ? "transparent" : colors.accent.one};
    border-radius: ${isBodyOpen ? `${borderRadius.sm} ${borderRadius.sm} 0 0` : borderRadius.sm};
  `}

  & > img {
    transition: transform 0.3s;
    transform: rotate(${({ isBodyOpen }) => (isBodyOpen ? "180deg" : "0deg")});
  }

  ${media("sm")} {
    padding: 1.6rem 2.2rem;
    gap: 3.2rem;

    ${({ theme: { fontSizes, borderRadius }, isBodyOpen }) => css`
      font-size: ${fontSizes.lg};
      border-radius: ${isBodyOpen ? `${borderRadius.md} ${borderRadius.md} 0 0` : borderRadius.md};
    `};
  }
`;

export const Body = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 2px);
  padding: 1rem 1.4rem;
  width: 100%;
  border-width: 0 2px 2px;
  border-style: solid;
  z-index: 999;

  ${({ theme: { colors, borderRadius }, isOpen }) => css`
    visibility: ${isOpen ? "visible" : "hidden"};
    background-color: ${colors.basic.white};
    border-color: ${colors.accent.one};
    border-radius: 0 0 ${borderRadius.sm} ${borderRadius.sm};
  `}

  ${media("sm")} {
    padding: 1.6rem 2.2rem;
  }
`;

export const Option = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
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

  img {
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
