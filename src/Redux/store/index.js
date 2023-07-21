import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from '../slice/index';
import { LoginApi } from '../../Apis';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from '../slice/userSlice';
export const store = configureStore({
  reducer:rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck:false}).concat(LoginApi.middleware),
});
export const persistor=persistStore(store)