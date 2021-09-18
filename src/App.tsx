import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./screens/Home";
import SearchProduct from "./screens/SearchProduct";
import OnBoard from "./screens/OnBoard";
import useWindowDimensions from "./hooks/useWindowDimensions";
import styled, { DefaultTheme } from "styled-components";

interface ContainerProps {
  theme: DefaultTheme;
  width: number;
  height: number;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  overflow-x: hidden;
`;

function App() {
  const location = useLocation();
  const { width, height } = useWindowDimensions();
  return (
    <Container width={width} height={height}>
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path={"/"} exact component={OnBoard} />
          <Route path={"/home"} exact component={Home} />
          <Route path={"/search"} exact component={SearchProduct} />
          <Route path={"*"} component={() => <h1>Not Found</h1>} />
        </Switch>
      </AnimatePresence>
    </Container>
  );
}

export default App;
