import styled from "styled-components";
import { Link } from "react-router-dom";

import { media, rgba } from "../../styles/helpers";

export const Container = styled.div`
  margin-top: 5.6rem;

  & > p {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
  }

  ${media("xs")} {
    margin-top: 6.4rem;
  }

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Items = styled.table`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-collapse: collapse;

  tr > th {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
  }

  thead > tr > th {
    padding: 0 2.4rem 1.6rem;
    border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.basic.black, 0.15)};

    &:first-child {
      width: 70%;
    }
  }

  tbody > tr > td {
    padding: 2.4rem 1.6rem;
    border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.basic.black, 0.15)};
  }

  tfoot {
    tr > th {
      text-align: end;
    }

    tr > td > span {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
    }
  }

  tfoot > tr > td,
  tfoot > tr > th {
    padding: 2.4rem 1.6rem 0;
  }

  ${media("xs")} {
    thead > tr > th:first-child {
      text-align: start;
    }
  }

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Item = styled.div`
  display: grid;
  place-items: center;
  gap: 1.6rem;

  ${media("xs")} {
    grid-template-columns: auto 1fr;
    justify-items: start;
    gap: 3.2rem;
  }

  ${media("sm")} {
    gap: 4.8rem;

    & > p {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
    }
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  place-items: center;
  width: 9.6rem;
  height: 9.6rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  & > img {
    width: auto;
    max-height: 7.6rem;
  }

  ${media("sm")} {
    width: 12.8rem;
    height: 12.8rem;

    & > img {
      max-width: 9.6rem;
    }
  }
`;
