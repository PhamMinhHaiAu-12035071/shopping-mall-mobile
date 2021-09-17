import styled from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  top: calc(100% - 60px);
`;

const BottomNavigationCustom = styled(BottomNavigation)`
  height: 60px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.04);

  .MuiBottomNavigationAction-root {
    min-width: 30px;
  }
`;

export { Container, BottomNavigationCustom };
