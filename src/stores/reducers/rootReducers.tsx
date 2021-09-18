import { combineReducers } from "@reduxjs/toolkit";
import onBoardReducers from "./onBoardReducers";
import searchReducers from "./searchReducers";

export default combineReducers({
  onBoard: onBoardReducers,
  search: searchReducers,
});
