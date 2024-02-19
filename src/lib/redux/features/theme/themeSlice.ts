import { createSlice } from "@reduxjs/toolkit";

const themeState = {
  scheme: "blue",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeState,
  reducers: {
    changeScheme: (state) => {
      state.scheme = state.scheme === "blue" ? "orange" : "blue";
    },
  },
});

export const { changeScheme } = themeSlice.actions;

export default themeSlice.reducer;
