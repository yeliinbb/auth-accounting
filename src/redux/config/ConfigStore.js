import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "../slices/expenseSlice";
import monthFilteredSlice from "../slices/monthFilteredSlice";

const store = configureStore({
  reducer: {
    expenseList: expenseSlice,
    monthFiltered: monthFilteredSlice,
  },
});
export default store;
