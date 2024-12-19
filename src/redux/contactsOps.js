import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://67645a2a52b2a7619f5c5193.mockapi.io/AV/contacts'; // Використовуємо проксі URL

// Асинхронні операції
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    console.log('Fetching contacts...');
    const response = await axios.get(apiUrl);
    console.log('Contacts fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error.response ? error.response.data : error.message);
    return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    console.log('Adding contact...', newContact);
    const response = await axios.post(apiUrl, newContact);
    console.log('Contact added:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error.response ? error.response.data : error.message);
    return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    console.log('Deleting contact...', contactId);
    await axios.delete(`${apiUrl}/${contactId}`);
    console.log('Contact deleted:', contactId);
    return contactId;
  } catch (error) {
    console.error('Error deleting contact:', error.response ? error.response.data : error.message);
    return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
  }
});
