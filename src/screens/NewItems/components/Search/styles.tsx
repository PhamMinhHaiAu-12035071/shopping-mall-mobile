import styled, {css, DefaultTheme} from 'styled-components';
import {Grid, IconButton, SvgIcon, TextField} from "@material-ui/core";

const SvgIconSearch = styled(SvgIcon).attrs({
    viewBox: "0 0 18 17",
})`
  font-size: 24px;
`;
const InputSearch = styled(TextField).attrs({
    id: "search-product",
    type: "text",
    variant: "standard",
    autoComplete: "on",
})<{ theme: DefaultTheme }>`
  width: 100%;
  background-color: ${(props) =>
          props.theme.colors.pageNewItemsColor.inputSearchColor};
  ${props => props.theme.colors.pageNewItemsColor.inputSearchBorderColor !== 'transparent' && css`
    border: 1px solid ${props => props.theme.colors.pageNewItemsColor.inputSearchBorderColor};
  `};
  border-radius: 9px;

  & input#search-product {
    padding: 6px 20px 7px 20px;
    font-family: "Gilroy-Regular", sans-serif;
    font-size: ${props => props.theme.typography.font16}px;
    line-height: 18.75px;
    color: ${props => props.theme.colors.pageNewItemsColor.placeholderColor};
  }
`;

const WrapperGridIcon = styled(Grid).attrs({
    container: true,
    wrap: "nowrap"
})`
  max-width: 100px;
`;

const IconSearch = styled(IconButton)`
  :hover {
    background-color: ${(props) =>
            props.theme.colors.pageNewItemsColor.iconSearchHoverColor};
  }

  & .MuiTouchRipple-root {
    color: ${(props) =>
            props.theme.colors.pageNewItemsColor.iconSearchColor};
  }
`;

export {
    WrapperGridIcon,
    SvgIconSearch,
    InputSearch,
    IconSearch
}
