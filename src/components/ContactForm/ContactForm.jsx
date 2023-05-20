import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/operations/contactsThunk';
import { selectContacts } from 'redux/selectors/selectors';

import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    if (contacts.find(i => i.name.toLowerCase() === newObj.name.toLowerCase()))
      return alert(`${newObj.name} is already in contacts`);
    dispatch(addContactThunk(newObj));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          className={styles.form__label}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <input
          className={styles.form__label}
          placeholder="Phone number   + XX (YYY) XXX XX XX"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={styles.form__button}>
        Add Contact
      </button>
    </form>
  );
};
