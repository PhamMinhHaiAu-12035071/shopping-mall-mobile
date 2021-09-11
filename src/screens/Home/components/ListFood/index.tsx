import React from "react";
import {
  Col,
  Container,
  Row,
  Title,
  ViewMore,
  WrapperArrFood,
  WrapperTitle,
  WrapperViewMore,
} from "./styles";
import Food from "../../../../components/Food";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
}

function ListFood(props: Props) {
  const { title } = props;
  const { t } = useTranslation("home");
  return (
    <Container>
      <Row>
        <WrapperTitle>
          <Title>{title}</Title>
        </WrapperTitle>
        <WrapperViewMore>
          <ViewMore>{t("home:viewAll")}</ViewMore>
        </WrapperViewMore>
      </Row>
      <WrapperArrFood>
        <Row>
          <Col>
            <Food />
          </Col>
          <Col>
            <Food />
          </Col>
        </Row>
      </WrapperArrFood>
    </Container>
  );
}

export default ListFood;
