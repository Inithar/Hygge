import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

import { Page } from "./components/Page/Page";
import { Home } from "./screens/Home/Home";

export const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <BrowserRouter>
          <Routes>
            <Route element={<Page />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
};
