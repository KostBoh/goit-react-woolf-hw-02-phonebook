import CreatePhonebookForm from './Forms/CreatePhonebookForm';
import styles from './App.module.css';
import { nanoid } from 'nanoid';

const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createNewContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <>
        <CreatePhonebookForm submit={this.createNewContact} />
        <div className={styles.container}>
          <form>
            <h2>Contacts</h2>
            <label htmlFor="filter">Find contacts by name</label>
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleChange}
            />
            <ul>
              {filteredContacts.map(contact => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
            </ul>
            {/* <ul>
              {this.state.contacts.map(contact => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
            </ul> */}
          </form>
        </div>
      </>
    );
  }
}
export default App;
