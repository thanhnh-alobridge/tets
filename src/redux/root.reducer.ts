import { combineReducers, Reducer } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { Redux } from '@/types/local';
import { loginPageReducer } from '@pages/login/login.reducer';
import { createResetableReducer } from '@utils/redux';

import rootActions from './root.actions';

// import { createResetableReducer } from "../utils/redux";

// import rootActions from "./root.actions";

const persistKeys = {
  root: 'root',
  auth: 'auth',
};

const PERSIST_VERSION = 1;

const resetableReducer = <T>(reducer: Reducer<T, any>) =>
  createResetableReducer<T>(reducer, rootActions.types.RESET_STATE);

const appUserReducer = combineReducers<Redux.UserState>({
  login: resetableReducer(loginPageReducer),
});

const appGlobalReducer = (state = {}) => state;

const rootReducer = combineReducers({
  global: appGlobalReducer,
  user: appUserReducer,
});

const persistConfig: PersistConfig<any> = {
  key: persistKeys.root,
  storage,
  whitelist: [],
  version: PERSIST_VERSION,
};

export default persistReducer(persistConfig, rootReducer);
