import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/operations/contactsThunk';
import { selectContacts } from 'redux/selectors/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const users = useSelector(selectContacts);

  return (
    <section className={styles.phonebook}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>

        <>
          <h3>Your phonebook has {users.length} contacts</h3>
          <Filter />
          <ContactList />
        </>
      </div>
    </section>
  );
};
