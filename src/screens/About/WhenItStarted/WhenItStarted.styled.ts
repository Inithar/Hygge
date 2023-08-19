import styled from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  h2 {
    margin-bottom: 5.6rem;

    ${media("sm")} {
      margin-bottom: 6.4rem;
    }

    ${media("xl")} {
      margin-bottom: 7.2rem;
    }
  }

  ${media("lg")} {
    display: flex;
    gap: 12rem;
    padding-inline: 2.8rem;
  }

  ${media("xl")} {
    padding-inline: 9.6rem;
  }
`;

export const Left = styled.div`
  ${media("lg")} {
    flex-shrink: 0;
    width: 45.6rem;
  }
`;

export const Right = styled.div``;

export const Dot = styled.div`
  flex-shrink: 0;
  margin-top: 1rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Box = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 5.6rem;

  ${media("sm")} {
    margin-top: 6.4rem;
  }

  ${media("lg")} {
    &:first-child {
      margin-top: 3.2rem;
    }

    margin-top: 4.8rem;
  }
`;

export const TextContainer = styled.div`
  & > p {
    ${media("lg")} {
      font-size: 2.4rem;
    }

    &:first-child {
      margin-bottom: 1.6rem;

      ${media("md")} {
        margin-bottom: 3.2rem;
      }
    }

    &:last-child {
      line-height: 4rem;

      ${media("md")} {
        line-height: 4.8rem;
      }
    }
  }
`;

export const Container = styled.div`
  picture,
  img {
    width: 100%;
  }

  img {
    display: block;
    margin-inline: auto;
    max-width: 39rem;

    ${media("xs")} {
      max-width: none;
      max-height: 50rem;
    }

    ${media("lg")} {
      max-height: 56rem;
    }
  }
`;
