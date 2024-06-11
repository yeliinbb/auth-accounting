import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from './Modal/Modal';
import { openModal } from '../redux/slices/modalSlice';
import { Link } from 'react-router-dom';
import defaultImg from '../assets/default-profile.jpg';

const HeaderNavigationBar = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };

  return (
    <StHeader>
      <StHeaderBox>
        <Link to="/home">
          <StHeaderSpan>HOME</StHeaderSpan>
        </Link>
        <StHeaderSpan>My Profile</StHeaderSpan>
      </StHeaderBox>
      <StHeaderH1>ACCOUNTING BOOK</StHeaderH1>
      <StHeaderBox>
        <StModalBtn onClick={handleOpen}>
          <StHeaderImg src={defaultImg} alt="#" />
        </StModalBtn>
        <Modal />
        <StHeaderSpan>user.id</StHeaderSpan>
        <StHeaderBtn>Logout</StHeaderBtn>
      </StHeaderBox>
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
`;
const StHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
