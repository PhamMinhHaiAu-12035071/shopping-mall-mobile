import { DefaultTheme } from "styled-components";
import { fontWeight, typography } from "./common";
import stepOne from "../assets/images/step-one.png";
import stepTwo from "../assets/images/step-two.png";
import stepThree from "../assets/images/step-three.png";

const orangeTheme: DefaultTheme = {
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
      circleColor: "rgba(244, 116, 88, 1)",
      circleHoverColor: "rgba(240, 77, 41, 1)",
      circleShadowColor: "rgba(244, 116, 88, 0.35)",
      circleDisabledColor: "rgba(247, 247, 247, 1)",
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
export default orangeTheme;
