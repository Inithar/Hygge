import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Form = styled.form`
  display: grid;
  gap: 1.6rem;
  margin: 5.6rem auto 9.6rem;
  padding-inline: 2.4rem;
  max-width: 52rem;
  width: 100%;

  & > button {
    margin-top: 1.2rem;
  }

  ${media("xs")} {
    gap: 2.4rem;
  }

  ${media("sm")} {
    margin-block: 6.4rem 12.8rem;
    max-width: 57rem;
  }
`;
