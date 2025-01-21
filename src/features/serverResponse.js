import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
  name: "response",
  initialState: {
    responses: {},
  },
  reducers: {
    addPageWithStructures: (state, action) => {
      state.responses[action.payload.page] = action.payload.data;
    },
    resetResponse: (state) => {
      state.responses = {};
    },
  },
});

export const { addPageWithStructures, resetResponse } = responseSlice.actions;

export default responseSlice.reducer;
