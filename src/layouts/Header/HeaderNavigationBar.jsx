import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../pages/ModalProfile/ModalProfile';
import { openModal } from '../../redux/slices/modalSlice';
import { Link, useNavigate } from 'react-router-dom';
import defaultImg from '../../assets/default-profile.jpg';
import { useEffect } from 'react';
import { getUserInfo } from '../../api/auth';
import { setUser } from '../../redux/slices/userSlice';
import {
  StHeader,
  StHeaderBox,
  StHeaderBtn,
  StHeaderImg,
  StSpan,
} from './HeaderNavigationBar.Styled';
import { logoutHandler } from '../../redux/slices/authSlice';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../api/api';

const HeaderNavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };

  // 로그인 여부를 확인하는 로직
  useEffect(() => {
    // 액세스토큰이 있다면 회원 정보 불러오고
    getUserInfo().then((response) => {
      // console.log('현재 로그인 된 유저가 있나요?', response);
      if (response) {
        // user 상테에 업데이트 해주기
        dispatch(
          setUser({
            userId: response.id,
            nickname: response.nickname,
            avatar: response.avatar,
          })
        );
      } else {
        handleLogout();
      }
    });
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutHandler());
    dispatch(setUser(null));
    localStorage.clear();
  };

  const { data: userInfo } = useQuery({
    queryKey: [queryKeys.users],
    queryFn: getUserInfo,
  });

  // console.log('userInfo => ', userInfo);

  return (
    <StHeader>
      <StHeaderBox>
        <h1>ACCOUNTING BOOK</h1>
      </StHeaderBox>
      {userInfo && (
        <StHeaderBox>
          <Link to="/home">
            <StSpan>HOME</StSpan>
          </Link>
          <Modal />
          <StSpan onClick={handleOpen}>My Profile</StSpan>
          <StHeaderImg src={userInfo.avatar ? userInfo.avatar : defaultImg} />
          {/* <StHeaderImg src={user.avatar} /> */}
          <span>{userInfo.nickname}</span>
          <StHeaderBtn onClick={handleLogout}>Logout</StHeaderBtn>
        </StHeaderBox>
      )}
    </StHeader>
  );
};

export default HeaderNavigationBar;
