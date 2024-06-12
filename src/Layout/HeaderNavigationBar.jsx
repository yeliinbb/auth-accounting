import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from './Modal/Modal';
import { openModal } from '../redux/slices/modalSlice';
import { Link, useNavigate } from 'react-router-dom';
import defaultImg from '../assets/default-profile.jpg';
import { useEffect } from 'react';
import { getUserInfo } from '../api/auth';
import { setUser } from '../redux/slices/userSlice';

const HeaderNavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    getUserInfo().then((response) => {
      console.log('현재 로그인된 유저가 있나요?', response);
      if (response) {
        // 여기서 이 값을 왜 한 번 더 넣어주는지?
        dispatch(
          setUser({
            userId: response.id,
            nickname: response.nickname,
            avatar: response.avatar
          })
        );
      } else {
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    dispatch(setUser(null));
    navigate('/');
    localStorage.clear();
  };

  console.log('user 정보 확인', user);

  return (
    <StHeader>
      <StHeaderBox>
        <StHeaderH1>ACCOUNTING BOOK</StHeaderH1>
      </StHeaderBox>
      {user && (
        <StHeaderBox>
          <Link to="/home">
            <StHeaderSpan>HOME</StHeaderSpan>
          </Link>
          <StHeaderSpan>My Profile</StHeaderSpan>
          <StModalBtn onClick={handleOpen}>
            <StHeaderImg src={user.avatar} alt={defaultImg} />
          </StModalBtn>
          <Modal />
          <StHeaderSpan>{user.nickname}</StHeaderSpan>
          <StHeaderBtn onClick={handleLogout}>Logout</StHeaderBtn>
        </StHeaderBox>
      )}
    </StHeader>
  );
};

export default HeaderNavigationBar;

const StHeader = styled.header`
  background-color: #f6f5f4;
  background-color: #474845;
  color: white;
  width: 1200px;
  height: 70px;
  padding: 0px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 16px;
`;

const StHeaderSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const StHeaderH1 = styled.h1`
  font-size: 45px;
  font-weight: 600;
  color: white;
`;

const StHeaderBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
`;

const StModalBtn = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: scale(1.1);
`;
const StHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(1.1);
`;

const StHeaderBtn = styled.button`
  background-color: #474845;
  background-color: #f6f5f4;
  color: #f8f2eb;
  color: #474845;
  border: 0;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
