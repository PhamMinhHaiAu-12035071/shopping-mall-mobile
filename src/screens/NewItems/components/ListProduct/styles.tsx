import styled, {DefaultTheme} from 'styled-components';

const Container = styled.div`
  padding-left: 22px;
  padding-top: 22px;
  width: 100%;
  height: 820px;
  box-sizing: border-box;
`;
const WrapperItemProduct = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid ${props => props.theme.colors.pageNewItemsColor.itemBorderColor};
  border-radius: 20px;
`;
const styledMasonry = {
    paddingBottom: 300,
}
export {
    Container,
    WrapperItemProduct,
    styledMasonry
}
