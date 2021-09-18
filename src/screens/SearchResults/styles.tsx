import styled from "styled-components";
import { motion } from "framer-motion";

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

export { SlideTransition };
