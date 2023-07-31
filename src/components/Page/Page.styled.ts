import styled from "styled-components";

export const Wrapper = styled.div`
  margin-inline: auto;
  max-width: 134.4rem;
  min-height: 100vh;

  main {
    padding-inline: 2.4rem;

    ${({ theme }) => theme.media.sm} {
      padding-inline: 4rem;
    }

    ${({ theme }) => theme.media.md} {
      padding-inline: 4.8rem;
    }
  }
`;
