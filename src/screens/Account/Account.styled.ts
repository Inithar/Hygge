import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div`
  display: grid;
  gap: 4rem;

  ${media("md")} {
    grid-template-columns: 30rem 1fr;
    align-items: start;

    & > *:first-child {
      order: 1;
    }
  }
`;
