import { IconButton, IconButtonProps, SvgIcon } from "@material-ui/core";
import styled, { DefaultTheme } from "styled-components";
import { motion } from "framer-motion";

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
  overflow: hidden;
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
const LeftHeader = styled.div`
  flex: 0 0 15%;
  max-width: 15%;
`;
const RightHeader = styled.div`
  flex: 0 0 85%;
  max-width: 85%;
  display: flex;
  justify-content: flex-end;
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
const WrapperSearchFullWidth = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
`;
const WrapperRecentSearch = styled.div`
  width: 100%;
  height: auto;
  padding-left: 20px;
`;
const TitleRecentSearch = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  color: ${(props) => props.theme.colors.textH1};
`;
export {
  SlideTransition,
  Container,
  Header,
  LeftHeader,
  RightHeader,
  ButtonArrowBack,
  SvgIconBack,
  WrapperSearchFullWidth,
  WrapperRecentSearch,
  TitleRecentSearch,
};
