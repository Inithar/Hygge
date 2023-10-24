import styled from "styled-components";
import { media, rgba } from "../../../styles/helpers";

export const StyledNavigation = styled.nav`
  padding: 2.4rem;
  max-width: 73rem;
  margin-inline: auto;
  width: 100%;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  & > button {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    transition: color 0.3s;

    & > svg {
      font-size: 2.8rem;
      transition: color 0.25s;
    }
  }

  & > button:hover,
  & > button:hover > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media("xs")} {
    padding: 3.2rem;
  }
`;

export const CategoryTitle = styled.p`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
`;

export const CategoryList = styled.ul`
  display: grid;
  gap: 1.6rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  & > li > a {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    transition: color 0.3s;

    svg {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
      transition: color 0.25s;
    }
  }

  & > li:hover {
    a,
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Divider = styled.div`
  margin-block: 3.2rem;
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.1)};
`;
