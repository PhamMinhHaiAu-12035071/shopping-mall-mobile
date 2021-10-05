import {Tab, Tabs} from '@material-ui/core';
import styled, {DefaultTheme} from 'styled-components';

interface CustomTabProps {
    theme: DefaultTheme;
    width: number;
}

const WIDTH_SCROLL_BUTTON = 48;

const CustomTabs = styled(Tabs).attrs({
    variant: "scrollable",
    scrollButtons: "on",
    textColor: "primary",
    'aria-label': "scrollable force tabs example",
})<{ theme: DefaultTheme }>`
  & .MuiTabs-indicator {
    height: 48px;
    border-radius: 24px;
    background-color: ${props => props.theme.colors.pageNewItemsColor.backgroundTabSelected};
  }
`;

const CustomTab = styled(Tab)<CustomTabProps>`
  text-transform: none;
  font-family: "Mullish", sans-serif;
  font-weight: ${props => props.theme.fontWeight.fontBlack};
  font-size: ${props => props.theme.typography.font14}px;
  line-height: 17.57px;
  color: ${props => props.theme.colors.pageNewItemsColor.textTabNotSelected};
  max-width: ${props => (props.width - WIDTH_SCROLL_BUTTON / 2) / 3}px;
  box-sizing: border-box;

  & .MuiTab-wrapper {
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden
  }

  &.Mui-selected {
    color: ${props => props.theme.colors.pageNewItemsColor.textTabSelected};
    z-index: 1;
  }
`;

export {
    CustomTabs,
    CustomTab,
}
