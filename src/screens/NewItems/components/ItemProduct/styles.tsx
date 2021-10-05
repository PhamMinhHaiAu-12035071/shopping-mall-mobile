import styled, {DefaultTheme} from 'styled-components';
import {Grid} from "@material-ui/core";

const GridContainer = styled(Grid)`
  box-sizing: border-box;
`;
const GridContent = styled(Grid)`
  padding-left: 15px;
  padding-right: 12px;
  padding-bottom: 12px;
`;
const GridImage = styled(Grid)`
  padding-top: 30px;
  padding-bottom: 20px;
`
const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${props => props.theme.typography.font16}px;
  line-height: 18.75px;
  color: ${props => props.theme.colors.pageNewItemsColor.itemTitleColor};
`;
const Mass = styled.div<{ theme: DefaultTheme }>`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${props => props.theme.typography.font14}px;
  line-height: 16.41px;
  color: ${props => props.theme.colors.pageNewItemsColor.itemMassColor};

`;
const Price = styled.div<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${props => props.theme.fontWeight.fontBlack};
  font-size: ${props => props.theme.typography.font16}px;
  line-height: 20.08pX;
  color: ${props => props.theme.colors.pageNewItemsColor.itemPriceColor};

`
export {
    GridContainer,
    Title,
    Mass,
    Price,
    GridContent,
    GridImage
}
