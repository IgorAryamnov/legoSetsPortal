import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "../features/serverResponse";
import pageReducer from "../features/pageCounter";
import loginReducer from "../features/loginState";
import { baseApi } from "../features/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    response: responseReducer,
    page: pageReducer,
    log: loginReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
