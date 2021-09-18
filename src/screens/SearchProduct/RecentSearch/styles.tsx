import styled, { DefaultTheme } from "styled-components";
import { IconButton, SvgIcon } from "@material-ui/core";

const Item = styled.div<{ theme: DefaultTheme }>`
  margin: 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.box};
`;
const Text = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  line-height: 19.12px;
  color: ${(props) => props.theme.colors.textP2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ButtonRefresh = styled(IconButton)<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.mainOne};

  :hover {
    background-color: ${(props) => props.theme.colors.mainOneShadow};
  }

  @media (pointer: coarse) {
    :hover {
      background-color: transparent;
    }
  }
`;
const SvgRefresh = styled(SvgIcon).attrs({
  viewBox: "0 0 23 23",
})`
  font-size: 24px;
`;
export { Item, Text, ButtonRefresh, SvgRefresh };
