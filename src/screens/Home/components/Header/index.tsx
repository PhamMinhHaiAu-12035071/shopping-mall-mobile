import React from "react";
import { Container } from "./styles";
import { default as HeaderCommon } from "../../../../components/Header";
import HomeHeaderIcon from "../../../../components/HomeHeaderIcon";
import { ReactComponent as MenuSvg } from "../../../../assets/images/menu.svg";
import { ReactComponent as SearchSvg } from "../../../../assets/images/search.svg";

function Header() {
  return (
    <Container>
      <HeaderCommon
        headerLeft={
          <HomeHeaderIcon>
            <MenuSvg />
          </HomeHeaderIcon>
        }
        headerRight={
          <HomeHeaderIcon>
            <SearchSvg />
          </HomeHeaderIcon>
        }
      />
    </Container>
  );
}

export default Header;
