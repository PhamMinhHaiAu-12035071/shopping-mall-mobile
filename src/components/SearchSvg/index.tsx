import React from "react";

interface Props {
  color: string;
}

function SearchSvg(props: Props) {
  const { color } = props;
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.677 16.6071L9.96196 10.8911C8.73575 11.7629 7.22678 12.1422 5.73411 11.9538C4.24143 11.7654 2.87401 11.0231 1.90283 9.87405C0.931657 8.72497 0.427621 7.25297 0.490618 5.74977C0.553615 4.24658 1.17905 2.82191 2.24296 1.75812C3.30658 0.69387 4.73125 0.0680905 6.23455 0.0048227C7.73786 -0.0584451 9.21006 0.445417 10.3593 1.41653C11.5086 2.38765 12.2511 3.75513 12.4396 5.24792C12.6281 6.7407 12.2488 8.24981 11.377 9.47612L17.092 15.1921L15.678 16.6061L15.677 16.6071ZM6.48496 2.00012C5.56502 1.99991 4.67312 2.31679 3.95954 2.89739C3.24596 3.47798 2.75431 4.2868 2.56743 5.18755C2.38056 6.08831 2.50987 7.02596 2.93359 7.8425C3.35731 8.65905 4.04954 9.30459 4.89364 9.67036C5.73774 10.0361 6.68211 10.0998 7.56765 9.85054C8.45319 9.60133 9.22576 9.05449 9.7552 8.30217C10.2846 7.54985 10.5386 6.63803 10.4742 5.72035C10.4099 4.80266 10.0312 3.9352 9.40196 3.26412L10.007 3.86412L9.32496 3.18412L9.31296 3.17212C8.94254 2.79941 8.50184 2.50391 8.0164 2.30273C7.53096 2.10155 7.01043 1.9987 6.48496 2.00012Z"
        fill={color}
      />
    </svg>
  );
}

export default SearchSvg;
