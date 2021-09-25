import React from "react";
import { HomeFabIcon } from "./styles";

export interface Props {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactElement;
  animate: string;
  variants: any;
  initial: string;
}

function HomeHeaderIcon(props: Props) {
  const { onClick, children, ...rest } = props;
  const pressButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <HomeFabIcon aria-label="home-icon" onClick={pressButton} {...rest}>
      {children}
    </HomeFabIcon>
  );
}

export default HomeHeaderIcon;
