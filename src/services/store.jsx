import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slice/apiSlice';
import authReducer from '../slice/authSlice';
import homeReducer from './home';
import cacheStatusReducer from './cacheStatusSlice';
import filterReducer from './filterSlice';
import tableDataReducer from "./tableDataSlice"; 
import integrationReducer from "./integrationSlice"
import featuresReducer from "./featureAppsDataSlice"
import userSlice from "../slice/userSlice";
import registrationReducer from '../slice/registerationSlice';
import redirectUserSlice from "../slice/redirectUserSlice";
import statusToggleSlice from "../slice/statusToggleSlice";
import userLoginWithGoogleReducer from "../slice/userLoginWithGoogleSlice";  

import excludesReducer from "../slice/excludeSlice";
import billingReducer from "../slice/billingSlice"; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', 
  storage, 
  whitelist: ['toggles'], 
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  home: homeReducer,
  userProfile: userSlice,
  user: redirectUserSlice,
  toggles: statusToggleSlice.reducer,
  registration: registrationReducer,
  cacheStatus: cacheStatusReducer,
  filter: filterReducer,
  tableData: tableDataReducer, 
  integration: integrationReducer,
  features: featuresReducer,
  loginGoogle: userLoginWithGoogleReducer, 
  excludes: excludesReducer, 
  billing: billingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };

export default store;
