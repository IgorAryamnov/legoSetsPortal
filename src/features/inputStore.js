import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "inputStore",
  initialState: {
    inputStore: "",
  },
  reducers: {
    changeInput: (state, action) => {
      state.inputStore = action.payload;
    },
  },
});

export const { changeInput } = inputSlice.actions;

export default inputSlice.reducer;
