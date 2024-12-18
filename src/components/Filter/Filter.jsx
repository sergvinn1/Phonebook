
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Пошук за ім'ям"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
