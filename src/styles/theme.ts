const customMediaQuery = (minWidth: string) => `@media screen and (min-width: ${minWidth})`;

const customValue = (val: string) => `${val}`;

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
  custom: customValue,
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
    white: "#F6F7FB",
    black: "#000000",
  },
  text: {
    light: "#F7FAFC",
    dark: "#1A202C",
  },
};

export const theme = {
  fontFamilies,
  fontSizes,
  colors,
  media,
};
