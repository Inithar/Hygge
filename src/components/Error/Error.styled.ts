import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.4rem;
  height: 100vh;
  width: 100%;
  z-index: 999999;
  background-color: white;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 50rem;
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  text-transform: uppercase;

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1;

  ${media("xs")} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
