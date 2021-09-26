import React from "react";
import { ButtonRefresh, Item, SvgRefresh, Text } from "./styles";
import { List } from "react-virtualized";
import { ListRowProps } from "react-virtualized/dist/es/List";
import RefreshSvg from "../../../components/RefreshSvg";
import { DefaultTheme, withTheme } from "styled-components";

interface Props {
  list: Array<string>;
  height: number;
  width: number;
  theme: DefaultTheme;
}

function RecentSearch(props: Props) {
  const { width, height, list, theme } = props;

  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    style, // Style object to be applied to row (to position it)
  }: ListRowProps) => {
    return (
      <div key={key} style={style}>
        <Item>
          <Text>{list[index]}</Text>
          <ButtonRefresh>
            <SvgRefresh>
              <RefreshSvg
                color={
                  theme.colors.searchProductScreenColor.iconRecentSearchColor
                }
              />
            </SvgRefresh>
          </ButtonRefresh>
        </Item>
      </div>
    );
  };
  return (
    <List
      width={width}
      height={height}
      rowCount={list.length}
      rowHeight={48}
      rowRenderer={rowRenderer}
    />
  );
}

export default withTheme(RecentSearch);
