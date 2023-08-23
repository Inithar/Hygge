import { css, styled } from "styled-components";

import { visuallyHidden } from "../../styles/common";
import { rgba } from "../../styles/helpers";

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 45rem;

  & > div label {
    ${visuallyHidden}
  }

  & > div input {
    padding: 1.2rem 1.6rem 1.2rem 5.6rem;
    width: 100%;
    outline: none;
    transition: border-color 0.3s;

    ${({ theme }) => css`
      font-family: ${theme.fontFamilies.montserrat.semiBold};
      font-size: ${theme.fontSizes.sm};
      border: 0.2rem solid ${theme.colors.accent.one};
      border-radius: ${theme.borderRadius.sm};

      &:focus-visible {
        border-color: ${theme.colors.primary};
      }

      &::placeholder {
        font-family: ${theme.fontFamilies.montserrat.regular};
        color: ${rgba(theme.colors.text.dark, 0.4)};
      }
    `}

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 100rem ${({ theme }) => theme.colors.basic.white} inset;
    }
  }

  & > div:last-of-type {
    position: absolute;
    top: 50%;
    left: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    transform: translateY(-50%);
  }
`;
