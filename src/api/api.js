import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

export const expenseApi = axios.create({
  baseURL: 'https://innovative-petalite-ton.glitch.me'
});
