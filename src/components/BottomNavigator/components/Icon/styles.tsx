import styled, { DefaultTheme } from "styled-components";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";

interface Props extends BottomNavigationActionProps {
  theme: DefaultTheme;
}

const BottomIcon = styled(BottomNavigationAction)<Props>`
  & .MuiTouchRipple-root {
    color: ${(props) => props.theme.colors.mainOne};
  }

  & .MuiBottomNavigationAction-label.Mui-selected {
    color: ${(props) => props.theme.colors.mainOne};
  }

  & .MuiBottomNavigationAction-label {
    color: ${(props) => props.theme.colors.textP2};
    white-space: nowrap;
  }
`;

export { BottomIcon };
