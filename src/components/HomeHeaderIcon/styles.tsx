import styled, { DefaultTheme } from "styled-components";
import Fab from "@material-ui/core/Fab";

const HomeFabIcon = styled(Fab)<{ theme: DefaultTheme }>`
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.mainTwo};
  box-shadow: none;
  width: 40px;
  height: 40px;

  :active {
    box-shadow: none;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.mainTwo};
  }

  & .MuiTouchRipple-root {
    color: ${(props) => props.theme.colors.mainOneDarkShadow};
  }
`;

export { HomeFabIcon };
