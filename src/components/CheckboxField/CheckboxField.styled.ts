import { styled } from "styled-components";
import { media } from "../../styles/helpers";

export const StyledCheckboxField = styled.div<{ error?: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 1.6rem;

  & > input,
  & > label {
    cursor: pointer;
  }

  & > input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border: 0.2rem solid;
    border-color: ${({ theme, error }) => (error ? theme.colors.accent.two : theme.colors.primary)};
    border-radius: 50%;
    appearance: none;
    transition: border-color 0.3s;

    &:focus-visible {
      outline: 0.2rem solid ${({ theme }) => theme.colors.primary};
      outline-offset: 0.2rem;
    }

    &::before {
      content: "";
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.3s;
      box-shadow: inset 1rem 1rem ${({ theme }) => theme.colors.primary};
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  ${media("sm")} {
    & > label {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }

    & > input {
      width: 3.2rem;
      height: 3.2rem;

      &::before {
        width: 2rem;
        height: 2rem;
        box-shadow: inset 2rem 2rem ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
