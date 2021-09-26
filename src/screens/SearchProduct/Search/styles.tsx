import styled, { DefaultTheme } from "styled-components";
import { motion } from "framer-motion";
import { IconButton, SvgIcon, TextField } from "@material-ui/core";

interface WrapperSearchProps {
  theme: DefaultTheme;
  width: number;
}

const WrapperSearch = styled(motion.div)<WrapperSearchProps>`
  width: ${(props) => props.width}px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.searchProductScreenColor.inputSearchColor};
`;
const IconSearch = styled(IconButton)`
  :hover {
    background-color: ${(props) =>
      props.theme.colors.searchProductScreenColor.iconSearchHoverColor};
  }

  & .MuiTouchRipple-root {
    color: ${(props) =>
      props.theme.colors.searchProductScreenColor.iconSearchColor};
  }
`;
const SvgIconSearch = styled(SvgIcon).attrs({
  viewBox: "0 0 18 17",
})`
  font-size: 24px;
`;
const WrapperIconFilter = styled.div<{ theme: DefaultTheme }>`
  width: 50px;
  max-width: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconButtonFilter = styled(IconButton)<{ theme: DefaultTheme }>`
  background-color: ${(props) =>
    props.theme.colors.searchProductScreenColor.iconFilterColor};
  border-radius: 10px;

  :hover {
    background-color: ${(props) =>
      props.theme.colors.searchProductScreenColor.iconFilterHoverColor};
  }

  & .MuiTouchRipple-root {
    color: white;
  }
`;
const SvgIconFilter = styled(SvgIcon).attrs({
  viewBox: "0 0 28 28",
})`
  font-size: 28px;
`;
const WrapperInput = styled.div`
  width: calc(100% - 50px);
`;
const InputSearch = styled(TextField).attrs({
  id: "search-product",
  type: "text",
  variant: "standard",
  autoComplete: "off",
})<{ theme: DefaultTheme }>`
  & #search-product {
    font-family: "Gilroy-Regular", sans-serif;
    font-size: ${(props) => props.theme.typography.font16}px;
    color: ${(props) =>
      props.theme.colors.searchProductScreenColor.placeholderColor};
    line-height: 18.75px;
  }
`;

export {
  WrapperSearch,
  SvgIconSearch,
  WrapperIconFilter,
  IconButtonFilter,
  SvgIconFilter,
  WrapperInput,
  InputSearch,
  IconSearch,
};
