import styled, { DefaultTheme } from "styled-components";
import { motion } from "framer-motion";
import { IconButton, IconButtonProps, SvgIcon } from "@material-ui/core";

interface ButtonArrowBackProps extends IconButtonProps {
  theme: DefaultTheme;
}

const SlideTransition = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1.01,
    x: 0.01,
  },
  exit: {
    opacity: 0,
    x: "100%",
  },
  transition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.25,
  },
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  //overflow: hidden;
`;
const Header = styled.div`
  width: 100%;
  height: 170px;
  box-sizing: border-box;
  position: relative;
`;
const LeftHeader = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 100%;
  height: 100%;
`;
const ButtonArrowBack = styled(IconButton)<ButtonArrowBackProps>`
  padding: 10px;

  :hover {
    background-color: ${(props) => props.theme.colors.mainOneShadow};
  }

  @media (pointer: coarse) {
    :hover {
      background-color: transparent;
    }
  }

  & .MuiTouchRipple-root {
    color: ${(props) => props.theme.colors.mainOne};
  }
`;
const SvgIconBack = styled(SvgIcon).attrs({
  viewBox: "0 0 30 30",
})`
  font-size: 30px;
`;
const RightHeader = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
`;
const WrapperRecentSearch = styled(motion.div)`
  position: absolute;
  top: 180px;
  left: 0;
  width: 100%;
  height: auto;
`;
const TitleRecentSearch = styled(motion.div)<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  color: ${(props) => props.theme.colors.textH1};
  margin-left: 20px;
`;
const WrapperList = styled(motion.div)`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
export {
  SlideTransition,
  Container,
  Header,
  LeftHeader,
  ButtonArrowBack,
  SvgIconBack,
  RightHeader,
  WrapperRecentSearch,
  TitleRecentSearch,
  WrapperList,
};
