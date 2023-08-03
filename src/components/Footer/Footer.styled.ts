import styled from "styled-components";

import { media } from "../../styles/helpers";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 8.5rem 5.6rem;
  padding: 0 3.2rem 5.6rem;
  margin-inline: auto;
  max-width: 124.8rem;

  ${media("sm")} {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    padding: 0 4rem 6.4rem;
  }

  ${media("md")} {
    padding-inline: 4.8rem;
  }

  ${media("xl")} {
    padding-bottom: 7.2rem;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 0.8rem;
`;

export const Box = styled.div`
  display: grid;
  gap: 1.6rem;

  ${media("sm")} {
    gap: 2.4rem;
  }
`;

export const Links = styled.div`
  display: grid;
  gap: 1.6rem;

  a:link,
  a:visited {
    font-size: ${({ theme }) => theme.fontSizes.xs};

    ${media("sm")} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  a:hover,
  a:active {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s;
  }
`;
