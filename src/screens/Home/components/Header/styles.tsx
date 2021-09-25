import styled, { css, DefaultTheme } from "styled-components";
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
const TitleLocation = styled(motion.span)<{
  theme: DefaultTheme;
}>`
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font14}px;
  color: ${(props) => props.theme.colors.homeScreenColor.titleLocationColor};
  ${Text};
  line-height: 17.57px;
`;
const Location = styled(motion.span)<{
  theme: DefaultTheme;
}>`
  font-family: "Gilroy-Regular", sans-serif;
  font-size: ${(props) => props.theme.typography.font16}px;
  color: ${(props) => props.theme.colors.homeScreenColor.valueLocationColor};
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18.75px;
  ${Text};
`;
const WrapperIcon = styled(motion.div)`
  width: 24px;
  height: 16px;
  line-height: 23px;
  margin-left: 7px;
`;

export { Container, Col, TitleLocation, Location, Row, WrapperIcon };
