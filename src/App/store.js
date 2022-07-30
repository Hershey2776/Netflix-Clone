import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import stateReducer from "../features/stateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    state: stateReducer,
  },
});
