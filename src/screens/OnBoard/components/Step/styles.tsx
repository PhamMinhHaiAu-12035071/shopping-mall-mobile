import styled, { css, DefaultTheme } from "styled-components";

const CSSText = css`
  text-align: center;
  line-height: 30px;
`;
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
const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope Bold", serif;
  ${CSSText};
  font-size: ${(props) => props.theme.typography.mediumTitle}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div<{ theme: DefaultTheme }>`
  font-family: "Manrope", serif;
  ${CSSText};
  font-size: ${(props) => props.theme.typography.displayTitle1}px;
  height: 90px;
  opacity: 0;
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
const WrapperContent = styled.div`
  width: 76%;
`;
export {
  Container,
  WrapperImage,
  Title,
  Description,
  Footer,
  FlexContent,
  WrapperContent,
};
