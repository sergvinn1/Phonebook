import { createSlice } from '@reduxjs/toolkit';

// Початковий стан
const initialState = {
  name: '',
};

// Оголошення слайса фільтра
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Екшени
export const { changeFilter } = filtersSlice.actions;

// Селектори
export const selectNameFilter = (state) => state.filters.name;

// Редюсер
export default filtersSlice.reducer;
