import React from "react";
import { ListRowProps } from "react-virtualized/dist/es/List";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {
  ButtonRefresh,
  Item,
  ListRecentSearch,
  SvgRefresh,
  Text,
} from "./styles";
import { ReactComponent as IconRefresh } from "../../../assets/images/refresh.svg";

const list = Array.from({ length: 100 }, (_, i) => String(i + 1));
const HEIGHT_HEADER = 192;
const PADDING_BOTTOM = 25;

function RecentSearch() {
  const { width, height } = useWindowDimensions();
  const rowRenderer = ({ key, index, style }: ListRowProps) => {
    return (
      <div key={key} style={style}>
        <Item>
          <Text>{list[index]}</Text>
          <ButtonRefresh>
            <SvgRefresh>
              <IconRefresh />
            </SvgRefresh>
          </ButtonRefresh>
        </Item>
      </div>
    );
  };
  return (
    <ListRecentSearch
      width={width}
      height={height - HEIGHT_HEADER - PADDING_BOTTOM}
      list={list}
      rowRenderer={rowRenderer}
    />
  );
}

export default RecentSearch;
