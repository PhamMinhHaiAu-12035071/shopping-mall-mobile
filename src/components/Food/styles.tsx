import styled, { DefaultTheme } from "styled-components";
import { device } from "../../constants/devices";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

const Col = styled.div`
  flex: 0 0 50%;
  width: 100%;
  max-height: 50%;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
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
  @media ${device.mobileS} {
    padding: 8px;
  }
`;
const ColProduct = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;
const ColBtnCart = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Title = styled.span<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextDetail = styled.span`
  font-family: "Manrope", serif;
  font-weight: 200;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textP2};
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.span`
  font-family: "Manrope", serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 23px;
`;
const DeprecatedPrice = styled.span`
  font-family: "Manrope", serif;
  font-weight: 200;
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  color: ${(props) => props.theme.colors.textP4};
  line-height: 23px;
  margin-left: 3px;
  text-decoration: line-through;
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
};
