import React from "react";
import { Container, SlideTransition, WrapperContent } from "./styles";
import Header from "./components/Header";
import Blog from "./components/Blog";
import ListFood from "./components/ListFood";
import { useTranslation } from "react-i18next";
import BottomNavigator from "../../components/BottomNavigator";

function Home() {
  const { t } = useTranslation("home");
  return (
    <SlideTransition>
      <Container>
        <WrapperContent>
          <Blog />
          <ListFood title={t("home:popularPack")} />
          <ListFood title={t("home:ourNewItem")} />
        </WrapperContent>
        <Header />
        <BottomNavigator />
      </Container>
    </SlideTransition>
  );
}

export default Home;
