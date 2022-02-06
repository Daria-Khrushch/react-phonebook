import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialStateItems = [];
const items = createReducer(initialStateItems, {
  [fetchContacts.fulfilled]: (_state, { payload }) => {
    return payload;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload.id);
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_state, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.rejected]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
