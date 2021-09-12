import React from "react";
import { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";
import { BottomIcon } from "./styles";

interface Props extends BottomNavigationActionProps {}

function Icon(props: Props) {
  return <BottomIcon {...props} />;
}

export default Icon;
