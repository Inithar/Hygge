import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.4rem;
  min-height: 100vh;
  text-align: center;

  & > a {
    margin-top: 1.6rem;
  }
`;

export const Image = styled.img`
  width: 90%;
  max-width: 60rem;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  text-transform: uppercase;

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
`;

export const Text = styled.p`
  max-width: 46rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${media("sm")} {
    max-width: 51rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
