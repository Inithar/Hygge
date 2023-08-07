import styled from "styled-components";

import { Section } from "../../../components/Section";

import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  padding-bottom: 9.2rem;

  & > div:first-child {
    margin-bottom: 5.6rem;
  }

  ${media("xs")} {
    padding-bottom: 0;

    .slider-controls {
      top: -11rem;
      right: 0;
      left: unset;
      transform: unset;
    }
  }

  ${media("sm")} {
    .slider-controls {
      top: -10rem;
    }

    & > div:first-child {
      margin-bottom: 4.8rem;
    }
  }

  ${media("md")} {
    .slider-controls {
      top: -12rem;
    }

    & > div:first-child {
      margin-bottom: 6.4rem;
    }
  }
`;
