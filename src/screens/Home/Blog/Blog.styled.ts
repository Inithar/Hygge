import styled from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  .slider-controls {
    top: unset;
    bottom: -9rem;
  }

  & > div:first-child {
    margin-bottom: 5.6rem;

    ${media("sm")} {
      margin-bottom: 6.4rem;
    }

    ${media("xl")} {
      margin-bottom: 7.2rem;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem 3.2rem;

  & > a:nth-child(1),
  & > a:nth-child(6),
  & > a:nth-child(7) {
    grid-column: 1 / -1;
  }

  ${media("sm")} {
    gap: 6.4rem 4.8rem;
  }

  ${media("md")} {
    grid-template-columns: repeat(6, 1fr);
    gap: 6.4rem 5.6rem;

    & > a:nth-child(1) {
      grid-column: 1 / 5;
    }

    & > a:nth-child(2) {
      grid-column: 5 / 7;
    }

    & > a:nth-child(3),
    & > a:nth-child(4),
    & > a:nth-child(5) {
      grid-column: span 2;
    }

    & > a:nth-child(6) {
      grid-column: 1 / 4;
    }

    & > a:nth-child(7) {
      grid-column: 4 / 7;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13.6rem;

  ${media("sm")} {
    margin-top: 6.4rem;
  }

  ${media("xl")} {
    margin-top: 7.2rem;
  }
`;
