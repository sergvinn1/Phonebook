import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  preloadedState: {
    contacts: {
      items: []
    },
    filters: {
      name: ''
    }
  }
});

export default store;
