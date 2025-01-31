import { createSlice } from "@reduxjs/toolkit";

export const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState: {
    favoriteProducts: {},
  },
  reducers: {
    addToFavoriteProducts: (state, action) => {
      if (!state.favoriteProducts[action.payload.user]) {
        state.favoriteProducts[action.payload.user] = [];
      }
      state.favoriteProducts[action.payload.user].push(
        action.payload.favoriteInformation
      );
    },
    deleteFromFavoriteProducts: (state, action) => {
      let index = state.favoriteProducts[action.payload.user].findIndex(
        (value) => value.set_num === action.payload.favoriteId
      );
      state.favoriteProducts[action.payload.user].splice(index, 1);
    },
  },
});

export const { addToFavoriteProducts, deleteFromFavoriteProducts } =
  favoriteProductsSlice.actions;

export default favoriteProductsSlice.reducer;
