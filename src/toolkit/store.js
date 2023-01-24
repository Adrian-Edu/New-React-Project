import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../toolkit/reducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
