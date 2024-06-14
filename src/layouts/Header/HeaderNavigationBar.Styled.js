import styled from 'styled-components';

export const StHeader = styled.header`
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

export const StHeaderBox = styled.div`
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
`;

export const StSpan = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StHeaderImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: scale(1.1);
  object-fit: cover;
  transform: scale(1.1);
  transition: 0.2s ease-out;
`;

export const StHeaderBtn = styled.button`
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
