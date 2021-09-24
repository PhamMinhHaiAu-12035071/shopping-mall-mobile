import styled, { DefaultTheme } from "styled-components";
import { device } from "../../../../constants/devices";

interface ImageProps {
  width: number;
}

interface WrapperContentProps {
  width: number;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc(100% - 140px);
`;

const Image = styled.img<ImageProps>`
  max-width: 100%;
  height: auto;
  transform: scale(0.76);
  @media ${device.mobileS} {
    transform: scale(0.56);
  }
`;
const Title = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  text-align: center;
  font-size: ${(props) =>
    props.theme.typography.onBoardScreenSize.titleFontSize}px;
  color: ${(props) => props.theme.colors.onBoardScreenColor.titleColor};
  line-height: 31.38px;
  letter-spacing: -0.33px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${(props) =>
    props.theme.typography.onBoardScreenSize.descriptionFontSize}px;
  color: ${(props) => props.theme.colors.onBoardScreenColor.descriptionColor};
  line-height: 22px;
  letter-spacing: 0.005em;
  text-align: center;
  height: 66px;
  opacity: 0;
  transition: opacity 0.5s;
`;
const Spacing = styled.div`
  height: 32px;
  @media ${device.mobileS} {
    height: 16px;
  }
`;
const Footer = styled.div<{ height: number }>`
  height: 102px;
  @media ${device.mobileS} {
    height: 86px;
  }
`;
const FlexContent = styled.div<{ height: number }>`
  height: calc(100% - 134px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  @media ${device.mobileS} {
    height: calc(100% - 102px);
  }
`;
const WrapperContent = styled.div<WrapperContentProps>`
  width: ${(props) => props.width * 0.8}px;
  height: 120px;
  max-height: 120px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
const SpacingContent = styled.div`
  height: 20px;
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
  Spacing,
  SpacingContent,
};
