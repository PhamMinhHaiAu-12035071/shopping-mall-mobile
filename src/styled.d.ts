// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface OnboardScreenColor {
    titleColor: string;
    descriptionColor: string;
    circleColor: string;
    circleHoverColor: string;
    circleShadowColor: string;
    circleDisabledColor: string;
  }

  export interface SplashScreenColor {
    cartSvgColor: string;
  }

  export interface BottomNavigatorColor {
    iconDisabledColor: string;
    iconActiveColor: string;
  }

  export interface HomeScreenColor {
    titleLocationColor: string;
    valueLocationColor: string;
    checkedSvgColor: string;
    circleHeaderIcon: string;
    circleHoverHeaderIcon: string;
    bannerColor: string;
    hashTagColor: string;
    titleListFoodColor: string;
    viewMoreListFoodColor: string;
    viewMoreHoverListFoodColor: string;
    titleFoodItemColor: string;
    categoryFoodItemColor: string;
    priceFoodItemColor: string;
    deprecatedPriceFoodItemColor: string;
    btnCartFoodItemColor: string;
    btnCartHoverFoodItemColor: string;
  }

  export interface OnboardImage {
    stepOne: string;
    stepTwo: string;
    stepThree: string;
  }

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
    gray: string;
    onBoardScreenColor: OnboardScreenColor;
    homeScreenColor: HomeScreenColor;
    splashScreenColor: SplashScreenColor;
    bottomNavigatorColor: BottomNavigatorColor;
  }

  export interface Typography {
    displayExtraLargeTitle: number;
    displayLargeTitle: number;
    mediumTitle: number;
    displayTitle1: number;
    displayTitle2: number;
    displayTitle3: number;
    font25: number;
    font24: number;
    font20: number;
    font18: number;
    font16: number;
    font14: number;
    font12: number;
  }

  export interface FontWeight {
    fwBold: number;
    fwNormal: number;
    fwLight: number;
    fontThin: number;
    fontExtraLight: number;
    fontLight: number;
    fontNormal: number;
    fontMedium: number;
    fontSemiBold: number;
    fontBold: number;
    fontExtraBold: number;
    fontBlack: number;
  }

  export interface DefaultTheme {
    colors: Color;
    typography: Typography;
    fontWeight: FontWeight;
    onBoardImage: OnboardImage;
  }
}
