import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "../pages/Widget/widgetSlice";

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
  },
});
