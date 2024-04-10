import CreatePhonebookForm from './Forms/CreatePhonebookForm';

const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <CreatePhonebookForm />

        {/* <div
          style={{
            height: '20vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template
        </div> */}
      </>
    );
  }
}
export default App;
