import React from "react";
import { motion } from "framer-motion";
import { DefaultTheme, withTheme } from "styled-components";

interface Props {
  isChecked: boolean;
  theme: DefaultTheme;
}

function MenuSvg(props: Props) {
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
      width="25"
      height="27"
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M22.3094 20.9951H22.2203V1.8457C22.2203 0.82793 21.2816 0 20.1276 0H4.8724C3.71843 0 2.7797 0.82793 2.7797 1.8457V20.9951H2.69062C1.20719 20.9951 0 22.0593 0 23.3682V25.6816C0 26.4088 0.67086 27 1.49479 27H23.5052C24.3291 27 25 26.4088 25 25.6816V23.3682C25 22.0593 23.7928 20.9951 22.3094 20.9951ZM4.57345 1.8457C4.57345 1.70016 4.70738 1.58203 4.8724 1.58203H20.1276C20.2926 1.58203 20.4266 1.70016 20.4266 1.8457V20.9951H4.57345V1.8457ZM23.2063 25.418H1.79374V23.3682C1.79374 22.9321 2.19614 22.5772 2.69062 22.5772H22.3094C22.8039 22.5772 23.2063 22.9321 23.2063 23.3682V25.418Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
      <motion.path
        d="M11.9715 7.17407H7.2311C6.73579 7.17407 6.33423 7.57563 6.33423 8.07094C6.33423 8.56626 6.73579 8.96782 7.2311 8.96782H11.9714C12.4667 8.96782 12.8683 8.56626 12.8683 8.07094C12.8683 7.57563 12.4668 7.17407 11.9715 7.17407Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
      <motion.path
        d="M17.7687 7.17407H16.1742C15.6789 7.17407 15.2773 7.57563 15.2773 8.07094C15.2773 8.56626 15.6789 8.96782 16.1742 8.96782H17.7687C18.264 8.96782 18.6655 8.56626 18.6655 8.07094C18.6655 7.57563 18.264 7.17407 17.7687 7.17407Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
      <motion.path
        d="M11.9715 12.7585H7.2311C6.73579 12.7585 6.33423 13.1601 6.33423 13.6554C6.33423 14.1507 6.73579 14.5523 7.2311 14.5523H11.9714C12.4667 14.5523 12.8683 14.1507 12.8683 13.6554C12.8683 13.1601 12.4668 12.7585 11.9715 12.7585Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
      <motion.path
        d="M17.7687 12.7585H16.1742C15.6789 12.7585 15.2773 13.1601 15.2773 13.6554C15.2773 14.1507 15.6789 14.5523 16.1742 14.5523H17.7687C18.264 14.5523 18.6655 14.1507 18.6655 13.6554C18.6655 13.1601 18.264 12.7585 17.7687 12.7585Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
      <motion.path
        d="M11.9715 18.3428H7.2311C6.73579 18.3428 6.33423 18.7443 6.33423 19.2396C6.33423 19.735 6.73579 20.1365 7.2311 20.1365H11.9714C12.4667 20.1365 12.8683 19.735 12.8683 19.2396C12.8683 18.7443 12.4668 18.3428 11.9715 18.3428Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
      <motion.path
        d="M17.7687 18.3428H16.1742C15.6789 18.3428 15.2773 18.7443 15.2773 19.2396C15.2773 19.735 15.6789 20.1365 16.1742 20.1365H17.7687C18.264 20.1365 18.6655 19.735 18.6655 19.2396C18.6655 18.7443 18.264 18.3428 17.7687 18.3428Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
    </motion.svg>
  );
}

export default withTheme(MenuSvg);
