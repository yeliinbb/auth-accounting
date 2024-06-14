import { toast } from 'react-toastify';
import { authApi } from './api';
import defaultImg from '../assets/default-profile.jpg';

export const register = async ({ id, password, nickname, avatar }) => {
  console.log(avatar);
  try {
    const response = await authApi.post('/register', {
      id: id,
      password: password,
      nickname: nickname,
      avatar: avatar
    });
    // console.log('회원가입 response 확인', response);
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
    // const newData = { ...response.data, avatar: defaultImg };
    // console.log('newData => ', newData);
    // return newData;
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
  // console.log(formData);
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
      toast.warn('프로필 업데이트에 실패했습니다.');
    }
  }
};
