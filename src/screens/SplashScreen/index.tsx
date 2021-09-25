import React from "react";
import {
  Absolute,
  ColText,
  Container,
  Loading,
  NameApp,
  Row,
  TextLogo,
} from "./styles";
import CartLogoSvg from "../../components/CartLogoSvg";
import { DefaultTheme, withTheme } from "styled-components";

interface Props {
  theme: DefaultTheme;
}

function SplashScreen(props: Props) {
  return (
    <Container>
      <Row>
        <CartLogoSvg
          color={props.theme.colors.splashScreenColor.cartSvgColor}
        />
        <ColText>
          <TextLogo>eGrocery</TextLogo>
          <NameApp>your daily needs</NameApp>
        </ColText>
      </Row>
      <Absolute>
        <Loading />
      </Absolute>
    </Container>
  );
}

export default withTheme(SplashScreen);
