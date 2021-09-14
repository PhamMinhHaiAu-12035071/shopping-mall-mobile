import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div).attrs({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WrapperContent = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  padding-bottom: 60px;
  box-sizing: border-box;
`;
export { Container, WrapperContent };
