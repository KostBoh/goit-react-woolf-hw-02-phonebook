import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.item}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);

export default ContactList;
