import React from "react";
import { Container } from "./styles";
import Header from "./components/Header";
import Blog from "./components/Blog";
import ListFood from "./components/ListFood";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("home");

  return (
    <Container>
      <Header />
      <Blog />
      <ListFood title={t("home:popularPack")} />
      <ListFood title={t("home:ourNewItem")} />
    </Container>
  );
}

export default Home;
