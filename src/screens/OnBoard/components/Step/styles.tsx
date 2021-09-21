import styled, { css, DefaultTheme } from "styled-components";
import { device } from "../../../../constants/devices";

interface ImageProps {
  width: number;
}

const ratio = 556 / 512;

interface WrapperContentProps {
  width: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 50%;
`;
const Image = styled.img<ImageProps>`
  width: ${(props) => props.width * 0.76}px;
  height: ${(props) => props.width * 0.76 * ratio}px;
  @media ${device.mobileS} {
    width: ${(props) => props.width * 0.6}px;
    height: ${(props) => props.width * 0.6 * ratio}px;
  }
`;
const Title = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  font-family: "Mullish", sans-serif;
  font-weight: 900;
  text-align: center;
  font-size: ${(props) => props.theme.typography.displayExtraLargeTitle}px;
  line-height: 31.38px;
  letter-spacing: -0.33px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  line-height: 30px;
  letter-spacing: 0.005em;
  text-align: center;
  height: 90px;
  opacity: 0;
  transition: opacity 0.5s;
`;
const Footer = styled.div`
  flex: 0 0 15%;
  max-height: 15%;
`;
const FlexContent = styled.div`
  padding-top: 8%;
  padding-bottom: 8%;
  flex: 0 1 85%;
  max-height: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
`;
const WrapperContent = styled.div<WrapperContentProps>`
  width: ${(props) => props.width * 0.8}px;
  height: 140px;
  max-height: 140px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
export {
  Container,
  WrapperImage,
  Title,
  Description,
  Footer,
  FlexContent,
  WrapperContent,
  Image,
};
