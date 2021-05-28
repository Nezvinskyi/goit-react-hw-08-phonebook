/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1234';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};

export default { fetchContacts, addContact, deleteContact };
