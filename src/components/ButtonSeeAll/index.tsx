import React from "react";
import styled, {DefaultTheme, withTheme} from "styled-components";
import Button from "@material-ui/core/Button";
import {motion} from "framer-motion";

interface ButtonOutlineProps {
    theme: DefaultTheme;
    isSelected: boolean;
}

const ButtonOutline = styled(Button).attrs({
    component: motion.div,
})<ButtonOutlineProps>`
  border: 1px solid ${(props) =>
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
            props.isSelected
                    ? "transparent"
                    : props.theme.colors.searchProductScreenColor.buttonOutlineBorderColor};
  }
`;

interface Props {
    children: string | React.ReactElement;
    theme: DefaultTheme;
    isSelected: boolean;
    onClick?: () => void;
}

function ButtonSeeAll(props: Props) {
    const {children, theme, isSelected, onClick} = props;
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
        if (typeof onClick === "function") {
            onClick();
        }
    }
    const styledAnimate = {
        isSelected: isSelected,
        variants,
        animate: isSelected ? "visible" : "hidden",
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

export default withTheme(ButtonSeeAll);
