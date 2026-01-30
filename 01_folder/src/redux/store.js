import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice";

// slices is features
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
