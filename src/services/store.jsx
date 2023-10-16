
import homeReducer from "./home";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import { apiSlice } from '../slice/apiSlice';
import registrationReducer from '../slice/registerationSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    home: homeReducer,
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;