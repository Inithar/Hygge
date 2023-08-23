const customMediaQuery = (minWidth: string) => `@media screen and (min-width: ${minWidth})`;

const media = {
  custom: customMediaQuery,
  xs: customMediaQuery("36em"),
  sm: customMediaQuery("48em"),
  md: customMediaQuery("64em"),
  lg: customMediaQuery("75em"),
  xl: customMediaQuery("90em"),
};

const fontFamilies = {
  montserrat: {
    regular: "MontserratRegular, sans-serif",
    medium: "MontserratMedium, sans-serif",
    semiBold: "MontserratSemiBold, sans-serif",
    bold: "MontserratBold, sans-serif",
  },
};

const fontSizes = {
  xs: "1.4rem",
  sm: "1.6rem",
  md: "1.8rem",
  lg: "2rem",
  xl: "2.2rem",
  "2xl": "2.4rem",
  "3xl": "3.2rem",
  "4xl": "4rem",
};

const colors = {
  primary: "#00CC96",
  secondary: "#2975FF",
  tertiary: {
    one: "#FFC123",
    two: "#FF66A0",
  },
  accent: {
    one: "#F6F7FB",
    two: "#FF0000",
  },
  basic: {
    white: "#FFFFFF",
    black: "#000000",
  },
  text: {
    light: "#F7FAFC",
    dark: "#1A202C",
  },
};

const borderRadius = {
  xs: "1.6rem",
  sm: "2.4rem",
  md: "3.2rem",
  lg: "4.8rem",
  xl: "5.6rem",
};

const shadows = {
  sm: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.04)",
  md: "0 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
  lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
};

export const theme = {
  media,
  fontFamilies,
  fontSizes,
  colors,
  borderRadius,
  shadows,
};
