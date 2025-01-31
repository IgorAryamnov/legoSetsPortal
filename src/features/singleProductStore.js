import { createSlice } from "@reduxjs/toolkit";

export const singleProductSlice = createSlice({
  name: "singleProductStore",
  initialState: {
    singleProductStore: {},
  },
  reducers: {
    addToSingleStore: (state, action) => {
      state.singleProductStore[action.payload.set_num] = action.payload;
    },
  },
});

export const { addToSingleStore } = singleProductSlice.actions;

export default singleProductSlice.reducer;
