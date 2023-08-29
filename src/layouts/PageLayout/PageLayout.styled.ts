import styled from "styled-components";

export const Main = styled.main`
  margin-inline: auto;
  max-width: 134.4rem;
  padding-inline: 2.4rem;

  ${({ theme }) => theme.media.sm} {
    padding-inline: 4rem;
  }

  ${({ theme }) => theme.media.md} {
    padding-inline: 4.8rem;
  }
`;
