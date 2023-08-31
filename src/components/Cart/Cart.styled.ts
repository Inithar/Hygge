import styled from "styled-components";
import { Link } from "react-router-dom";

import { media, rgba } from "../../styles/helpers";

export const Wrapper = styled.div`
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.basic.white};
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  & > h3 {
    margin-bottom: 4rem;
  }

  ${media("xs")} {
    & > h3 {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }

  ${media("sm")} {
    padding: 5.6rem;
  }
`;

export const Items = styled.div`
  display: grid;
  gap: 4rem;
`;

export const Item = styled.div`
  display: grid;
  justify-items: center;

  ${media("xs")} {
    grid-template-columns: auto 1fr auto;
    justify-items: start;
    align-items: center;
    gap: 2.4rem;
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  place-items: center;
  margin-bottom: 2.4rem;
  width: 9.6rem;
  height: 9.6rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  & > img {
    width: auto;
    max-height: 6.4rem;
  }

  ${media("xs")} {
    margin-bottom: 0;
    width: 12.8rem;
    height: 12.8rem;

    & > img {
      max-height: 8.2rem;
    }
  }
`;

export const Details = styled.div`
  & > a {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-block: 1.6rem;

  & > p {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  }

  ${media("xs")} {
    justify-content: start;
  }
`;

export const Old = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => rgba(theme.colors.text.dark, 0.24)};
  text-decoration: line-through;
`;

export const Current = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};

  ${media("xs")} {
    justify-content: start;
    margin-bottom: 0;
  }
`;

export const RemoveItemButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
  background-color: transparent;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};

  ${media("xs")} {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2.4rem;
`;
