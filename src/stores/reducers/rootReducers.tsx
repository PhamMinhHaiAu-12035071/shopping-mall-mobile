import { combineReducers } from "@reduxjs/toolkit";
import onBoardReducers from "./onBoardReducers";
import searchReducers from "./searchReducers";
import themeReducers from "./themeReducers";

export default combineReducers({
  onBoard: onBoardReducers,
  search: searchReducers,
  theme: themeReducers,
});
