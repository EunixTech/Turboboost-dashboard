
import homeReducer from "./home";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import { apiSlice } from '../slice/apiSlice';
import {loginWithGoogle } from "../slice/userLoginWithGoogleSlice"
import excludesReducer from "../slice/excludeSlice"
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    home: homeReducer,
    loginGoogle: loginWithGoogle, 
    excludes: excludesReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;