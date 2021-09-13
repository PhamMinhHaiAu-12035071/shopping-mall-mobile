import React from "react";
import {
  Col,
  ColSkeleton,
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
import FoodSkeleton from "../../../../components/Food/FoodSkeleton";

interface Props {
  title: string;
}

function ListFood(props: Props) {
  const { title } = props;
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
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
          {isLoading ? (
            <ColSkeleton>
              <FoodSkeleton />
            </ColSkeleton>
          ) : (
            <Col>
              <Food />
            </Col>
          )}
          {isLoading ? (
            <ColSkeleton>
              <FoodSkeleton />
            </ColSkeleton>
          ) : (
            <Col>
              <Food />
            </Col>
          )}
        </Row>
      </WrapperArrFood>
    </Container>
  );
}

export default ListFood;
