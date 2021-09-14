import styled, { css, DefaultTheme } from "styled-components";
import { device } from "../../../../constants/devices";

const CSSText = css`
  text-align: center;
  line-height: 30px;
`;
const Container = styled.div`
  padding-left: 12%;
  padding-right: 12%;
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
  flex: 1 1 25%;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media ${device.mobileS} {
    max-width: 80%;
  }
  @media ${device.mobileM} {
    max-width: 90%;
  }
`;
const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  ${CSSText};
  font-size: ${(props) => props.theme.typography.mediumTitle}px;
  margin-top: 16px;
`;

const Description = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope", serif;
  ${CSSText};
  font-size: ${(props) => props.theme.typography.displayTitle1}px;
  height: 90px;
  opacity: 0;
`;
const Header = styled.div`
  flex: 0 1 14%;
`;
const WrapperContent = styled.div`
  flex: 1 1 25%;
`;

export {
  Container,
  WrapperImage,
  Title,
  Description,
  Header,
  WrapperContent,
  Image,
};
