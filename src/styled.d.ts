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
    loadingColor: string;
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
    foodItemBorderColor: string;
  }

  export interface SearchProductScreenColor {
    iconSearchColor: string;
    iconSearchHoverColor: string;
    placeholderColor: string;
    iconFilterColor: string;
    iconFilterHoverColor: string;
    titleRecentSearchColor: string;
    itemRecentSearchColor: string;
    iconRecentSearchColor: string;
    iconRecentSearchHoverColor: string;
    itemRecentSearchBorderColor: string;
    inputSearchColor: string;
    lineFilterModalColor: string;
    iconCloseFilterModalColor: string;
    resetTextFilterModalColor: string;
    sortByTextColor: string;
    sortByIconColor: string;
    priceRangeSliderActiveColor: string;
    priceRangeSliderDeActiveColor: string;
    priceRangeSlideThumbShadowColor: string;
    priceRangeSlideTextColor: string;
    buttonOutlineBorderColor: string;
    buttonOutlineTextColor: string;
    buttonApplyFilterColor: string;
    buttonApplyFilterHoverColor: string;
  }

  export interface OnboardImage {
    stepOne: string;
    stepTwo: string;
    stepThree: string;
  }

  export interface Color {
    starRatingColor: string;
    onBoardScreenColor: OnboardScreenColor;
    homeScreenColor: HomeScreenColor;
    splashScreenColor: SplashScreenColor;
    bottomNavigatorColor: BottomNavigatorColor;
    searchProductScreenColor: SearchProductScreenColor;
  }

  export interface Typography {
    font25: number;
    font24: number;
    font20: number;
    font18: number;
    font16: number;
    font14: number;
    font12: number;
  }

  export interface FontWeight {
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
