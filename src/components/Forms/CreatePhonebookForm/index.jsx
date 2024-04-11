import React, { Component } from 'react';
import styles from './CreatePhonebookForm.module.css';

class CreatePhonebookForm extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
  };

  handleChange = ({ target: { value } }) => {
    console.log(value);
    if (value.includes('@')) return;
    this.setState({ value });
  };
  render() {
    // console.log(this.state.value);
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={this.state.value}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and  spaces.        For example Adrian, Jacob Mercer, Charles de  Batz de Castelmore       d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul></ul>
      </div>
    );
  }
}

export default CreatePhonebookForm;
