import styled from "styled-components";

import { Section } from "../Section";
import { media } from "../../styles/helpers";

export const StyledSection = styled(Section)`
  padding-bottom: 9.3rem;

  .slider-controls {
    top: unset;
    bottom: -9rem;
  }

  ${media("xs")} {
    & > div:first-child {
      margin-inline: auto;
      max-width: 52rem;
    }
  }

  ${media("sm")} {
    .slider-controls {
      bottom: -9.8rem;
    }
  }

  ${media("md")} {
    display: grid;
    grid-template-columns: 1fr 40rem;
    align-items: center;
    gap: 12.8rem;
    padding: 12.4rem 4.8rem;
    background-color: ${({ theme }) => theme.colors.accent.one};
    border-radius: ${({ theme }) => theme.borderRadius.xl};

    .slick-dots {
      justify-content: start;
    }

    .slider-controls {
      left: 0;
      transform: unset;

      button {
        border: 0.2rem solid ${({ theme }) => theme.colors.basic.black};
      }
    }
  }

  ${media("lg")} {
    padding: 15rem 9.6rem;

    h2 {
      max-width: 50rem;
    }
  }
`;

export const Review = styled.div`
  margin-top: 5.6rem;

  p {
    margin-top: 1.6rem;
    text-align: center;

    &:first-of-type {
      margin-top: 3.2rem;
    }
  }

  ${media("sm")} {
    margin-top: 6.4rem;
  }

  ${media("md")} {
    margin-top: 0;

    p {
      text-align: start;
    }
  }
`;

export const ProfileImg = styled.img`
  margin-inline: auto;
  padding: 0.6rem;
  width: 8rem;
  height: 8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  ${media("md")} {
    margin: 0;
  }
`;
