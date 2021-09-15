import React from "react";
import OnBoard from "../OnBoard";
import Home from "../Home";

function HomeAndOnBoard() {
  const [isStep, setIsStep] = React.useState<boolean>(true);

  if (isStep) {
    return <OnBoard setIsStep={setIsStep} />;
  }
  return <Home />;
}

export default HomeAndOnBoard;
