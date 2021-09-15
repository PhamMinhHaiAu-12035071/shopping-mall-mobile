import styled, { DefaultTheme } from "styled-components";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";

interface ProgressProps extends CircularProgressProps {
  theme: DefaultTheme;
}

const Container = styled.div<{ theme: DefaultTheme }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
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
  font-family: "Gill Sans", sans-serif;
  font-weight: 700;
  font-size: 29px;
  line-height: 39.61px;
`;
const NameApp = styled.span`
  font-family: "Gill Sans", sans-serif;
  font-weight: 200;
  font-size: 18px;
  line-height: 24.69px;
`;
const Absolute = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  transform: translateX(-50%);
`;
const Loading = styled(CircularProgress).attrs({
  disableShrink: true,
})<ProgressProps>`
  color: ${(props) => props.theme.colors.mainOne};
`;
export { Container, Row, ColText, TextLogo, NameApp, Absolute, Loading };
