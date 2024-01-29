import styled from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  padding-bottom: 9.3rem;

  .slider-controls {
    top: unset;
    bottom: -9rem;
  }

  ${media("sm")} {
    padding-bottom: 0;

    .slider-controls {
      top: -5.5rem;
      right: -4rem;
      bottom: unset;
      left: unset;
    }
  }
`;

export const ProductContainer = styled.div`
  margin-top: 5.6rem;

  & > div {
    width: 30.5rem;
  }

  ${media("sm")} {
    margin-top: 6.4rem;
  }

  ${media("md")} {
    & > div {
      width: 27.2rem;
    }
  }

  ${media("xl")} {
    margin-top: 7.2rem;
  }
`;
