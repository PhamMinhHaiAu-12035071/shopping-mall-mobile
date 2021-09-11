import React, { ReactSVGElement } from "react";
import { Container, LeftIcon, RightIcon, Title } from "./styles";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

interface Props {
  headerLeft?: React.FC<ReactSVGElement> | React.ReactElement;
  title?: string;
  headerTitleStyle?: React.CSSProperties;
  headerTitle?: React.ReactElement;
  headerRight?: React.FC<ReactSVGElement> | React.ReactElement;
  headerStyle?: React.CSSProperties;
  onBack?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const defaultProps: Props = {
  title: "",
  headerTitleStyle: {},
  headerStyle: {},
};

function Header(props: Props) {
  const {
    headerLeft,
    onBack,
    title,
    headerRight,
    headerStyle,
    headerTitleStyle,
    headerTitle,
  } = props;

  const pressBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onBack === "function") {
      onBack(event);
    }
  };

  const renderBackIcon = () => {
    if (!headerLeft)
      return (
        <IconButton onClick={pressBack}>
          <ArrowBackIcon />
        </IconButton>
      );
    return headerLeft;
  };
  const renderTitle = () => {
    if (title !== "") {
      return <div style={headerTitleStyle}>{title}</div>;
    }
    return headerTitle;
  };
  return (
    <Container style={headerStyle}>
      <LeftIcon>{renderBackIcon()}</LeftIcon>
      <Title>{renderTitle()}</Title>
      <RightIcon>{headerRight}</RightIcon>
    </Container>
  );
}

Header.defaultProps = defaultProps;

export default Header;
