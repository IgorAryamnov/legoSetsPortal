import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: 1,
  },
  reducers: {
    increasePage: (state) => {
      state.page++;
    },
    decreasePage: (state) => {
      state.page--;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { increasePage, decreasePage, resetPage } = pageSlice.actions;

export default pageSlice.reducer;
