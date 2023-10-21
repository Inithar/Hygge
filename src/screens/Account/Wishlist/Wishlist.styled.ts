import styled from "styled-components";
import { media } from "../../../styles/helpers";

export const Products = styled.div`
  display: grid;
  gap: 7.2rem;
  margin-block: 4rem 5.6rem;

  ${media("sm")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 5.6rem 3.6rem;
  }

  ${media("lg")} {
    gap: 7.2rem 5.6rem;
  }
`;

export const NoItems = styled.div`
  display: grid;
  place-items: center;
  gap: 2.4rem;
  text-align: center;

  & > img {
    margin-block: 1.6rem;

    ${media("xs")} {
      margin-block: 3.6rem;
    }
  }

  & > p {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.medium};
  }

  & > a {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.medium};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    text-decoration: underline;
    transition: color 0.3s;

    &:first-of-type {
      margin-top: 0.8rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 50rem;
`;
