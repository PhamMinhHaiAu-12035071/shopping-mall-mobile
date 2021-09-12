import React from "react";
import {
  AbsoluteBtnCart,
  Col,
  ColBtnCart,
  ColProduct,
  Container,
  DeprecatedPrice,
  Flex,
  Image,
  Layer,
  Price,
  TextDetail,
  Title,
  WrapperContent,
  WrapperImage,
  WrapperSkeleton,
} from "./styles";
import CartButton from "../CartButton";
import { Skeleton } from "@material-ui/lab";

function FoodSkeleton() {
  return (
    <Container>
      {/*<Col>*/}
      {/*  <Flex>*/}
      {/*    <WrapperImage>*/}
      {/*      <Image*/}
      {/*        src={*/}
      {/*          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi65p8-PeNFCwWDSmQ-qq2otRE5HsozlZ3mRDbTjNEsggLzkpRY1ckZ_lCV9cMoDMLr4&usqp=CAU"*/}
      {/*        }*/}
      {/*      />*/}
      {/*    </WrapperImage>*/}
      {/*  </Flex>*/}
      {/*</Col>*/}
      {/*<Col>*/}
      {/*  <Flex>*/}
      {/*    <WrapperContent>*/}
      {/*      <ColProduct>*/}
      {/*        <Title>Bundle Pack</Title>*/}
      {/*        <TextDetail>Onion, Salt, Oil, Olive</TextDetail>*/}
      {/*        <Price>*/}
      {/*          $35 <DeprecatedPrice>$50.32</DeprecatedPrice>*/}
      {/*        </Price>*/}
      {/*      </ColProduct>*/}
      {/*      <ColBtnCart>*/}
      {/*        <AbsoluteBtnCart>*/}
      {/*          <CartButton />*/}
      {/*        </AbsoluteBtnCart>*/}
      {/*      </ColBtnCart>*/}
      {/*    </WrapperContent>*/}
      {/*  </Flex>*/}
      {/*</Col>*/}
    </Container>
  );
}

export default FoodSkeleton;
