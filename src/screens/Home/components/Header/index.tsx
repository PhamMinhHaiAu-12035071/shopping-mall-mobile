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

function Header() {
  const { t } = useTranslation("home");

  const renderIcon = (icon: React.ReactElement): React.ReactElement => {
    return <HomeHeaderIcon>{icon}</HomeHeaderIcon>;
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
        headerLeft={renderIcon(<MenuSvg />)}
        headerTitle={renderTitle()}
        headerRight={renderIcon(<SearchSvg />)}
      />
    </Container>
  );
}

export default Header;
