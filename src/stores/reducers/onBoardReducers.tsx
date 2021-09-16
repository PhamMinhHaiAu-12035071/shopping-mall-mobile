import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const ONBOARD_STEP = "ONBOARD_STEP";

export interface Step {
  isCompleted: boolean;
}

const initialState: Step = {
  isCompleted: false,
};

const onBoardSlice = createSlice({
  name: ONBOARD_STEP,
  initialState,
  reducers: {
    stepCompleted: (state: Step) => {
      state.isCompleted = true;
      return state;
    },
  },
  extraReducers: (builder) => {},
});

export const selectStepComplete = (state: RootState): boolean =>
  state.onBoard.isCompleted;
export const { stepCompleted } = onBoardSlice.actions;
const { reducer } = onBoardSlice;
export default reducer;
