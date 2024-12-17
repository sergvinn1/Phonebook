
import styles from './SearchBox.module.css';

const SearchBox = ({ onSearch }) => {
  return (
    <input
      type="text"
      className={styles.searchBox}
      placeholder="Search contacts"
      onChange={e => onSearch(e.target.value)}
    />
  );
}

export default SearchBox;
