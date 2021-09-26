import styled, { DefaultTheme } from "styled-components";

const Container = styled.div``;

const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight.fontBlack};
  font-size: ${(props) => props.theme.typography.font16}px;
  line-height: 20.08px;
  color: ${(props) =>
    props.theme.colors.searchProductScreenColor.sortByTextColor};
  margin-bottom: 20px;
`;
const WrapperBtnSeeAll = styled.div`
  margin-top: 8px;
`;
export { Container, Title, WrapperBtnSeeAll };
