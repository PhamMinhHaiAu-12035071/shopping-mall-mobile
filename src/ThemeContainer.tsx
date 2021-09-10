import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./themes";

function ThemeContainer() {
  return (
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  );
}

export default ThemeContainer;
