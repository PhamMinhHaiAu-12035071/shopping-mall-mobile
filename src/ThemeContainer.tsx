import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./themes";
import i18next from "i18next";
import { StylesProvider } from "@material-ui/core/styles";
import SplashScreen from "./screens/SplashScreen";

function ThemeContainer() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={lightTheme}>
          <StylesProvider injectFirst>
            <App />
          </StylesProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  );
}

export default ThemeContainer;
