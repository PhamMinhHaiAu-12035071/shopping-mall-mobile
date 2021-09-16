import styled, { css, DefaultTheme } from "styled-components";
import { device } from "../../../../constants/devices";
import { motion } from "framer-motion";

const Container = styled.div<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  padding: 10px 20px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.light};
`;
const Text = css`
  text-align: center;
  text-transform: capitalize;
  line-height: 23px;
  white-space: nowrap;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const TitleLocation = styled(motion.span).attrs({
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
  font-family: "Manrope Bold", serif;
  font-size: ${(props: { theme: DefaultTheme }) =>
    props.theme.typography.displayLargeTitle}px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.textH1};
  ${Text};
  @media ${device.mobileS} {
    font-size: ${(props: { theme: DefaultTheme }) =>
      props.theme.typography.displayTitle1}px;
  }
`;
const Location = styled(motion.span).attrs({
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
  font-family: "Manrope", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textP2};
  overflow: hidden;
  text-overflow: ellipsis;
  ${Text};
`;
const WrapperIcon = styled(motion.div).attrs({
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
})`
  width: 24px;
  height: 16px;
  line-height: 23px;
  margin-left: 7px;
`;

export { Container, Col, TitleLocation, Location, Row, WrapperIcon };
