import React from "react";
import { HomeFabIcon } from "./styles";

export interface Props {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactElement;
}

function HomeHeaderIcon(props: Props) {
  const { onClick, children } = props;
  const pressButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <HomeFabIcon aria-label="home-icon" onClick={pressButton}>
      {children}
    </HomeFabIcon>
  );
}

export default HomeHeaderIcon;
