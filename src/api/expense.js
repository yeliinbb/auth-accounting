import { toast } from 'react-toastify';
import { expenseApi } from './api';

export const getExpense = async () => {
  try {
    const response = await expenseApi.get('/expenses');
    // console.log('response', response);
    return response.data;
  } catch (error) {
    toast.warn('지출 데이터를 가져오지 못했습니다.');
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await expenseApi.post('/expenses', newExpense);
    return response.data;
  } catch (error) {
    toast.warn('지출 데이터 입력에 실패했습니다.');
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await expenseApi.put(`/expenses/${id}`, rest);
    return response.data;
  } catch (error) {
    toast.warn('지출 데이터 수정에 실패했습니다.');
  }
};

export const deleteExpense = async (id) => {
  console.log(id);
  try {
    const response = await expenseApi.delete(`/expenses/${id}`);
    return response.data;
  } catch (error) {
    toast.warn('지출 데이터 삭제에 실패했습니다.');
  }
};
