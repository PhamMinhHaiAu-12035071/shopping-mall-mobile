import React from "react";
import { motion } from "framer-motion";

interface Props {
  isChecked: boolean;
}

function ProfileSvg(props: Props) {
  const { isChecked } = props;
  const variants = {
    open: { fill: "#F47458", transition: { duration: 0.25 } },
    closed: { fill: "#828282", transition: { duration: 0.25 } },
  };
  return (
    <motion.svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M21.3388 3.66116C18.9779 1.30024 15.8388 0 12.5 0C9.161 0 6.02207 1.30024 3.66116 3.66116C1.30024 6.02207 0 9.161 0 12.5C0 15.8388 1.30024 18.9779 3.66116 21.3388C6.02207 23.6998 9.161 25 12.5 25C15.8388 25 18.9779 23.6998 21.3388 21.3388C23.6998 18.9779 25 15.8388 25 12.5C25 9.161 23.6998 6.02207 21.3388 3.66116ZM6.26659 21.6009C6.7894 18.5907 9.39789 16.3704 12.5 16.3704C15.6023 16.3704 18.2106 18.5907 18.7334 21.6009C16.9586 22.8203 14.8113 23.5352 12.5 23.5352C10.1887 23.5352 8.04138 22.8203 6.26659 21.6009ZM8.52547 10.931C8.52547 8.73928 10.3085 6.95648 12.5 6.95648C14.6915 6.95648 16.4745 8.73947 16.4745 10.931C16.4745 13.1226 14.6915 14.9055 12.5 14.9055C10.3085 14.9055 8.52547 13.1226 8.52547 10.931ZM20.0022 20.5849C19.6079 19.1835 18.825 17.9121 17.7275 16.9189C17.0542 16.3095 16.2878 15.8287 15.4638 15.4898C16.9531 14.5184 17.9396 12.8378 17.9396 10.931C17.9396 7.93171 15.4993 5.49164 12.5 5.49164C9.50069 5.49164 7.06062 7.93171 7.06062 10.931C7.06062 12.8378 8.0471 14.5184 9.53617 15.4898C8.71239 15.8287 7.94582 16.3094 7.27253 16.9188C6.17523 17.9119 5.39207 19.1833 4.99783 20.5847C2.82631 18.568 1.46484 15.6902 1.46484 12.5C1.46484 6.41518 6.41518 1.46484 12.5 1.46484C18.5848 1.46484 23.5352 6.41518 23.5352 12.5C23.5352 15.6904 22.1737 18.5682 20.0022 20.5849Z"
        fill="#828282"
        variants={variants}
        animate={isChecked ? "open" : "closed"}
      />
    </motion.svg>
  );
}

export default ProfileSvg;
