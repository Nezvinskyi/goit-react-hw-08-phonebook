import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions';

const initialValue = { name: null, email: null, password: null };

const user = createReducer(initialValue, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialValue,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer('', {
  [actions.registerError]: setError,
  [actions.loginError]: setError,
  [actions.logoutError]: setError,
  [actions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
