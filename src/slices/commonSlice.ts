import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../redux/store";

export interface CommonState {
  accessToken: string | null;
  showErrorPage: boolean;
}

const initialState: CommonState = {
  accessToken: "",
  showErrorPage: false,
};

export const layoutSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setShowErrorPage: (state, action: PayloadAction<boolean>) => {
      state.showErrorPage = action.payload;
    },
  },
});

export const { setAccessToken, setShowErrorPage } = layoutSlice.actions;

export const selectAccessToken = (state: AppState) => state.common.accessToken;
export const selectShowErrorPage = (state: AppState) =>
  state.common.showErrorPage;

export default layoutSlice.reducer;
