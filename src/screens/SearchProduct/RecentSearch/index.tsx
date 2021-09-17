import React from "react";
import { ButtonRefresh, Item, SvgRefresh, Text } from "./styles";
import { ReactComponent as IconRefresh } from "../../../assets/images/refresh.svg";

const list = Array.from({ length: 100 }, (_, i) => String(i + 1));

function RecentSearch() {
  return (
    <React.Fragment>
      {list.map((item, index) => {
        return (
          <Item key={index.toString()}>
            <Text>{item}</Text>
            <ButtonRefresh>
              <SvgRefresh>
                <IconRefresh />
              </SvgRefresh>
            </ButtonRefresh>
          </Item>
        );
      })}
    </React.Fragment>
  );
}

export default RecentSearch;
