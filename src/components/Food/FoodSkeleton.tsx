import React from "react";
import {
  Absolute,
  AbsoluteCart,
  AbsoluteDetail,
  AbsolutePrice,
  AbsoluteTitle,
  CartSkeleton,
  DetailSkeleton,
  PriceSkeleton,
  SkeletonContainer,
  TitleSkeleton,
} from "./styles";

function FoodSkeleton() {
  return (
    <React.Fragment>
      <Absolute>
        <SkeletonContainer />
      </Absolute>
      <AbsoluteTitle>
        <TitleSkeleton />
      </AbsoluteTitle>
      <AbsoluteDetail>
        <DetailSkeleton />
      </AbsoluteDetail>
      <AbsolutePrice>
        <PriceSkeleton />
      </AbsolutePrice>
      <AbsoluteCart>
        <CartSkeleton />
      </AbsoluteCart>
    </React.Fragment>
  );
}

export default FoodSkeleton;
