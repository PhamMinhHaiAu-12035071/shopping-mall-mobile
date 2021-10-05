import styled, {DefaultTheme} from "styled-components";
import {IconButton} from "@material-ui/core";

const IconButtonBack = styled(IconButton)`
  margin-left: 10px;
`;
const TitleHeader = styled.div<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${props => props.theme.fontWeight.fontBlack};
  font-size: ${props => props.theme.typography.font18}px;
  line-height: 18px;
`;

export {
    IconButtonBack,
    TitleHeader,
}
