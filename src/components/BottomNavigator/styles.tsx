import styled, { DefaultTheme } from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 102px;
  top: calc(100% - 102px);
`;

const BottomNavigationCustom = styled(BottomNavigation)`
  margin-top: 22px;
  height: 80px;
  background-color: transparent;

  .MuiBottomNavigationAction-root {
    min-width: 30px;
  }
`;
const IconBasketPlus = styled(BottomNavigationAction)<{ theme: DefaultTheme }>`
  & .MuiBottomNavigationAction-wrapper {
    position: absolute;
    top: -22px;
    left: 50%;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${(props) =>
      props.theme.colors.bottomNavigatorColor.iconActiveColor};
    transform: translateX(-53%);
  }

  & .MuiSvgIcon-root {
    font-size: ${(props) => props.theme.typography.font24}px;
  }
`;

export { Container, BottomNavigationCustom, IconBasketPlus };
