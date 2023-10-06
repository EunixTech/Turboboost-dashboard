
import homeReducer from "./home";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import cacheStatusReducer from './cacheStatusSlice';
import filterReducer from './filterSlice';
import tableDataReducer from "./tableDataSlice"; 

import { apiSlice } from '../slice/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    home: homeReducer,
    cacheStatus: cacheStatusReducer,
    filter: filterReducer,
    tableData: tableDataReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;