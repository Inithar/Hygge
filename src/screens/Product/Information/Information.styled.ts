import styled, { css } from "styled-components";
import { media, rgba } from "../../../styles/helpers";

export const Container = styled.div`
  margin-top: 14.4rem;

  ${media("xs")} {
    margin-top: 6.4rem;
  }

  ${media("xl")} {
    margin-top: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin-top: 3.6rem;

  ${media("xl")} {
    justify-content: start;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
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
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  margin-top: 4rem;

  & > div:last-child {
    display: flex;
    gap: 3.6rem;
  }

  ${media("xs")} {
    flex-direction: row;
    justify-content: center;
  }

  ${media("xl")} {
    gap: 2.4rem;
    margin-top: 4.8rem;

    & > div:last-child {
      gap: 2.4rem;
    }
  }
`;

export const Icon = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1.2rem;
  background-color: transparent;
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  ${media("sm")} {
    padding: 1.6rem;

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;
