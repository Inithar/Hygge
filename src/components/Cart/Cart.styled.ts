import styled from "styled-components";
import { Link } from "react-router-dom";

import { media, rgba } from "../../styles/helpers";

export const Wrapper = styled.div`
  padding: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Items = styled.div`
  display: grid;
  gap: 4rem;
  margin-top: 4rem;
`;

export const Item = styled.div`
  display: grid;
  justify-items: center;
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

  /* ${media("xs")} {
    width: 19.2rem;
    height: 19.2rem;
    margin: 0;
    border-radius: ${({ theme }) => theme.borderRadius.md};

    & > img {
      max-height: 12.8rem;
    }
  } */
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
`;

export const Old = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => rgba(theme.colors.text.dark, 0.24)};
  text-decoration: line-through;
`;

export const Current = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const RemoveItemButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background-color: transparent;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 4rem 5.6rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
`;
