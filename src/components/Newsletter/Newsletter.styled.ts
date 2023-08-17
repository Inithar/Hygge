import styled from "styled-components";
import { Section } from "../Section";
import { media } from "../../styles/helpers";

export const StyledSection = styled(Section)`
  ${media("md")} {
    background-color: ${({ theme }) => theme.colors.accent.one};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding-block: 6.4rem;
  }

  ${media("xl")} {
    padding-block: 9.6rem;
  }
`;

export const Form = styled.form`
  margin-top: 5.6rem;
  max-width: 62rem;

  & > button {
    display: block;
    margin: 2.4rem auto 0;
  }

  ${media("xs")} {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    gap: 2.4rem;
    margin: 4rem auto 0;

    & > button {
      margin: 0;
    }
  }
`;
