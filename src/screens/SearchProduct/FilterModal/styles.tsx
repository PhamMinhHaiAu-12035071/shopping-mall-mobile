import Drawer from "@material-ui/core/Drawer";
import styled, { css, DefaultTheme } from "styled-components";
import {
  Select,
  Slider,
  AccordionDetails,
  Button,
  IconButton,
  AccordionSummary,
} from "@material-ui/core";

const CSSSortBy = css<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font16}px;
  line-height: 20.08px;
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.sortByTextColor};
`;
const MARGIN = 20;
const CSSMarginTop = css`
  margin-top: ${MARGIN}px;
`;
const CSSMarginBottom = css`
  margin-bottom: ${MARGIN}px;
`;
const DrawerCustom = styled(Drawer).attrs({
  anchor: "bottom",
})`
  & .MuiPaper-root {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
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
const WrapperMarginTop = styled.div`
  ${CSSMarginTop};
`;
const RowControls = styled(FlexCenter)`
  height: 40px;
`;

const Line = styled.div<{ theme: DefaultTheme }>`
  margin-top: 12px;
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.searchProductScreenColor.lineFilterModalColor};
  ${CSSMarginBottom};
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
    padding-bottom: 20px;
  }

  & .MuiAccordionSummary-content.Mui-expanded {
    padding-bottom: 0;
  }

  &.Mui-focused {
    background-color: white;
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
  padding: 0;
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

const TextSortBy = styled.div<{ theme: DefaultTheme }>`
  ${CSSSortBy};
`;
const SortByCustom = styled(Select)`
  ${CSSSortBy};

  & .MuiSelect-select:focus {
    background-color: white;
  }
`;
const CustomPriceRange = styled(Slider)<{ theme: DefaultTheme }>`
  margin-left: 8px;
  width: calc(100% - 16px);

  & .MuiSlider-rail,
  & .MuiSlider-track {
    height: 6px;
    border-radius: 3px;
  }

  & .MuiSlider-rail {
    color: ${(props) =>
      props.theme.colors.searchProductScreenColor
        .priceRangeSliderDeActiveColor};
  }

  & .MuiSlider-track {
    color: ${(props) =>
      props.theme.colors.searchProductScreenColor.priceRangeSliderActiveColor};
  }

  & .MuiSlider-thumb {
    width: 24px;
    height: 24px;
    margin-top: -10px;
    box-sizing: border-box;
    border: 2px solid white;
    box-shadow: 0 2px 5px
      ${(props) =>
        props.theme.colors.searchProductScreenColor
          .priceRangeSlideThumbShadowColor};
    color: ${(props) =>
      props.theme.colors.searchProductScreenColor.priceRangeSliderActiveColor};
  }

  & .MuiSlider-valueLabel {
    top: 30px;
    left: calc(-50% - -5px);

    & * {
      font-family: "Gilroy-Medium", sans-serif;
      font-size: ${(props) => props.theme.typography.font14}px;
      line-height: 16.41px;
      background-color: transparent;
      color: ${(props) =>
        props.theme.colors.searchProductScreenColor.priceRangeSlideTextColor};
    }
  }
`;

const AccordionDetailsCustom = styled(AccordionDetails)`
  flex-flow: column nowrap;
  margin-top: ${-MARGIN * 1.2}px;
`;

const ButtonSave = styled(Button).attrs({
  variant: "contained",
  disableElevation: true,
})<{ theme: DefaultTheme }>`
  background-color: ${(props) =>
    props.theme.colors.searchProductScreenColor.buttonApplyFilterColor};
  color: white;
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font16}px;
  letter-spacing: 0.8px;
  border-radius: 15px;
  ${CSSMarginTop};
  margin-bottom: 10px;
  height: 56px;
  text-transform: none;

  :hover {
    background-color: ${(props) =>
      props.theme.colors.searchProductScreenColor.buttonApplyFilterHoverColor};
  }
`;
export {
  DrawerCustom,
  Line,
  Title,
  AccordionSummaryCustom,
  FlexCenter,
  IconButtonClose,
  ButtonReset,
  WrapperButtonClose,
  RowControls,
  WrapperButtonReset,
  TextSortBy,
  SortByCustom,
  CustomPriceRange,
  AccordionDetailsCustom,
  WrapperMarginTop,
  ButtonSave,
};
