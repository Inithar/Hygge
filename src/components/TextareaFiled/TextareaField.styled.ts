import { css, styled } from "styled-components";
import { media, rgba } from "../../styles/helpers";

type StyledTextAreaFiledProps = {
  isError: boolean;
};

export const StyledTextAreaFiled = styled.div<StyledTextAreaFiledProps>`
  & > label {
    display: inline-block;
    margin-bottom: 0.8rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};

    ${media("sm")} {
      margin-bottom: 1.6rem;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  & > textarea {
    padding: 1.2rem 2.4rem;
    width: 100%;
    outline: none;
    transition: border-color 0.5s;
    resize: vertical;

    ${({ theme, isError }) => css`
      font-size: ${theme.fontSizes.sm};
      font-family: ${theme.fontFamilies.montserrat.semiBold};
      background-color: ${theme.colors.basic.white};
      border: 0.2rem solid ${isError ? rgba(theme.colors.accent.two, 0.6) : theme.colors.accent.one};
      border-radius: ${theme.borderRadius.md};
      box-shadow: ${theme.shadows.md};
    `}

    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.regular};
      color: ${({ theme }) => rgba(theme.colors.text.dark, 0.4)};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 100rem ${({ theme }) => theme.colors.basic.white} inset;
    }

    ${media("sm")} {
      padding-block: 1.6rem;
      font-size: 2rem;
    }
  }

  & > p {
    margin-top: 0.8rem;
    height: 1.6rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.accent.two};
    opacity: ${({ isError }) => (isError ? 1 : 0)};
    transition: opacity 0.3s;

    ${media("sm")} {
      margin-top: 1.2rem;
      height: 2rem;
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;
