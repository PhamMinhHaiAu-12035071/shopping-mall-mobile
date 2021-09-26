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
    type: "spring",
    stiffness: 920,
    damping: 40,
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
  overflow-x: hidden;
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const LeftHeader = styled.div`
  flex: 0 0 15%;
  max-width: 15%;
`;
const ButtonArrowBack = styled(IconButton)<ButtonArrowBackProps>`
  padding: 10px;
`;
const SvgIconBack = styled(SvgIcon).attrs({
  viewBox: "0 0 30 30",
})`
  font-size: 30px;
`;
const RightHeader = styled(motion.div)`
  flex: 0 0 85%;
  max-width: 85%;
  display: flex;
  justify-content: flex-end;
`;
const WrapperRecentSearch = styled(motion.div)`
  width: 100%;
  height: auto;
`;
const TitleRecentSearch = styled(motion.div)<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${(props) => props.theme.typography.font18}px;
  line-height: 21.09px;
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.titleRecentSearchColor};
  margin: 20px;
`;
const WrapperList = styled(motion.div)``;
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
