import React from "react";
import { SlideTransition } from "./styles";
import { useHistory } from "react-router-dom";

function SearchResults() {
  const history = useHistory();
  const goBack = () => history.replace("/search");
  return (
    <SlideTransition>
      <h1>this is search results page</h1>
      <button onClick={goBack}>goBack</button>
    </SlideTransition>
  );
}

export default SearchResults;
