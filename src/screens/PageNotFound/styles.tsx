import styled, {DefaultTheme} from 'styled-components';
import SvgIcon from "@material-ui/core/SvgIcon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
const Header = styled.div<{ theme: DefaultTheme }>`
  height: 60px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.colors.pageNotFoundColor.headerBorderBottomColor};
`;
const Circle = styled.div<{ theme: DefaultTheme }>`
  width: 280px;
  height: 280px;
  border-radius: 144px;
  background-color: ${props => props.theme.colors.pageNotFoundColor.circleColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SvgIconCustom = styled(SvgIcon)`
  font-size: 240px;
`;
const WrapperContent = styled.div`
  flex-basis: 80%;
  flex-shrink: 0;
  flex-grow: 1;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const WrapperText = styled.div`
  width: 300px;
`;
const Title = styled.div<{ theme: DefaultTheme }>`
  font-family: "Mullish", sans-serif;
  font-weight: ${props => props.theme.fontWeight.fontBlack};
  font-size: ${props => props.theme.typography.font24}px;
  line-height: 30.12px;
  text-align: center;
  color: ${props => props.theme.colors.pageNotFoundColor.titleColor};
`;
const WrapperDescription = styled.div`
  margin-top: 15px;
`;
const Description = styled.div`
  font-family: "Gilroy-Medium", sans-serif;
  font-size: ${props => props.theme.typography.font16}px;
  line-height: 22.4px;
  text-align: center;
  color: ${props => props.theme.colors.pageNotFoundColor.descriptionColor};
`;
const WrapperButton = styled.div`
  flex-basis: 20%;
  flex-shrink: 1;
  max-height: 20%;
`;
export {
    Container,
    Header,
    Circle,
    WrapperContent,
    WrapperButton,
    SvgIconCustom,
    Title,
    Description,
    WrapperText,
    WrapperDescription
}

