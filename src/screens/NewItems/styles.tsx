import styled, {DefaultTheme} from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;
const WrapperHeader = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 60px;
  padding-top: 5px;
  box-sizing: border-box;
  box-shadow: inset 0px -1px 0px ${props => props.theme.colors.headerBorderBottomColor};
`;
const WrapperSearch = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: calc(100% - 40px);
  height: 50px;
`;
const WrapperTabs = styled.div`
  margin-top: 20px;
`;

const WrapperList = styled.div``;
export {
    Container,
    WrapperHeader,
    WrapperSearch,
    WrapperTabs,
    WrapperList
}
