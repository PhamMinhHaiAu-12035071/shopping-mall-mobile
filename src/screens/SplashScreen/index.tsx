import React from "react";
import { ColText, Container, NameApp, Row, TextLogo } from "./styles";
import { ReactComponent as CartLogo } from "../../assets/images/cart-splash-screen.svg";

function SplashScreen() {
  return (
    <Container>
      <Row>
        <CartLogo />
        <ColText>
          <TextLogo>eGrocery</TextLogo>
          <NameApp>your daily needs</NameApp>
        </ColText>
      </Row>
    </Container>
  );
}

export default SplashScreen;
