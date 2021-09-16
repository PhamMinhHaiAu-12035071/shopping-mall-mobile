import styled, { DefaultTheme } from "styled-components";
import Fab from "@material-ui/core/Fab";
import { motion } from "framer-motion";

const HomeFabIcon = styled(Fab).attrs({
  component: motion.div,
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.25,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
})<{ theme: DefaultTheme }>`
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.mainTwo};
  box-shadow: none;
  width: 40px;
  height: 40px;

  :active {
    box-shadow: none;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.mainTwo};
  }

  & .MuiTouchRipple-root {
    color: ${(props) => props.theme.colors.mainOneDarkShadow};
  }
`;

export { HomeFabIcon };
