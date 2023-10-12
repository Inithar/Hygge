import styled from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  ${media("lg")} {
    display: grid;
    grid-template-columns: 1fr 49.6rem;
    gap: 7rem;
    padding-inline: 8.4rem;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 5.6rem;
  margin-top: 5.6rem;

  ${media("sm")} {
    gap: 6.4rem;
    margin-top: 6.4rem;
  }

  ${media("lg")} {
    margin-top: 3.2rem;
    gap: 5.6rem;
  }
`;
