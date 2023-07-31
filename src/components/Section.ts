import { styled } from "styled-components";

export const Section = styled.section`
  margin-bottom: 10.4rem;

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 11.2rem;
  }

  ${({ theme }) => theme.media.lg} {
    margin-bottom: 14.4rem;
  }
`;
