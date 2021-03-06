import React from "react";
import { motion } from "framer-motion";
import { DefaultTheme, withTheme } from "styled-components";

interface Props {
  isChecked: boolean;
  theme: DefaultTheme;
}

function SaveSvg(props: Props) {
  const { isChecked, theme } = props;
  const variants = {
    open: {
      fill: theme.colors.bottomNavigatorColor.iconActiveColor,
      transition: { duration: 0.25 },
    },
    closed: {
      fill: theme.colors.bottomNavigatorColor.iconDisabledColor,
      transition: { duration: 0.25 },
    },
  };
  return (
    <motion.svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M20.4159 0H3.58407C1.60779 0 0 1.60779 0 3.58407V27.1858L9.21239 22.5796L18.4248 27.1858V14.3894H24V3.58407C24 1.60779 22.3922 0 20.4159 0ZM16.8319 3.58407V24.6084L9.21239 20.7987L1.59292 24.6084V3.58407C1.59292 2.48612 2.48612 1.59292 3.58407 1.59292H17.4372C17.055 2.16276 16.8319 2.84793 16.8319 3.58407ZM22.4071 12.7965H18.4248V3.58407C18.4248 2.48612 19.318 1.59292 20.4159 1.59292C21.5139 1.59292 22.4071 2.48612 22.4071 3.58407V12.7965Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
    </motion.svg>
  );
}

export default withTheme(SaveSvg);
