import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slice/cartSlice";
import apiService from "@api"
import { setupListeners } from '@reduxjs/toolkit/query'


const store = configureStore({
  reducer: {
    //cart related logic
    cartReducer,
    [apiService.reducerPath]: apiService.reducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiService.middleware)
});
setupListeners(store.dispatch)
console.log(store,"store")
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
