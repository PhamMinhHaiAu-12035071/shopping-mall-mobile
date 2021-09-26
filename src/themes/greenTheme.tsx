import { DefaultTheme } from "styled-components";
import { fontWeight, typography } from "./common";
import stepOne from "../assets/images/step-one-green.png";
import stepTwo from "../assets/images/step-two-green.png";
import stepThree from "../assets/images/step-three-green.png";

const greenTheme: DefaultTheme = {
  colors: {
    onBoardScreenColor: {
      titleColor: "rgba(22, 22, 46, 1)",
      descriptionColor: "rgba(22, 22, 46, 0.6)",
      circleColor: "rgba(64, 170, 84, 1)",
      circleHoverColor: "rgba(57, 153, 75, 1)",
      circleShadowColor: "rgba(64, 170, 84, 0.35)",
      circleDisabledColor: "rgba(247, 247, 247, 1)",
    },
    homeScreenColor: {
      titleLocationColor: "rgba(22, 22, 46, 1)",
      valueLocationColor: "rgba(22, 22, 46, 0.5)",
      checkedSvgColor: "rgba(64, 170, 84, 1)",
      circleHeaderIcon: "rgba(242, 246, 243, 1)",
      circleHoverHeaderIcon: "rgba(227, 236, 229, 1)",
      bannerColor: "rgba(213, 240, 219, 1)",
      hashTagColor: "rgba(64, 170, 84, 1)",
      titleListFoodColor: "rgba(22, 22, 46, 1)",
      viewMoreListFoodColor: "rgba(64, 170, 84, 1)",
      viewMoreHoverListFoodColor: "rgba(234, 247, 237, 1)",
      titleFoodItemColor: "rgba(22, 22, 46, 1)",
      categoryFoodItemColor: "rgba(139, 139, 151, 1)",
      priceFoodItemColor: "rgba(0, 0, 0, 1)",
      deprecatedPriceFoodItemColor: "rgba(139, 139, 151, 1)",
      btnCartFoodItemColor: "rgba(64, 170, 84, 1)",
      btnCartHoverFoodItemColor: "rgba(38, 101, 50, 1)",
      foodItemBorderColor: "rgba(236, 236, 236, 1)",
    },
    splashScreenColor: {
      cartSvgColor: "rgba(64, 170, 84, 1)",
      loadingColor: "rgba(64, 170, 84, 1)",
    },
    bottomNavigatorColor: {
      iconDisabledColor: "rgba(22, 22, 46, 0.4)",
      iconActiveColor: "rgba(64, 170, 84, 1)",
    },
    searchProductScreenColor: {
      iconSearchColor: "rgba(64, 170, 84, 1)",
      iconSearchHoverColor: "rgba(234, 247, 237, 1)",
      placeholderColor: "rgba(22, 22, 46, 1)",
      iconFilterColor: "rgba(64, 170, 84, 1)",
      iconFilterHoverColor: "rgba(38, 101, 50, 1)",
      titleRecentSearchColor: "rgba(22, 22, 46, 1)",
      itemRecentSearchColor: "rgba(139, 139, 151, 1)",
      iconRecentSearchColor: "rgba(64, 170, 84, 1)",
      iconRecentSearchHoverColor: "rgba(234, 247, 237, 1)",
      itemRecentSearchBorderColor: "rgba(236, 236, 236, 1)",
      inputSearchColor: "rgba(247, 247, 247, 1)",
      lineFilterModalColor: "rgba(22, 22, 46, 1)",
      iconCloseFilterModalColor: "rgba(247, 247, 247, 1)",
      resetTextFilterModalColor: "rgba(22, 22, 46, 1)",
    },
  },
  onBoardImage: {
    stepOne,
    stepTwo,
    stepThree,
  },
  typography,
  fontWeight,
};
export default greenTheme;
