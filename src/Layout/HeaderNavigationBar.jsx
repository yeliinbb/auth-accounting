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

  // 로그인 여부를 확인하는 로직
  useEffect(() => {
    // 액세스토큰이 있다면 회원 정보 불러오고
    getUserInfo().then((response) => {
      console.log('현재 로그인 된 유저가 있나요?', response);
      if (response) {
        // user 상테에 업데이트 해주기
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
        <h1>ACCOUNTING BOOK</h1>
      </StHeaderBox>
      {user && (
        <StHeaderBox>
          <Link to="/home">
            <span>HOME</span>
          </Link>
          <span>My Profile</span>
          <StModalBtn onClick={handleOpen}>
            <img src={user ? user.avatar : defaultImg} />
          </StModalBtn>
          <Modal />
          <span>{user.nickname}</span>
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
  height: 90px;
  padding: 0px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 16px;
`;

const StHeaderBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;

  h1 {
    font-size: 45px;
    font-weight: 600;
    color: white;
    /* 중앙 정렬 맞춰주기 하드코딩 */
    margin-top: 8px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-decoration: none;
  }

  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  span:nth-child(3):hover {
    cursor: default;
    text-decoration: none;
  }
`;

const StModalBtn = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: scale(1.1);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(1.1);
  }
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
