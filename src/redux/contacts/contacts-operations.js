import api from '../../service/contacts-api';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  try {
    const data = await api.addContact(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const data = await api.fetchContacts();
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await api.deleteContact(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
