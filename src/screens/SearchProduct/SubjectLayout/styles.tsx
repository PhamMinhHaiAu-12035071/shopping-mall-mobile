import styled, { DefaultTheme } from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
`;
const WrapperTitle = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 14px;
  box-sizing: border-box;
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font16}px;
  line-height: 20.08px;
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.sortByTextColor};
`;

export { Container, WrapperTitle };
