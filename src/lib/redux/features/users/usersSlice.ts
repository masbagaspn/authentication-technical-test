import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types";

type UsersState = {
  users: User[];
};

const usersState: UsersState = {
  users: [],
};

const authSlice = createSlice({
  name: "users",
  initialState: usersState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    updateUser: (state, action) => {
      const { payload } = action;

      state.users.map((user) =>
        user.username === payload.username ? payload : user
      );
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
