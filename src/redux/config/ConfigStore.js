import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from '../slices/expenseSlice';
import monthFilteredSlice from '../slices/monthFilteredSlice';
import modalSlice from '../slices/modalSlice';

const store = configureStore({
  reducer: {
    expenseList: expenseSlice,
    monthFiltered: monthFilteredSlice,
    modal: modalSlice
  }
});
export default store;
