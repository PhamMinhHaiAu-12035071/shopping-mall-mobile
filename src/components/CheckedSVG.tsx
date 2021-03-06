import React from "react";

interface Props {
  color: string;
}

function CheckedSVG(props: Props) {
  const { color } = props;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5721 0.386062C23.0002 -0.128659 22.0743 -0.128701 21.5024 0.38602L7.68235 12.8207L2.49768 8.15576C1.92576 7.64104 0.999928 7.641 0.427958 8.15572C-0.142653 8.66918 -0.142653 9.50457 0.427958 10.0179L6.64754 15.6141C7.21937 16.1286 8.14534 16.1287 8.71721 15.6141L23.5721 2.24824C24.1426 1.73482 24.1426 0.899391 23.5721 0.386062Z"
        fill={color}
      />
    </svg>
  );
}

export default CheckedSVG;
