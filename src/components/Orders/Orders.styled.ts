import styled from "styled-components";
import { Link } from "react-router-dom";

import { media, rgba } from "../../styles/helpers";

export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 4.2rem;

  ${media("xs")} {
    justify-content: center;
  }
`;

export const Information = styled.p`
  margin-bottom: 4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};

  ${media("md")} {
    font-size: 1.9rem;
  }

  ${media("lg")} {
    margin-bottom: 5.6rem;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2.4rem;
`;

export const Header = styled.div`
  display: none;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem 4.8rem;
  padding-inline: 2.4rem;

  & > p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
  }

  ${media("lg")} {
    display: grid;
  }
`;

export const Order = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  padding: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  div[color] {
    width: fit-content;
    margin-inline: auto;
  }

  ${media("xs")} {
    grid-template-columns: 1fr 1fr;
  }

  ${media("sm")} {
    gap: 3.2rem 4.8rem;
  }

  ${media("lg")} {
    padding: 1.6rem 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Detail = styled.div`
  display: grid;
  align-items: center;

  & > p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 3.7rem;
    overflow-wrap: anywhere;

    &:first-child {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
    }
  }

  ${media("lg")} {
    & > p:first-child {
      display: none;
    }
  }
`;

export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.15)};
  margin-block: 1.6rem;

  ${media("lg")} {
    display: none;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 4rem;
  padding-inline: 1rem;
`;

export const NoOrdersContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 2.4rem;

  & > svg {
    margin-top: 2.4rem;
    font-size: 8rem;
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
