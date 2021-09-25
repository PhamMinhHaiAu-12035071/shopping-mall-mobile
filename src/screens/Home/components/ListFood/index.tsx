import React from "react";
import {
  Col,
  ColSkeleton,
  Container,
  Row,
  SkeletonTitle,
  SkeletonViewMore,
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
  const { t, ready } = useTranslation("home");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container>
      <Row>
        {ready ? (
          <React.Fragment>
            <WrapperTitle>
              <Title>{title}</Title>
            </WrapperTitle>
            <WrapperViewMore>
              <ViewMore>{t("home:viewAll")}</ViewMore>
            </WrapperViewMore>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SkeletonTitle />
            <SkeletonViewMore />
          </React.Fragment>
        )}
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
