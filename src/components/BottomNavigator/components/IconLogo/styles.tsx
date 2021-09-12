import styled, { DefaultTheme } from "styled-components";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";

interface Props extends BottomNavigationActionProps {
  theme: DefaultTheme;
}

const BottomIcon = styled(BottomNavigationAction)<Props>`
  pointer-events: none;

  & .MuiBottomNavigationAction-wrapper {
    position: absolute;
    top: -15px;
    left: 50%;
    background-color: ${(props) => props.theme.colors.mainOne};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    transform: translateX(-50%);

    & .MuiSvgIcon-root {
      font-size: 2rem;
      transform: translateY(7px);
    }
  }
`;

export { BottomIcon };
