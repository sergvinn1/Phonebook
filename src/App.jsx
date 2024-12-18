
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { selectFilteredContacts } from './redux/selectors';
import { changeFilter } from './redux/filtersSlice';
import '../styles/styles.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector((state) => state.filters.name);

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="phonebook">
      <h1>Список контактів</h1>
      <Filter filter={filter} onSearchChange={handleSearchChange} />
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
