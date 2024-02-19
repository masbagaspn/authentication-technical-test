import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import authReducer from "./features/auth/authSlice";
import themeReducer from "./features/theme/themeSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      user: authReducer,
      theme: themeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
