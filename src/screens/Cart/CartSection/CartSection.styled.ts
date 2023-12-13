import styled from "styled-components";
import { media } from "../../../styles/helpers";

export const Container = styled.div`
  margin-bottom: 5.6rem;

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

  ${media("sm")} {
    margin-bottom: 6.4rem;
  }

  ${media("lg")} {
    margin-bottom: 7.2rem;
  }
`;

export const Cart = styled.div`
  display: grid;
  gap: 4rem;

  ${media("sm")} {
    gap: 4.8rem;
  }

  ${media("lg")} {
    grid-template-columns: 2fr 1fr;
    align-items: start;

    & > div:last-child {
      position: sticky;
      top: 12rem;
    }
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
