import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    id: '',
    password: '',
    username: '',
    isLogin: false
  },
  reducers: {
    registerUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isLogin = true;
    },
    loginUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isLogin = true;
    }
  }
});
