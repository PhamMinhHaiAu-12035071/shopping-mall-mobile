import React from "react";
import {BottomNavigationCustom, Container, IconBasketPlus} from "./styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "./components/Icon";
import HomeSvg from "../HomeSvg";
import MenuSvg from "../MenuSvg";
import SaveSvg from "../SaveSvg";
import ProfileSvg from "../ProfileSvg";
import {useTranslation} from "react-i18next";
import {ReactComponent as BottomSvg} from "../../assets/images/bottom.svg";
import {ReactComponent as BasketPlusSvg} from "../../assets/images/basket-plus.svg";

function BottomNavigator() {
    const {t, ready} = useTranslation("translation");
    const [value, setValue] = React.useState("home");

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        if (newValue !== "cart") {
            setValue(newValue);
        } else {
            console.log("you press cart");
        }
    };
    const renderIcon = (icon: React.ReactElement) => {
        return <SvgIcon viewBox={"0 0 30 30"}>{icon}</SvgIcon>;
    };
    const renderCart = (icon: React.ReactElement) => {
        return <SvgIcon viewBox={"0 0 26 25"}>{icon}</SvgIcon>;
    };
    return (
        <React.Fragment>
            <Container>
                <BottomSvg/>
            </Container>
            <Container>
                <BottomNavigationCustom
                    value={value}
                    onChange={handleChange}
                    showLabels={ready}
                >
                    <Icon
                        label={ready ? t("homeIcon") : ''}
                        value="home"
                        icon={renderIcon(<HomeSvg isChecked={value === "home"}/>)}
                    />
                    <Icon
                        label={t("menuIcon")}
                        value="menu"
                        icon={renderIcon(<MenuSvg isChecked={value === "menu"}/>)}
                    />
                    <IconBasketPlus
                        value="cart"
                        showLabel={false}
                        disableRipple={true}
                        disableTouchRipple={true}
                        icon={renderCart(<BasketPlusSvg/>)}
                    />
                    <Icon
                        label={t("saveIcon")}
                        value="save"
                        icon={renderIcon(<SaveSvg isChecked={value === "save"}/>)}
                    />
                    <Icon
                        label={t("profileIcon")}
                        value="profile"
                        icon={renderIcon(<ProfileSvg isChecked={value === "profile"}/>)}
                    />
                </BottomNavigationCustom>
            </Container>
        </React.Fragment>
    );
}

export default BottomNavigator;
