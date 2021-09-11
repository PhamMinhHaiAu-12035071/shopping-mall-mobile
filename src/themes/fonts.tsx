import { createGlobalStyle } from "styled-components";
import ManropeBold from "../assets/fonts/Manrope/Manrope-Bold.ttf";
import ManropeExtraBold from "../assets/fonts/Manrope/Manrope-ExtraBold.ttf";
import ManropeExtraLight from "../assets/fonts/Manrope/Manrope-ExtraLight.ttf";
import ManropeLight from "../assets/fonts/Manrope/Manrope-Light.ttf";
import ManropeMedium from "../assets/fonts/Manrope/Manrope-Medium.ttf";
import ManropeRegular from "../assets/fonts/Manrope/Manrope-Regular.ttf";
import ManropeSemiBold from "../assets/fonts/Manrope/Manrope-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope Bold';
    src: url(${ManropeBold}) format('truetype');
  }

  @font-face {
    font-family: "Manrope Extra Bold";
    src: url(${ManropeExtraBold}) format('truetype');
  }

  @font-face {
    font-family: "Manrope Extra Light";
    src: url(${ManropeExtraLight}) format('truetype');
  }

  @font-face {
    font-family: "Manrope Light";
    src: url(${ManropeLight}) format('truetype');
  }

  @font-face {
    font-family: "Manrope Medium";
    src: url(${ManropeMedium}) format('truetype');
  }

  @font-face {
    font-family: "Manrope";
    src: url(${ManropeRegular}) format('truetype');
  }

  @font-face {
    font-family: "Manrope SemiBold";
    src: url(${ManropeSemiBold}) format('truetype');
  }
`;

export default GlobalStyle;
