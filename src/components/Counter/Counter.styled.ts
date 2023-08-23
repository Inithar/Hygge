import { styled } from "styled-components";
import { media } from "../../styles/helpers";

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem;
  min-width: 13.6rem;
  border: 2px solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};

  & > button {
    display: grid;
    place-items: center;
    height: 2rem;
    background-color: transparent;
    border: none;
  }

  & > input {
    text-align: center;
    padding-inline: 1.4rem;
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 1;
    border: 2px solid transparent;
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
