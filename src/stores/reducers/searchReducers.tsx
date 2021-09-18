import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const RECENT_SEARCH = "RECENT_SEARCH";

export interface ListRecentSearch {
  list: Array<string>;
}

const initialState: ListRecentSearch = {
  list: Array.from(
    { length: 9999 },
    (_, i) => `Recent search ${String(i + 1)}`
  ),
};

const recentSearchSlice = createSlice({
  name: RECENT_SEARCH,
  initialState,
  reducers: {
    addHistorySearch: (
      state: ListRecentSearch,
      action: PayloadAction<string>
    ) => {
      const findIndex = state.list.indexOf(action.payload);
      if (findIndex === -1) {
        state.list = [action.payload, ...state.list];
      }
      return state;
    },
  },
  extraReducers: (builder) => {},
});

export const selectListRecentSearch = (state: RootState): Array<string> =>
  state.search.list;
export const { addHistorySearch } = recentSearchSlice.actions;
const { reducer } = recentSearchSlice;
export default reducer;
