import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isIconMenuOpen: true,
    videoResult: [],
  },
  reducers: {
    menuToggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    menuToggleMain: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    iconMenuOpen: (state, action) => {
      state.isIconMenuOpen = action.payload;
    },
    videoResultStore: (state, action) => {
      state.videoResult = action.payload;
    },
  },
});

export const { menuToggle, iconMenuOpen, menuToggleMain, videoResultStore } =
  appSlice.actions;
export default appSlice.reducer;
