import styled from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  .slick-list {
    max-height: 50rem;
  }

  .slider-controls {
    top: unset;
    bottom: -9rem;
  }

  ${media("xs")} {
    .slick-list {
      max-height: unset;
    }
  }

  ${media("xl")} {
    display: flex;
    align-items: center;
    gap: 6rem;
  }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;

  ${media("md")} {
    grid-template-columns: 15.2rem 50.4rem;
    justify-content: center;
    gap: 2.4rem;

    & > figure {
      grid-column: 2 / 3;
    }

    & > div {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.2rem;
  width: 100%;
  height: 31.2rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  ${media("xs")} {
    width: 50.4rem;
    height: 50.4rem;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 2.4rem;

  ${media("md")} {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const Button = styled.button<{ isActive: boolean }>`
  display: grid;
  place-items: center;
  width: 15.2rem;
  height: 15.2rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0.2rem solid ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.accent.one)};
  transition: border-color 0.3s;

  & > img {
    max-width: 12rem;
    max-height: 10rem;
  }
`;
