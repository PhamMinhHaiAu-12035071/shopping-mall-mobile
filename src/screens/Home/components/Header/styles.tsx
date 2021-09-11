import styled, { css, DefaultTheme } from "styled-components";
import { device } from "../../../../constants/devices";

const Container = styled.div`
  padding: 10px 20px;
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
const TitleLocation = styled.span<{ theme: DefaultTheme }>`
  font-family: "Manrope SemiBold", serif;
  font-size: ${(props) => props.theme.typography.displayLargeTitle}px;
  color: ${(props) => props.theme.colors.textH1};
  ${Text};
  @media ${device.mobileS} {
    font-size: ${(props) => props.theme.typography.displayTitle1}px;
  }
`;
const Location = styled.span<{ theme: DefaultTheme }>`
  font-family: "Manrope Light", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  font-weight: ${(props) => props.theme.fontWeight.fwLight};
  color: ${(props) => props.theme.colors.textP2};
  overflow: hidden;
  text-overflow: ellipsis;
  ${Text};
`;
const WrapperIcon = styled.div`
  width: 24px;
  height: 16px;
  line-height: 23px;
  margin-left: 7px;
`;
export { Container, Col, TitleLocation, Location, Row, WrapperIcon };
