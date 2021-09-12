import styled, { DefaultTheme } from "styled-components";

const Container = styled.div<{ theme: DefaultTheme }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f47458;
`;
const Row = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const ColText = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const TextLogo = styled.span`
  font-weight: 700;
  font-size: 29px;
  line-height: 39.61px;
  color: white;
`;
const NameApp = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 24.69px;
  color: white;
`;

export { Container, Row, ColText, TextLogo, NameApp };
