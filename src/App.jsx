import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import '../styles/styles.css'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="phonebook">
      <h1>Список контактів</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Пошук за ім'ям"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ContactForm addContact={addContact} />
      <ul className="contact-list">
        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </ul>
    </div>
  );
};

export default App;
