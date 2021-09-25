import { DefaultTheme } from "styled-components";
import { fontWeight, typography } from "./common";
import stepOne from "../assets/images/step-one-green.png";
import stepTwo from "../assets/images/step-two-green.png";
import stepThree from "../assets/images/step-three-green.png";

const greenTheme: DefaultTheme = {
  colors: {
    mainOne: "#F47458",
    mainOneShadow: "rgba(244, 116, 88, 0.1)",
    mainOneDarkShadow: "rgba(244, 116, 88, 0.4)",
    mainTwo: "#F9ECE9",
    mainThee: "#F67D49",
    textH1: "#292825",
    textP2: "#828282",
    textP3: "#BDBDBD",
    textP4: "#C6C4C4",
    box: "#DDDDDD",
    other11: "#db6f21",
    light: "white",
    gray: "#EAEAE9",
    onBoardScreenColor: {
      titleColor: "rgba(22, 22, 46, 1)",
      descriptionColor: "rgba(22, 22, 46, 0.6)",
      circleColor: "rgba(64, 170, 84, 1)",
      circleHoverColor: "rgba(54, 144, 71, 1)",
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
      btnCartHoverFoodItemColor: "rgba(44, 118, 58, 1)",
    },
    splashScreenColor: {
      cartSvgColor: "rgba(64, 170, 84, 1)",
    },
    bottomNavigatorColor: {
      iconDisabledColor: "rgba(22, 22, 46, 0.4)",
      iconActiveColor: "rgba(64, 170, 84, 1)",
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
