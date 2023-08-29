import { styled } from "styled-components";
import { media } from "../styles/helpers";

export const Section = styled.section`
  margin-bottom: 10.4rem;

  ${media("sm")} {
    margin-bottom: 11.2rem;
  }

  ${media("lg")} {
    margin-bottom: 14.4rem;
  }
`;
