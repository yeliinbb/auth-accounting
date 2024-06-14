import styled from 'styled-components';

export const StForm = styled.form`
  background-color: #f6f5f4;
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px;
  h2 {
    text-align: center;
  }
`;

export const StInputBox = styled.div`
  width: 100;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StInputImg = styled.img`
  width: 20px;
`;

export const StInputField = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 15px;
  /* font-size: 20px; */
  &:focus {
    background-image: url(../../assets/envelope-regular.svg);
    background-size: contain;
    background-repeat: no-repeat;
    border-color: none;
    /* outline: none; */
    outline-color: #b2b2b2;
    outline-offset: 0;
    outline-width: 0.1px;
  }
`;

export const StBtnBox = styled.div`
  width: 200;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StLoginBtn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-radius: 50px;
  background-color: #78866b;
  color: white;
  /* margin-top: 15px; */
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.15s;
  }
`;

export const StSignUpBtn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-radius: 50px;
  background-color: #474845;
  color: white;
  /* margin-top: 15px; */
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.15s;
  }
`;
