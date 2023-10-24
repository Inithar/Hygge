import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 4rem;

  & > svg {
    font-size: 12rem;
    opacity: 0.85;
  }

  & > h2 {
    text-align: center;
  }

  & > div > p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: center;

    &:first-child {
      margin-bottom: 1.2rem;
    }
  }

  ${media("sm")} {
    & > img {
      width: 8rem;
      height: 8rem;
    }

    & > div > p {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;
