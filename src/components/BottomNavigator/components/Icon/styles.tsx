import styled, { css, DefaultTheme } from "styled-components";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";
import { device } from "../../../../constants/devices";

interface Props extends BottomNavigationActionProps {
  theme: DefaultTheme;
}

const CSSText = css<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${(props) => props.theme.typography.font14}px;
  line-height: 14px;
  @media ${device.mobileS} {
    font-size: ${(props) => props.theme.typography.font12}px;
  }
`;

const BottomIcon = styled(BottomNavigationAction)<Props>`
  & .MuiTouchRipple-root {
    color: ${(props) =>
      props.theme.colors.bottomNavigatorColor.iconActiveColor};
  }

  & .MuiBottomNavigationAction-label.Mui-selected {
    ${CSSText};
    color: ${(props) =>
      props.theme.colors.bottomNavigatorColor.iconActiveColor};
  }

  & .MuiBottomNavigationAction-label {
    ${CSSText};
    color: ${(props) =>
      props.theme.colors.bottomNavigatorColor.iconDisabledColor};
    white-space: nowrap;
  }
`;

export { BottomIcon };
