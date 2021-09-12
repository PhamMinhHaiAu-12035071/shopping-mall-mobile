import styled, { css, DefaultTheme } from "styled-components";
import { device } from "../../../../constants/devices";

const cssText = css<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  font-weight: ${(props) => props.theme.fontWeight.fwBold};
  text-transform: capitalize;
`;

const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  width: calc(100% - 40px);
  height: 150px;
  border-radius: 15px;
  background-image: url("https://mynorthwest.com/wp-content/uploads/2019/07/Heritage_Top5FoodDrinkpodcasts_620x370.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3),
    rgba(0, 0, 0, 0.15)
  );
`;
const Banner = styled.div`
  position: absolute;
  top: 20%;
  left: 20px;
  width: 35%;
  height: 54%;
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    width: 50%;
  }
`;

const TextApp = styled.span<{ theme: DefaultTheme }>`
  ${cssText};
  font-size: ${(props) => props.theme.typography.displayTitle2}px;
  color: ${(props) => props.theme.colors.textH1};
  line-height: 23px;
`;
const HashTag = styled.span<{ theme: DefaultTheme }>`
  ${cssText};
  font-size: ${(props) => props.theme.typography.displayTitle3}px;
  line-height: 26px;
  color: ${(props) => props.theme.colors.mainThee};
`;
export { Container, Banner, TextApp, HashTag, Layer };
