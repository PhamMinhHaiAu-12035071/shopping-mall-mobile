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
import { DefaultTheme, withTheme } from "styled-components";

interface Props {
  theme: DefaultTheme;
}

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.25,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  hidden: { y: -20, opacity: 0 },
};

function Header(props: Props) {
  const { t, ready } = useTranslation("home");
  const [isTranslateReady, setIsTranslateReady] =
    React.useState<string>("hidden");
  React.useEffect(() => {
    if (ready) {
      setIsTranslateReady("visible");
    }
  }, [ready]);
  const history = useHistory();
  const renderIcon = (
    icon: React.ReactElement,
    onClick: () => void
  ): React.ReactElement => {
    return (
      <HomeHeaderIcon
        onClick={onClick}
        animate={isTranslateReady}
        variants={variants}
        initial={"hidden"}
      >
        {icon}
      </HomeHeaderIcon>
    );
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
          <TitleLocation
            animate={isTranslateReady}
            variants={variants}
            initial={"hidden"}
          >
            {t("home:currentLocation")}
          </TitleLocation>
          <WrapperIcon
            animate={isTranslateReady}
            variants={variants}
            initial={"hidden"}
          >
            <CheckedSVG
              color={props.theme.colors.homeScreenColor.checkedSvgColor}
            />
          </WrapperIcon>
        </Row>
        <Location
          animate={isTranslateReady}
          variants={variants}
          initial={"hidden"}
        >
          Chhatak,Syhlet
        </Location>
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

export default withTheme(Header);
