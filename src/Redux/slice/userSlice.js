import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from '.';
import { LoginApi } from '../../Apis';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from '../slice/index'
let rootReducer = combineReducers({
  user: userReducer,
  [LoginApi.reducerPath]: LoginApi.reducer,
});
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['user'],
};
const root = (state, action) => {
  return persistedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default root;
