import React, { Component } from 'react';
import styles from './CreatePhonebookForm.module.css';

class CreatePhonebookForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    this.props.submit(name);
    this.setState({ name: '' });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and  spaces.        For example Adrian, Jacob Mercer, Charles de  Batz de Castelmore       d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default CreatePhonebookForm;
