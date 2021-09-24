import styled, { DefaultTheme } from "styled-components";
import { motion, MotionProps } from "framer-motion";
import Fab, { FabProps } from "@material-ui/core/Fab";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import { device } from "../../constants/devices";

const STEP = 33.3;
const SIZE_CIRCLE_PROGRESS = 70;
const SIZE_CIRCLE_STEP = 48;

interface FabButtonProps extends FabProps {
  theme: DefaultTheme;
}

interface ProgressProps extends CircularProgressProps {
  theme: DefaultTheme;
  colorProgress: string;
}

interface SwiperWrapperProps extends MotionProps {
  step: boolean;
  progress: number;
}

const Container = styled.div<{ height: number }>`
  width: 100vw;
  height: ${(props) => props.height}px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Swiper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;
const SwiperWrapper = styled(motion.div).attrs((props: SwiperWrapperProps) => ({
  animate: {
    x: props.step
      ? `-${Math.round(100 / STEP - 1) * 100}%`
      : `-${Math.round(props.progress / STEP - 1) * 100}%`,
  },
  transition: props.step
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
}))`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
`;
const SwiperSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
`;
const WrapperBtnStep = styled.div`
  position: absolute;
  width: ${SIZE_CIRCLE_PROGRESS}px;
  height: ${SIZE_CIRCLE_PROGRESS}px;
  bottom: 32px;
  left: calc(50% - ${SIZE_CIRCLE_PROGRESS / 2}px);
  z-index: 1;
  @media ${device.mobileS} {
    bottom: 16px;
  }
`;
const ContainerBtnStep = styled.div<{ theme: DefaultTheme }>`
  position: relative;
  width: ${SIZE_CIRCLE_PROGRESS}px;
  height: ${SIZE_CIRCLE_PROGRESS}px;
  background-color: white;
  border-radius: ${SIZE_CIRCLE_PROGRESS / 2}px;
`;
const ContainerBtnStepAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const Absolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${SIZE_CIRCLE_STEP}px;
  height: ${SIZE_CIRCLE_STEP}px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
`;
const FabButton = styled(Fab)<FabButtonProps>`
  background-color: ${(props) =>
    props.theme.colors.onBoardScreenColor.circleColor};
  box-shadow: 0 2px 11px
    ${(props) => props.theme.colors.onBoardScreenColor.circleShadowColor};
  width: ${SIZE_CIRCLE_STEP}px;
  height: ${SIZE_CIRCLE_STEP}px;

  :active {
    box-shadow: none;
  }

  :hover {
    background-color: ${(props) =>
      props.theme.colors.onBoardScreenColor.circleHoverColor};
  }

  & .MuiTouchRipple-root {
    color: white;
  }

  @media (pointer: coarse) {
    :hover {
      background-color: ${(props) =>
        props.theme.colors.onBoardScreenColor.circleColor};
    }
  }
`;
const ArrowIcon = styled(ArrowRightAltIcon)`
  color: white;
  font-size: 30px;
`;
const Progress = styled(CircularProgress).attrs({
  variant: "determinate",
})<ProgressProps>`
  width: ${SIZE_CIRCLE_PROGRESS}px !important;
  height: ${SIZE_CIRCLE_PROGRESS}px !important;
  color: ${(props) => props.colorProgress};
`;

export {
  Container,
  Swiper,
  SwiperWrapper,
  SwiperSlide,
  WrapperBtnStep,
  FabButton,
  ArrowIcon,
  Progress,
  ContainerBtnStep,
  Absolute,
  STEP,
  ContainerBtnStepAbsolute,
};
