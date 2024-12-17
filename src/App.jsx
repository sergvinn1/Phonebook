// src/App.jsx
import { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const[filter, setFilter] = useState('')

  const addContact = ({ name, number }) => {
    setContacts([
      ...contacts,
      { id: `id-${contacts.length + 1}`, name, number }
    ]);
  };

  const handleSearch = (query) => {
    setFilter(query.toLowerCase())
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
