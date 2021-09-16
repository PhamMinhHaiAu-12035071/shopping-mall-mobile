import { combineReducers } from "@reduxjs/toolkit";
import onBoardReducers from "./onBoardReducers";

export default combineReducers({
  onBoard: onBoardReducers,
});
