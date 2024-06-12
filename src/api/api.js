import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

export const expenseApi = axios.create({
  baseURL: 'http://localhost:5000/'
});
