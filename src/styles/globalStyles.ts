import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: MontserratRegular;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text.dark};
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  @font-face {
    font-family: "MontserratRegular";
    src: url("/fonts/Montserrat-Regular.ttf");
  }

  @font-face {
    font-family: "MontserratMedium";
    src: url("/fonts/Montserrat-Medium.ttf");
  }

  @font-face {
    font-family: "MontserratSemiBold";
    src: url("/fonts/Montserrat-SemiBold.ttf");
  }

  @font-face {
    font-family: "MontserratBold";
    src: url("/fonts/Montserrat-Bold.ttf");
  }
`;
