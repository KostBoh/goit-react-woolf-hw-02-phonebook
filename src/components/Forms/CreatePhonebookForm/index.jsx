import React from 'react';
import styles from './CreatePhonebookForm.module.css';

const CreatePhonebookForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
  };

  const handleChange = ({ target: { value } }) => {
    console.log(value);
  };
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value="test"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and  spaces.        For example Adrian, Jacob Mercer, Charles de  Batz de Castelmore       d'Artagnan"
          required
          onChange={handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul></ul>
    </div>
  );
};

export default CreatePhonebookForm;
