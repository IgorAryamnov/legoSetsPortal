import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginState",
  initialState: {
    loginState: localStorage.getItem("isLoggedIn"),
  },
  reducers: {
    logIn: (state, action) => {
      state.loginState = action.payload;
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.loginState = { loggedIn: false, user: null };
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify({ loggedIn: false, user: null })
      );
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
