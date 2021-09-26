import React from "react";

interface Props {
  color: string;
}

function RefreshSvg(props: Props) {
  const { color } = props;
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4952 3.8335C10.0608 3.83154 8.65468 4.232 7.43656 4.98937C6.21845 5.74674 5.23723 6.83065 4.60443 8.11789C3.97164 9.40513 3.71264 10.8441 3.8569 12.2712C4.00115 13.6983 4.54285 15.0563 5.42044 16.1909C6.29804 17.3254 7.47631 18.1911 8.82135 18.6893C10.1664 19.1876 11.6242 19.2986 13.0292 19.0096C14.4342 18.7207 15.7299 18.0434 16.7691 17.0547C17.8083 16.066 18.5493 14.8057 18.9079 13.4168H16.9136C16.5622 14.4108 15.9443 15.289 15.1274 15.9555C14.3105 16.622 13.3261 17.051 12.2818 17.1957C11.2375 17.3405 10.1735 17.1953 9.20613 16.7761C8.23878 16.3569 7.4053 15.6798 6.79682 14.8188C6.18834 13.9579 5.82828 12.9462 5.756 11.8944C5.68372 10.8426 5.902 9.79117 6.38699 8.85507C6.87197 7.91897 7.60499 7.13422 8.5059 6.58663C9.40681 6.03903 10.4409 5.74967 11.4952 5.75017C12.2493 5.75127 12.9956 5.9027 13.6905 6.19559C14.3854 6.48849 15.0149 6.91697 15.5422 7.456L12.4583 10.5418H19.1667V3.8335L16.9136 6.08559C16.2037 5.37132 15.3594 4.8046 14.4295 4.41809C13.4995 4.03157 12.5023 3.83289 11.4952 3.8335Z"
        fill={color}
      />
    </svg>
  );
}

export default RefreshSvg;
