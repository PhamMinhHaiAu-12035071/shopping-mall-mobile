import React from "react";
import {
  Col,
  Container,
  Location,
  Row,
  TitleLocation,
  WrapperIcon,
} from "./styles";
import { default as HeaderCommon } from "../../../../components/Header";
import HomeHeaderIcon from "../../../../components/HomeHeaderIcon";
import { ReactComponent as MenuSvg } from "../../../../assets/images/menu.svg";
import { ReactComponent as SearchSvg } from "../../../../assets/images/search.svg";
import { useTranslation } from "react-i18next";
import CheckedSVG from "../../../../components/CheckedSVG";
import { useHistory } from "react-router-dom";

function Header() {
  const { t } = useTranslation("home");
  const history = useHistory();
  const renderIcon = (
    icon: React.ReactElement,
    onClick: () => void
  ): React.ReactElement => {
    return <HomeHeaderIcon onClick={onClick}>{icon}</HomeHeaderIcon>;
  };
  const pressBurgerMenu = () => {
    console.log("press burger menu");
  };
  const pressSearch = () => {
    history.push("/search");
  };
  const renderTitle = (): React.ReactElement => {
    return (
      <Col>
        <Row>
          <TitleLocation>{t("home:currentLocation")}</TitleLocation>
          <WrapperIcon>
            <CheckedSVG />
          </WrapperIcon>
        </Row>
        <Location>Chhatak,Syhlet</Location>
      </Col>
    );
  };
  return (
    <Container>
      <HeaderCommon
        headerLeft={renderIcon(<MenuSvg />, pressBurgerMenu)}
        headerTitle={renderTitle()}
        headerRight={renderIcon(<SearchSvg />, pressSearch)}
      />
    </Container>
  );
}

export default Header;
