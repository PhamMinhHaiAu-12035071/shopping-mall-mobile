import styled, { DefaultTheme } from "styled-components";
import BannerImage from "../../../../assets/images/banner.png";

const Container = styled.div<{ theme: DefaultTheme }>`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  width: calc(100% - 40px);
  height: 180px;
  background-color: ${(props) =>
    props.theme.colors.homeScreenColor.bannerColor};
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Banner = styled.div`
  position: absolute;
  top: 28%;
  left: 20px;
  width: 100%;
  height: 54%;
  display: flex;
  flex-direction: column;
`;

const TextApp = styled.span<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-size: ${(props) => props.theme.typography.font20}px;
  font-weight: ${(props) => props.theme.fontWeight.fontBold};
  color: black;
  line-height: 25px;
`;
const HashTag = styled.span<{ theme: DefaultTheme }>`
  margin-top: 9px;
  font-family: "Mullish", sans-serif;
  font-size: ${(props) => props.theme.typography.font14}px;
  font-weight: ${(props) => props.theme.fontWeight.fontBold};
  line-height: 16px;
  color: ${(props) => props.theme.colors.homeScreenColor.hashTagColor};
`;
export { Container, Banner, TextApp, HashTag, Layer };
