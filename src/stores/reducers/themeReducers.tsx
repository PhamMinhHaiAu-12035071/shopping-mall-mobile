import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DefaultTheme } from "styled-components";
import { orangeTheme } from "../../themes";
import greenTheme from "../../themes/greenTheme";

export const THEME = "THEME";

export interface Theme {
  name: string;
  value: DefaultTheme;
}

export const storeThemes: Array<Theme> = [
  {
    name: "orange",
    value: orangeTheme,
  },
  {
    name: "green",
    value: greenTheme,
  },
];

const initialState: Theme = storeThemes[0];

const themeSlice = createSlice({
  name: THEME,
  initialState,
  reducers: {
    setTheme: (state: Theme, action: PayloadAction<string>) => {
      const findIndex = storeThemes.findIndex(
        (item: Theme) => item.name === action.payload
      );
      if (findIndex !== -1) {
        state.name = storeThemes[findIndex].name;
        state.value = storeThemes[findIndex].value;
      }
      return state;
    },
  },
  extraReducers: (builder) => {},
});

export const selectTheme = (state: RootState): DefaultTheme =>
  state.theme.value;
export const selectNameTheme = (state: RootState): string => state.theme.name;
export const { setTheme } = themeSlice.actions;
const { reducer } = themeSlice;
export default reducer;
