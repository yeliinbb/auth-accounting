import { createSlice } from '@reduxjs/toolkit';

// 토큰 유무 조건으로 로그인 상태 확인
const initialState = {
  isLogin: localStorage.getItem('accessToken')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginHandler: (state, action) => {
      state.isLogin = true;
    },
    logoutHandler: (state, action) => {
      state.isLogin = false;
    }
  }
});

export const { loginHandler, logoutHandler } = authSlice.actions;
export default authSlice.reducer;
