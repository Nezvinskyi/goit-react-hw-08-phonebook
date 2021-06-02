import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as authActions from '../auth/auth-actions';
import * as contactsActions from '../contacts/contacts-actions';

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.loginRequest]: () => true,
  [authActions.logoutRequest]: () => true,
  [authActions.getCurrentUserRequest]: () => true,

  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,

  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export default combineReducers({ loading });
