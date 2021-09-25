import styled, { DefaultTheme } from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { device } from "../../constants/devices";
import { SvgIconProps } from "@material-ui/core";

interface AddIconCustomProps extends SvgIconProps {
  theme: DefaultTheme;
}

const FabCartIcon = styled(Fab)<{ theme: DefaultTheme }>`
  border-radius: 9999px;
  background-color: ${(props) =>
    props.theme.colors.homeScreenColor.btnCartFoodItemColor};
  box-shadow: none;
  width: 30px;
  height: 30px;
  min-height: 25px;
  @media ${device.mobileS} {
    width: 25px;
    height: 25px;
    & .MuiSvgIcon-root {
      font-size: 1.2rem;
    }
  }

  :active {
    box-shadow: none;
  }

  :hover {
    background-color: ${(props) =>
      props.theme.colors.homeScreenColor.btnCartHoverFoodItemColor};
  }

  @media (pointer: coarse) {
    :hover {
      background-color: ${(props) =>
        props.theme.colors.homeScreenColor.btnCartFoodItemColor};
    }
  }

  & .MuiTouchRipple-root {
    color: white;
  }
`;
const AddIConCart = styled(AddIcon)<AddIconCustomProps>`
  color: ${(props) => props.theme.colors.light};
`;

export { FabCartIcon, AddIConCart };
