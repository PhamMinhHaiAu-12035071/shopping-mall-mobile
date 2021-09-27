import styled from "styled-components";
import Rating, { RatingProps } from "@material-ui/lab/Rating";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import React from "react";

interface RatingStarIconProps extends RatingProps {
  sizeStar: number;
  color: string;
}

const RatingStarIcon = styled(Rating).attrs({
  name: "customized-icon",
  precision: 1,
  icon: <StarRoundedIcon fontSize="inherit" />,
  emptyIcon: <StarRoundedIcon fontSize="inherit" />,
})<RatingStarIconProps>`
  font-size: ${(props) => props.sizeStar}px;
  color: ${(props) => props.color};
`;

export { RatingStarIcon };
