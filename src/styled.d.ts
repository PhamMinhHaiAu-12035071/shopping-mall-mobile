// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface Color {
    mainOne: string;
    mainOneShadow: string;
    mainOneDarkShadow: string;
    mainTwo: string;
    mainThee: string;
    textH1: string;
    textP2: string;
    textP3: string;
    textP4: string;
    box: string;
    other11: string;
    light: string;
  }

  export interface Typography {
    displayLargeTitle: number;
    displayTitle1: number;
    displayTitle2: number;
    displayTitle3: number;
  }

  export interface FontWeight {
    fwBold: number;
    fwNormal: number;
    fwLight: number;
  }

  export interface DefaultTheme {
    colors: Color;
    typography: Typography;
    fontWeight: FontWeight;
  }
}
