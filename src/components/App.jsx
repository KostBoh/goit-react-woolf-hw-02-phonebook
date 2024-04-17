import CreatePhonebookForm from './Forms/CreatePhonebookForm';
import styles from './App.module.css';
import { nanoid } from 'nanoid';

const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createNewContact = name => {
    const newContact = {
      id: nanoid(),
      name,
    };
    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  render() {
    return (
      <>
        <CreatePhonebookForm submit={this.createNewContact} />
        <div className={styles.container}>
          <form>
            <h2>Contacts</h2>
            <label htmlFor="find">Find contacts by name</label>
            <input type="text" />
            <ul>
              {this.state.contacts.map(contact => (
                <li key={contact.id}>{contact.name}</li>
              ))}
            </ul>
          </form>
        </div>
      </>
    );
  }
}
export default App;
