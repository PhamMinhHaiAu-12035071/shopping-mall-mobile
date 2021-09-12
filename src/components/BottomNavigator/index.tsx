import React from "react";
import { BottomNavigationCustom, Container } from "./styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "./components/Icon";
import HomeSvg from "../HomeSvg";
import MenuSvg from "../MenuSvg";
import SaveSvg from "../SaveSvg";
import ProfileSvg from "../ProfileSvg";
import LogoSvg from "../LogoSvg";
import IconLogo from "./components/IconLogo";
import { useTranslation } from "react-i18next";

function BottomNavigator() {
  const { t } = useTranslation("translation");
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  const renderIcon = (icon: React.ReactElement) => {
    return <SvgIcon viewBox={"0 0 30 30"}>{icon}</SvgIcon>;
  };
  return (
    <Container>
      <BottomNavigationCustom
        value={value}
        onChange={handleChange}
        showLabels={true}
      >
        <Icon
          label={t("homeIcon")}
          value="home"
          icon={renderIcon(<HomeSvg isChecked={value === "home"} />)}
        />
        <Icon
          label={t("menuIcon")}
          value="menu"
          icon={renderIcon(<MenuSvg isChecked={value === "menu"} />)}
        />
        <IconLogo
          label="Logo"
          value="logo"
          showLabel={false}
          icon={renderIcon(<LogoSvg />)}
        />
        <Icon
          label={t("saveIcon")}
          value="save"
          icon={renderIcon(<SaveSvg isChecked={value === "save"} />)}
        />
        <Icon
          label={t("profileIcon")}
          value="profile"
          icon={renderIcon(<ProfileSvg isChecked={value === "profile"} />)}
        />
      </BottomNavigationCustom>
    </Container>
  );
}

export default BottomNavigator;
