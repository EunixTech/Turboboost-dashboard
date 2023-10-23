
import homeReducer from "./home";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import cacheStatusReducer from './cacheStatusSlice';
import filterReducer from './filterSlice';
import tableDataReducer from "./tableDataSlice"; 
import integrationReducer from "./integrationSlice"
import featuresReducer from "./featureAppsDataSlice"
import { apiSlice } from '../slice/apiSlice';
import registrationReducer from '../slice/registerationSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    home: homeReducer,
    registration: registrationReducer,
    cacheStatus: cacheStatusReducer,
    filter: filterReducer,
    tableData: tableDataReducer, 
    integration: integrationReducer,
    features: featuresReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;