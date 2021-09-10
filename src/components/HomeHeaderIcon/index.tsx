import React from "react";
import { useStyles } from "./styles";
import Fab from "@material-ui/core/Fab";
import { DefaultTheme, withTheme } from "styled-components";

export interface Props {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  theme: DefaultTheme;
  children: React.ReactElement<any>;
}

function HomeHeaderIcon(props: Props) {
  const classes = useStyles(props);
  const { onClick, children } = props;
  const pressButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <div className={classes.homeIcon}>
      <Fab aria-label="menu-icon" onClick={pressButton}>
        {children}
      </Fab>
    </div>
  );
}

export default withTheme(HomeHeaderIcon);
