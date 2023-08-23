import styled from "styled-components";
import { media } from "../../../styles/helpers";

export const Container = styled.div`
  & > div > h2 {
    margin-bottom: 2.4rem;
  }

  ${media("xs")} {
    display: flex;
    justify-content: space-between;
    align-items: end;

    & > div > h2 {
      margin: 0;
    }
  }
`;

export const Cart = styled.div`
  display: grid;
  gap: 4rem;
  margin-top: 5.6rem;

  ${media("sm")} {
    gap: 4.8rem;
    margin-top: 6.4rem;
  }

  ${media("lg")} {
    grid-template-columns: 2fr 1fr;
    align-items: start;
    margin-top: 7.2rem;
  }
`;

export const Items = styled.div`
  display: grid;
  gap: 4rem;

  ${media("sm")} {
    gap: 4.8rem;
    margin-top: 4.8rem;
  }

  ${media("lg")} {
    margin-top: 0;
  }
`;
