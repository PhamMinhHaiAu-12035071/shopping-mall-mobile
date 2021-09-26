import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";

interface ButtonOutlineProps {
  theme: DefaultTheme;
  selected: boolean;
}

const ButtonOutline = styled(Button).attrs({
  component: motion.div,
})<ButtonOutlineProps>`
  border: 1px solid
    ${(props) =>
      props.theme.colors.searchProductScreenColor.buttonOutlineBorderColor};
  text-transform: none;
  height: 45px;
  border-radius: 8px;

  & .MuiButton-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    font-family: "Gilroy-Medium", sans-serif;
    font-size: ${(props) => props.theme.typography.font14}px;
    text-align: center;
  }

  & .MuiTouchRipple-root {
    transition: color 1s;
    color: ${(props) =>
      props.selected
        ? "transparent"
        : props.theme.colors.searchProductScreenColor.buttonOutlineBorderColor};
  }
`;

interface Props {
  children: string | React.ReactElement;
  theme: DefaultTheme;
}

function ButtonCustom(props: Props) {
  const { children, theme } = props;
  const [selected, setSelected] = React.useState<boolean>(false);
  const variants = {
    visible: {
      backgroundColor:
        theme.colors.searchProductScreenColor.buttonOutlineBorderColor,
      color: "white",
    },
    hidden: {
      backgroundColor: "transparent",
      color: theme.colors.searchProductScreenColor.buttonOutlineTextColor,
    },
  };
  const handleClick = () => {
    setSelected(!selected);
  };
  const styledAnimate = {
    selected,
    variants,
    animate: selected ? "visible" : "hidden",
  };
  return (
    <ButtonOutline
      variant="outlined"
      fullWidth={true}
      onClick={handleClick}
      {...styledAnimate}
    >
      {children}
    </ButtonOutline>
  );
}

export default withTheme(ButtonCustom);
