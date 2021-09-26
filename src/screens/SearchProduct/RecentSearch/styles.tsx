import styled, { DefaultTheme } from "styled-components";
import { IconButton, SvgIcon } from "@material-ui/core";

const Item = styled.div<{ theme: DefaultTheme }>`
  margin: 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.colors.searchProductScreenColor.itemRecentSearchBorderColor};
`;
const Text = styled.div<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Regular", sans-serif;
  font-size: ${(props) => props.theme.typography.font16}px;
  line-height: 18.75px;
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.itemRecentSearchColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ButtonRefresh = styled(IconButton)<{ theme: DefaultTheme }>`
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.iconRecentSearchColor};

  :hover {
    background-color: ${(props) =>
      props.theme.colors.searchProductScreenColor.iconRecentSearchHoverColor};
  }
`;
const SvgRefresh = styled(SvgIcon).attrs({
  viewBox: "0 0 23 23",
})`
  font-size: 24px;
`;
export { Item, Text, ButtonRefresh, SvgRefresh };
