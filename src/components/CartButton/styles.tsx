import styled, { DefaultTheme } from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { device } from "../../constants/devices";

const FabCartIcon = styled(Fab)<{ theme: DefaultTheme }>`
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.mainOne};
  box-shadow: none;
  width: 30px;
  height: 30px;
  min-height: 25px;
  @media ${device.mobileS} {
    width: 25px;
    height: 25px;
  }

  :active {
    box-shadow: none;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.other11};
  }

  @media (pointer: coarse) {
    :hover {
      background-color: ${(props) => props.theme.colors.mainOne};
    }
  }

  & .MuiTouchRipple-root {
    color: white;
  }
`;
const AddIConCart = styled(AddIcon)`
  color: white;
`;

export { FabCartIcon, AddIConCart };
