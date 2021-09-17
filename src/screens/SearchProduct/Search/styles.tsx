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
  border: 1px solid ${(props) => props.theme.colors.box};
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
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
  background-color: ${(props) => props.theme.colors.mainOne};
  border-radius: 10px;

  :hover {
    background-color: ${(props) => props.theme.colors.other11};
  }

  @media (pointer: coarse) {
    :hover {
      background-color: ${(props) => props.theme.colors.mainOne};
    }
  }

  & .MuiTouchRipple-root {
    color: ${(props) => props.theme.colors.light};
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
  placeholder: "Search",
})`
  & #search-product {
    font-family: "Manrope", serif;
    font-size: 14px;
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
};
