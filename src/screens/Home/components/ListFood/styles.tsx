import Button from "@material-ui/core/Button";
import styled, { DefaultTheme } from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  box-sizing: border-box;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
const WrapperTitle = styled.div`
  display: flex;
  flex: 0 0 62%;
  max-width: 62%;
`;
const WrapperViewMore = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 0 35%;
  max-width: 35%;
`;
const Title = styled.span<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${(props) => props.theme.typography.font18}px;
  color: ${(props) => props.theme.colors.homeScreenColor.titleListFoodColor};
  line-height: 21.09px;
`;
const SkeletonTitle = styled(Skeleton).attrs({
  variant: "rect",
})`
  width: 40%;
  height: 22px;
  border-radius: 11.5px;
`;
const SkeletonViewMore = styled(Skeleton).attrs({
  variant: "rect",
})`
  width: 15%;
  height: 22px;
  border-radius: 11.5px;
`;
const ViewMore = styled(Button)<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font14}px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.homeScreenColor.viewMoreListFoodColor};
  text-transform: none;

  :hover {
    background-color: ${(props) =>
      props.theme.colors.homeScreenColor.viewMoreHoverListFoodColor};
  }

  @media (pointer: coarse) {
    :hover {
      background-color: transparent;
    }
  }

  & .MuiButton-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Col = styled.div<{ theme: DefaultTheme }>`
  flex: 0 0 46.5%;
  max-width: 46.5%;
  aspect-ratio: 0.8;
  border-radius: 20px;
  border: 1px solid
    ${(props) => props.theme.colors.homeScreenColor.foodItemBorderColor};
  overflow: hidden;
`;
const WrapperArrFood = styled.div`
  margin-top: 18px;
`;

/* Skeleton */
const ColSkeleton = styled.div<{ theme: DefaultTheme }>`
  flex: 0 0 46.5%;
  max-width: 46.5%;
  border-radius: 20px;
  overflow: hidden;
  padding-top: 59%;
  position: relative;
`;
export {
  Container,
  Row,
  Title,
  ViewMore,
  Col,
  WrapperArrFood,
  WrapperTitle,
  WrapperViewMore,
  ColSkeleton,
  SkeletonTitle,
  SkeletonViewMore,
};
