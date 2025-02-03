import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterState",
  initialState: {
    filterState: { ordering: undefined },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filterState.ordering = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
