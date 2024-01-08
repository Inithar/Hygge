import { styled } from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  & > div > h2 {
    max-width: 44rem;
  }

  ${media("md")} {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  ${media("lg")} {
    gap: 7.2rem;
    padding-inline: 6.6rem;
  }

  ${media("xl")} {
    gap: 14.4rem;
    padding-inline: 10rem;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  gap: 2.4rem;

  & > button {
    max-width: 9.1rem;
  }

  ${media("sm")} {
    gap: 3.2rem;

    & > button {
      max-width: 13.4rem;
    }
  }

  ${media("md")} {
    margin-top: 3.2rem;
  }
`;
