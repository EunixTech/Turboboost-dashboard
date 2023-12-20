
import homeReducer from "./home";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import cacheStatusReducer from './cacheStatusSlice';
import filterReducer from './filterSlice';
import tableDataReducer from "./tableDataSlice"; 
import integrationReducer from "./integrationSlice"
import featuresReducer from "./featureAppsDataSlice"
import { apiSlice } from '../slice/apiSlice';
import userSlice from "../slice/userSlice";
import registrationReducer from '../slice/registerationSlice';
import redirectUserSlice from "../slice/redirectUserSlice";
import {loginWithGoogle } from "../slice/userLoginWithGoogleSlice"
import excludesReducer from "../slice/excludeSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import billingReducer from "../slice/billingSlice"; 

const persistConfig = {
  key: 'root', // key is required
  storage, // storage is required
  // Other configuration options for redux-persist can go here
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  home: homeReducer,
  userProfile: userSlice,
  user: redirectUserSlice,
  registration: registrationReducer,
  cacheStatus: cacheStatusReducer,
  filter: filterReducer,
  tableData: tableDataReducer, 
  integration: integrationReducer,
  features: featuresReducer,
  loginGoogle: loginWithGoogle, 
  excludes: excludesReducer, 
  billing: billingReducer,
}));

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };

export default store;


