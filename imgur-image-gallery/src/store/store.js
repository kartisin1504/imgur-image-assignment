import { configureStore } from "@reduxjs/toolkit";
import changeSlice from "./index";

export default configureStore({
  reducer: {
    update: changeSlice,
  },
});
