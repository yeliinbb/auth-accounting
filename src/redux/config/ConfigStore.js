import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from '../slices/expenseSlice';
import monthFilteredSlice from '../slices/monthFilteredSlice';
import modalSlice from '../slices/modalSlice';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    expenseList: expenseSlice,
    monthFiltered: monthFilteredSlice,
    modal: modalSlice,
    user: userSlice
  }
});
export default store;
