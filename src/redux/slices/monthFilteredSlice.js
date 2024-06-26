import { createSlice } from '@reduxjs/toolkit';

const monthFilteredSlice = createSlice({
  name: 'monthFiltered',
  initialState: parseInt(localStorage.getItem('filteredByMonth')) || 0,
  reducers: {
    setMonth: (state, action) => {
      return action.payload;
    }
  }
});

export const { setMonth } = monthFilteredSlice.actions;
export default monthFilteredSlice.reducer;
