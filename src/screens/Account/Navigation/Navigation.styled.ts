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
    gap: 1.6rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    background-color: transparent;
    border: none;

    & > img {
      width: 2.4rem;
      height: 2.4rem;
    }
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

    & > span {
      display: grid;
      place-items: center;
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`;

export const Divider = styled.div`
  margin-block: 3.2rem;
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.1)};
`;

