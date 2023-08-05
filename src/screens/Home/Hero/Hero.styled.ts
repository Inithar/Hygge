import styled from "styled-components";

import { Section } from "../../../components/Section";
import { media } from "../../../styles/helpers";

export const StyledSection = styled(Section)`
  position: relative;
`;

export const Details = styled.div`
  display: grid;
  justify-items: start;
  gap: 2.4rem;

  a {
    margin-bottom: 4rem;
  }

  ${media("sm")} {
    gap: 4rem;

    a {
      margin-bottom: 6.4rem;
    }
  }

  ${media("md")} {
    position: absolute;
    top: 50%;
    left: 4.8rem;
    max-width: 36.8rem;
    transform: translateY(-50%);

    a {
      margin-bottom: 0;
    }
  }

  ${media("xl")} {
    left: 9.6rem;
  }
`;

export const PictureContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 5rem 0.8rem 4rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  img {
    width: 100%;
    max-width: 51.2rem;
  }

  ${media("xs")} {
    padding: 1.6rem 8.8rem 0;
  }

  ${media("md")} {
    justify-content: end;
    padding: 4.8rem 0 2.4rem;

    img {
      max-width: 57.6rem;
    }
  }

  ${media("lg")} {
    img {
      max-width: unset;
    }
  }
`;
