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
      items: [],
      loading: false,
      error: null,
    },
    filters: {
      name: ''
    }
  }
});

export default store;
