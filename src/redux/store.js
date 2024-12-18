import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// Конфігурація Redux Persist
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

// Застосування persistReducer до редюсера слайса контактів
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Комбінація редюсерів
const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filtersReducer,
});

// Створення стору
const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    contacts: {
      items: []
    },
    filters: {
      name: ''
    }
  }
});

// Створення persistor
const persistor = persistStore(store);

export { store, persistor };
