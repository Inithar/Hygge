import { styled } from "styled-components";
import { media } from "../../styles/helpers";

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem;
  min-width: 13.6rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};

  & > button {
    display: grid;
    place-items: center;
    background-color: transparent;
    border: none;

    svg {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
      transition: color 0.3s;
    }
  }

  & > button:hover > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > input {
    text-align: center;
    padding-inline: 1.4rem;
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 1;
    border: 0.2rem solid transparent;
    outline: none;

    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${media("sm")} {
    padding: 1.6rem 2.4rem;
    min-width: 17.6rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};

    & > input {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }
`;
