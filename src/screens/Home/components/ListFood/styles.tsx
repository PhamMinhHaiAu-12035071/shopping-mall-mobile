import Button from "@material-ui/core/Button";
import styled, { css, DefaultTheme } from "styled-components";

const CSSTitle = css<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
`;
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
  ${CSSTitle};
  font-size: ${(props) => props.theme.typography.displayTitle1}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 25.95px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ViewMore = styled(Button)<{ theme: DefaultTheme }>`
  ${CSSTitle};
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.mainOne};
  text-transform: capitalize;

  :hover {
    background-color: ${(props) => props.theme.colors.mainOneShadow};
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
  border: 1px solid ${(props) => props.theme.colors.box};
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
};
