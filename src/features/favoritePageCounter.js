import { createSlice } from "@reduxjs/toolkit";

export const favoritePageSlice = createSlice({
  name: "favoritePage",
  initialState: {
    favoritePage: 1,
  },
  reducers: {
    increaseFavoritePage: (state) => {
      state.favoritePage++;
    },
    decreaseFavoritePage: (state) => {
      state.favoritePage--;
    },
    resetFavoritePage: (state) => {
      state.favoritePage = 1;
    },
  },
});

export const { increaseFavoritePage, decreaseFavoritePage, resetFavoritePage } =
  favoritePageSlice.actions;

export default favoritePageSlice.reducer;
