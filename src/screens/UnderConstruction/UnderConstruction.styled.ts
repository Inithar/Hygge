import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 2.4rem;
  height: 100vh;
  text-align: center;

  & > a {
    margin-top: 5.6rem;

    ${media("sm")} {
      margin-top: 6.4rem;
    }

    ${media("xl")} {
      margin-top: 7.2rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 60rem;
`;

export const Heading = styled.h1`
  margin-block: 5.6rem 1.6rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  text-transform: uppercase;

  ${media("xs")} {
    margin-top: 6.4rem;
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }

  ${media("xl")} {
    margin-top: 7.2rem;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};

  ${media("xs")} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
