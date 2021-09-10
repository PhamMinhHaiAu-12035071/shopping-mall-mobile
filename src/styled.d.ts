// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface Color {
    mainOne: string;
    mainTwo: string;
  }

  export interface DefaultTheme {
    colors: Color;
  }
}
