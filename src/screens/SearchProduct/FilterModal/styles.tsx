import Drawer from "@material-ui/core/Drawer";
import styled, { DefaultTheme } from "styled-components";
import { motion } from "framer-motion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const DrawerCustom = styled(Drawer).attrs({
  anchor: "bottom",
})`
  & .MuiPaper-root {
    border-start-start-radius: 20px;
    border-start-end-radius: 20px;
  }
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const RowControls = styled(FlexCenter)`
  height: 40px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Line = styled(motion.div)<{ theme: DefaultTheme }>`
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.searchProductScreenColor.lineFilterModalColor};
`;
const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font18}px;
  line-height: 22.59px;
  text-align: center;
`;
const AccordionSummaryCustom = styled(AccordionSummary).attrs({
  "aria-controls": "panel-content",
  id: "panel-header",
})`
  & .MuiAccordionSummary-content {
    flex-flow: column nowrap;
  }
`;

const WrapperButtonClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
`;
const WrapperButtonReset = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
`;
const IconButtonClose = styled(IconButton).attrs({
  "aria-label": "close",
})<{ theme: DefaultTheme }>`
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.searchProductScreenColor.iconCloseFilterModalColor};
  width: 40px;
  height: 40px;
`;
const ButtonReset = styled(Button)<{ theme: DefaultTheme }>`
  height: 40px;
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${(props) => props.theme.typography.font18}px;
  line-height: 21.09px;
  text-transform: none;
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.resetTextFilterModalColor};
`;
export {
  DrawerCustom,
  Line,
  Title,
  AccordionSummaryCustom,
  FlexCenter,
  Row,
  IconButtonClose,
  ButtonReset,
  WrapperButtonClose,
  RowControls,
  WrapperButtonReset,
};
