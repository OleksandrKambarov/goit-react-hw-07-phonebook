import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://6469145903bb12ac2085aa5f.mockapi.io/contacts/',
});

export const fetchContacts = async () => {
  const { data } = await contactsAPI.get();
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsAPI.delete(id);
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsAPI.post('', contact);
  return data;
};
