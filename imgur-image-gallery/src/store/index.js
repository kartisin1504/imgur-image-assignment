import { createSlice } from "@reduxjs/toolkit";

export const changeSlice = createSlice({
  name: "update",
  initialState: {
    userVal: "",
  },
  reducers: {
    changeByUser: (state, action) => {
      state.userVal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeByUser } = changeSlice.actions;

export default changeSlice.reducer;
