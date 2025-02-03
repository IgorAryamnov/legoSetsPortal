import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterState",
  initialState: {
    filterState: undefined,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filterState = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
