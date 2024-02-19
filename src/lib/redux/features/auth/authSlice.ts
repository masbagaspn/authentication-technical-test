import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  user: Partial<User> | null;
};

const authState: AuthState = {
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlicer.actions;

export default authSlicer.reducer;
