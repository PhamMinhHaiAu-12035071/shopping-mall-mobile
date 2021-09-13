import styled, { css, DefaultTheme } from "styled-components";
import { device } from "../../constants/devices";
import { Skeleton } from "@material-ui/lab";

const CSSColumn = css`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  position: relative;
`;
const Container = styled.div`
  ${CSSColumn};
`;

const Col = styled.div`
  flex: 0 0 50%;
  width: 100%;
  max-height: 50%;
`;
const Flex = styled.div`
  ${CSSColumn};
`;
const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 60%;
  height: auto;
`;

const WrapperContent = styled.div`
  padding: 16px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  @media ${device.mobileS} {
    padding: 8px;
  }
`;
const ColProduct = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  ${CSSColumn};
  justify-content: flex-end;
`;
const ColBtnCart = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const AbsoluteBtnCart = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
  @media ${device.mobileS} {
    transform: translateY(-25%);
  }
`;
const Title = styled.span<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextDetail = styled.span`
  font-family: "Manrope", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textP2};
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.span`
  font-family: "Manrope Bold", serif;
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 23px;
`;
const DeprecatedPrice = styled.span`
  font-family: "Manrope", serif;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textP4};
  line-height: 23px;
  margin-left: 3px;
  text-decoration: line-through;
`;

/* Skeleton */
const CSSAbsolute = css`
  position: absolute;
  left: 12px;
  width: 100%;
  height: 100%;
`;
const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const SkeletonContainer = styled(Skeleton).attrs({
  animation: "wave",
  width: "100%",
  height: "100%",
  variant: "rect",
})`
  border-radius: 20px;
`;
const AbsoluteTitle = styled.div`
  ${CSSAbsolute};
  top: 55%;
`;
const TitleSkeleton = styled(Skeleton).attrs({
  animation: "wave",
  width: "50%",
  height: 14,
  variant: "rect",
})`
  background-color: white;
  border-radius: 7px;
`;
const AbsoluteDetail = styled.div`
  ${CSSAbsolute};
  top: calc(55% + 24px);
`;
const DetailSkeleton = styled(Skeleton).attrs({
  animation: "wave",
  width: "70%",
  height: 14,
  variant: "rect",
})`
  background-color: white;
  border-radius: 7px;
`;
const AbsolutePrice = styled.div`
  ${CSSAbsolute};
  top: calc(55% + 48px);
`;
const PriceSkeleton = styled(Skeleton).attrs({
  animation: "wave",
  width: "40%",
  height: 16,
  variant: "rect",
})`
  background-color: white;
  border-radius: 8px;
`;
const AbsoluteCart = styled.div`
  ${CSSAbsolute};
  top: calc(55% + 42px);
  left: calc(100% - 32px);
`;
const CartSkeleton = styled(Skeleton).attrs({
  animation: "wave",
  width: 25,
  height: 25,
  variant: "circle",
})`
  background-color: white;
`;
export {
  Container,
  Col,
  Image,
  Flex,
  WrapperImage,
  WrapperContent,
  ColProduct,
  ColBtnCart,
  Title,
  TextDetail,
  Price,
  DeprecatedPrice,
  AbsoluteBtnCart,
  Absolute,
  SkeletonContainer,
  AbsoluteTitle,
  TitleSkeleton,
  AbsoluteDetail,
  DetailSkeleton,
  AbsolutePrice,
  PriceSkeleton,
  AbsoluteCart,
  CartSkeleton,
};
