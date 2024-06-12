import { toast } from 'react-toastify';
import { authApi } from './api';

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await authApi.post('/register', {
      id: id,
      password: password,
      nickname: nickname
    });
    console.log('회원가입 데이터 확인', response.data);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    toast.warn(error?.response?.data?.message);
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await authApi.post('/login?expiresIn=30m', {
      id: id,
      password: password
    });
    console.log('로그인 데이터 확인', response.data);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    toast.warn(error?.response?.data?.message);
  }
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      const response = await authApi.get('/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      localStorage.clear();
      toast.warn('accessToken이 만료되었습니다.');
    }
  }
};

export const updateProfile = async (formData) => {
  console.log(formData);
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      const response = await authApi.patch('/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      //   localStorage.clear();
      toast.warn('accessToken이 만료되었습니다.');
    }
  }
};
