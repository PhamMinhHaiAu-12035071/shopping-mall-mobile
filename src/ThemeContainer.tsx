import React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./themes";
import i18next from "i18next";
import { StylesProvider } from "@material-ui/core/styles";

function ThemeContainer() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StylesProvider injectFirst>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default ThemeContainer;
