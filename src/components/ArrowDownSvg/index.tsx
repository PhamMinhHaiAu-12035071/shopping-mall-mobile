import React from "react";

interface Props {
  color: string;
}

function ArrowDownSvg(props: Props) {
  const { color } = props;
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99999 9.16699L17.3333 0.833658L0.666656 0.833658L8.99999 9.16699Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowDownSvg;
