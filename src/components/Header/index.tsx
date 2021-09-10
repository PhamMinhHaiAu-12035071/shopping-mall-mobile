import React, { ReactSVGElement } from "react";
import { Container, LeftIcon, RightIcon, Title } from "./styles";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

interface Props {
  headerLeft?: React.FC<ReactSVGElement> | React.ReactElement;
  title?: string;
  headerTitleStyle?: React.CSSProperties;
  headerRight?: React.FC<ReactSVGElement> | React.ReactElement;
  headerStyle?: React.CSSProperties;
  onBack?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const defaultProps: Props = {
  title: "This is Title",
  headerTitleStyle: {},
  headerStyle: {},
};

function Header(props: Props) {
  const { headerLeft, onBack, title, headerRight } = props;

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
  return (
    <Container>
      <LeftIcon>{renderBackIcon()}</LeftIcon>
      <Title>
        <div>{title}</div>
      </Title>
      <RightIcon>{headerRight}</RightIcon>
    </Container>
  );
}

Header.defaultProps = defaultProps;

export default Header;
