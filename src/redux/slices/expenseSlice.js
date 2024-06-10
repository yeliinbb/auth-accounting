import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값 로컬스토리지에서 가져와 세팅
const initialState = JSON.parse(localStorage.getItem("lists")) || [];

const expenseSlice = createSlice({
  name: "expenseList",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.unshift(action.payload);
      localStorage.setItem("lists", JSON.stringify(state));
    },
    updateExpense: (state, action) => {
      const { id, date, item, amount, description } = action.payload;
      const updatedExpense = state.find((expense) => expense.id === id);

      if (updatedExpense) {
        updatedExpense.date = date;
        updatedExpense.item = item;
        updatedExpense.amount = amount;
        updatedExpense.description = description;
      }
      localStorage.setItem("lists", JSON.stringify(state));
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      const deletedExpense = state.find((expense) => expense.id === id);
      const deletedExpenseLists = deletedExpense
        ? state.filter((expense) => expense.id !== id)
        : state;
      localStorage.setItem("lists", JSON.stringify(deletedExpenseLists));
      return [...deletedExpenseLists];
    },
  },
});

export const {
  setExpenseList,
  updateExpense,
  deleteExpense,
  filterExpense,
  addExpense,
} = expenseSlice.actions;
export default expenseSlice.reducer;
