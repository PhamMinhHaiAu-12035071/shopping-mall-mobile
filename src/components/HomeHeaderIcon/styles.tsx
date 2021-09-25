import styled, { DefaultTheme } from "styled-components";
import Fab from "@material-ui/core/Fab";
import { motion, MotionProps } from "framer-motion";

interface HomeFabIconProps extends MotionProps {
  theme: DefaultTheme;
}

const HomeFabIcon = styled(Fab).attrs({
  component: motion.div,
})<HomeFabIconProps>`
  border-radius: 9999px;
  background-color: ${(props) =>
    props.theme.colors.homeScreenColor.circleHeaderIcon};
  box-shadow: none;
  width: 40px;
  height: 40px;

  :active {
    box-shadow: none;
  }

  :hover {
    background-color: ${(props) =>
      props.theme.colors.homeScreenColor.circleHoverHeaderIcon};
  }

  & .MuiTouchRipple-root {
    color: white;
  }
`;

export { HomeFabIcon };
