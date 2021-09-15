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
    <ThemeProvider theme={lightTheme}>
      <StylesProvider injectFirst>
        <Suspense fallback={<SplashScreen />}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </Suspense>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default ThemeContainer;
