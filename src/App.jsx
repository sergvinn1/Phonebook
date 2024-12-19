import React, { useEffect } from 'react'; // Додайте цей рядок
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/contactsOps';
import { selectFilteredContacts, selectLoading, selectError } from './redux/contactsSlice';
import '../styles/styles.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="phonebook">
      <h1>Список контактів</h1>
      <Filter onSearchChange={handleSearchChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactForm />
      <ul className="contact-list">
        <ContactList contacts={contacts} />
      </ul>
    </div>
  );
};

export default App;
