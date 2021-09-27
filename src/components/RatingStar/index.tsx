import React from "react";
import { RatingStarIcon } from "./styles";

interface Props {
  rating?: number;
  setRating?: (rating: number) => void;
  size: number;
  color: string;
}

const defaultProps = {
  rating: 5,
};

function RatingStar(props: Props) {
  const { rating, setRating, size, color } = props;
  const onChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (setRating && typeof newValue === "number") {
      setRating(newValue);
    }
  };
  return (
    <RatingStarIcon
      value={rating}
      onChange={onChange}
      sizeStar={size}
      color={color}
    />
  );
}

RatingStar.defaultProps = defaultProps;

export default RatingStar;
