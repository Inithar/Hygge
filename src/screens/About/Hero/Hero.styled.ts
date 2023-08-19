import styled from "styled-components";
import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  h2 {
    margin-bottom: 5.6rem;

    ${media("sm")} {
      margin-bottom: 6.4rem;
    }

    ${media("xl")} {
      margin-bottom: 7.2rem;
    }
  }
`;

export const Container = styled.div`
  picture,
  img {
    width: 100%;
  }

  img {
    display: block;
    margin-inline: auto;
    max-width: 39rem;
  }

  ${media("xs")} {
    img {
      max-width: none;
    }
  }
`;
