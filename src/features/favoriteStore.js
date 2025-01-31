import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: JSON.parse(localStorage.getItem("favorite")) || {},
  },
  reducers: {
    addToFavorite: (state, action) => {
      if (!state.favorite[action.payload.user]) {
        state.favorite[action.payload.user] = [];
      }
      state.favorite[action.payload.user].push(action.payload.favoriteId);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    deleteFromFavorite: (state, action) => {
      let index = state.favorite[action.payload.user].indexOf(
        action.payload.favoriteId
      );
      state.favorite[action.payload.user].splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
