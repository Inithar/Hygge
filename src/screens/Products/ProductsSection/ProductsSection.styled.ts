import styled, { css } from "styled-components";
import { media } from "../../../styles/helpers";

type FiltersProps = {
  isActive: boolean;
};

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  & > div:last-of-type > div > span {
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media("xs")} {
      width: 16rem;
    }

    ${media("sm")} {
      width: 19rem;
    }

    ${media("md")} {
      width: 12rem;
    }

    ${media("lg")} {
      width: 19rem;
    }
  }
`;

export const FiltersButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  padding: 1.2rem 1.4rem;
  max-width: fit-content;
  background-color: transparent;

  ${({ theme: { fontSizes, fontFamilies, colors, borderRadius, shadows } }) => css`
    font-size: ${fontSizes.sm};
    font-family: ${fontFamilies.montserrat.semiBold};
    border: 0.2rem solid ${colors.accent.one};
    border-radius: ${borderRadius.sm};
    box-shadow: ${shadows.md};
  `}

  & > svg {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    transition: transform 0.3s;
    transform: rotate(${({ isActive }) => (isActive ? "180deg" : "0deg")});
  }

  ${media("sm")} {
    gap: 3.2rem;
    padding: 1.6rem 2.2rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};

    & > svg {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }

  ${media("md")} {
    display: none;
  }
`;

export const Filters = styled.div<FiltersProps>`
  position: absolute;
  top: 4.8rem;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem 2.6rem;
  margin-left: -2.4rem;
  width: calc(100% + 2.4rem * 2);
  background-color: white;
  z-index: 100;

  ${media("sm")} {
    top: 6.6rem;
  }

  ${media("md")} {
    position: static;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    width: auto;

    & > div {
      width: 22rem;
    }
  }

  ${media("lg")} {
    gap: 3.2rem;
  }
`;

export const SelectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 5.6rem;

  & > div {
    margin-top: 2.4rem;
  }

  ${media("sm")} {
    margin-bottom: 6.4rem;
  }

  ${media("md")} {
    & > div {
      margin-top: 3.2rem;
    }
  }

  ${media("xl")} {
    margin-bottom: 7.2rem;
  }
`;
