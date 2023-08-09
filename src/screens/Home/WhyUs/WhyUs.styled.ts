import styled from "styled-components";

import { media } from "../../../styles/helpers";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  margin-top: 5.6rem;

  ${media("sm")} {
    margin-top: 6.4rem;
  }

  ${media("md")} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6.4rem;
  }

  ${media("xl")} {
    gap: 12rem;
  }
`;

export const Features = styled.div`
  ${media("md")} {
    max-width: 43.2rem;
  }

  ${media("xl")} {
    max-width: 30.4rem;
  }
`;
