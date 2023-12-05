import styled, { css } from "styled-components";

import { media, rgba } from "../../styles/helpers";

export const StyledProductItem = styled.div`
  position: relative;
`;

export const Container = styled.div`
  position: relative;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.2rem;
    width: 100%;
    height: 31.2rem;
    background-color: ${({ theme }) => theme.colors.accent.one};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  img {
    max-height: 100%;
  }

  ${media("md")} {
    a {
      height: 27.2rem;
    }

    img {
      transform: scale(0.8);
    }

    &:hover > button {
      opacity: 1;
    }
  }
`;

export const AddToCartBtn = styled.button`
  display: none;

  ${media("md")} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 1.2rem 2.4rem;
    min-width: 15rem;
    border: none;
    outline: 0.2rem solid transparent;
    outline-offset: 0.3rem;
    opacity: 0;
    transition: outline-color 0.3s, opacity 0.3s;

    ${({ theme }) => css`
      font-size: ${theme.fontSizes.sm};
      font-family: ${theme.fontFamilies.montserrat.semiBold};
      color: ${theme.colors.basic.white};
      background-color: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.md};
    `}

    &:hover, &:focus {
      outline-color: ${({ theme }) => theme.colors.primary};
    }

    &:focus-visible {
      opacity: 1;
    }
  }
`;

export const ProductData = styled.div`
  margin-top: 3.2rem;
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-top: 1.6rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Old = styled.p<{ isDisplay: boolean }>`
  ${({ theme, isDisplay }) => css`
    display: ${isDisplay ? "block" : "none"};
    font-size: ${theme.fontSizes.sm};
    color: ${rgba(theme.colors.text.dark, 0.24)};
  `}

  text-decoration: line-through;
`;

export const Current = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const BadgeContainer = styled.div`
  position: absolute;
  top: 2.4rem;
  right: -2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
`;

export const DetailsSkeleton = styled.div`
  margin-top: 3.2rem;

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-top: 1.6rem;
  }
`;
