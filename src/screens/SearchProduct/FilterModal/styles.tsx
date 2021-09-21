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
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Line = styled(motion.div)<{ theme: DefaultTheme }>`
  width: 51px;
  height: 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.textH1};
`;
const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 24px;
  text-align: center;
  margin: 16px 0;
`;
const AccordionSummaryCustom = styled(AccordionSummary).attrs({
  "aria-controls": "panel-content",
  id: "panel-header",
})`
  & .MuiAccordionSummary-content {
    flex-flow: column nowrap;
  }
`;
const IconButtonClose = styled(IconButton).attrs({
  "aria-label": "close",
})<{ theme: DefaultTheme }>`
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.box};

  :hover {
    background-color: ${(props) => props.theme.colors.box};
  }
`;
const ButtonReset = styled(Button)<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textH1};
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
};
