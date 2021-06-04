import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './modal-actions';

const isOpen = createReducer(false, { [actions.toggleModal]: (state, _) => !state });

export default combineReducers({
  isOpen,
});
