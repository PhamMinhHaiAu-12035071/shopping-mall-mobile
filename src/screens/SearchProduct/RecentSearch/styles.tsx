import styled, { DefaultTheme } from "styled-components";
import { IconButton, SvgIcon } from "@material-ui/core";
import { List } from "react-virtualized";
import { ListProps } from "react-virtualized/dist/es/List";

const PADDING_HORIZONTAL = 20;
const ROW_HEIGHT = 48;

interface ListPropsRecentSearch extends ListProps {
  list: Array<string>;
  width: number;
  height: number;
}

const ListRecentSearch = styled(List).attrs((props: ListPropsRecentSearch) => ({
  rowCount: props.list.length,
  rowHeight: ROW_HEIGHT,
  width: props.width - PADDING_HORIZONTAL,
  height: props.height,
}))<ListPropsRecentSearch>`
  padding-right: 20px;
`;
const Item = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
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
export { ListRecentSearch, Item, Text, ButtonRefresh, SvgRefresh };
