import { motion } from "framer-motion";
import styled from "styled-components";

const SlideTransition = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1.01,
    x: 0.01,
  },
  exit: {
    opacity: 0,
    x: "-100%",
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
  overflow-y: auto;
`;

const WrapperContent = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  padding-bottom: 102px;
  box-sizing: border-box;
`;
export { SlideTransition, Container, WrapperContent };
