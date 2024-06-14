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
    margin-bottom: 10px;
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

export const StLoginBox = styled.div`
  width: 200;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  div {
    width: 100%;
    height: 45px;
    font-size: 15px;
    text-align: center;
    border-radius: 50px;
    background-color: #d6d6d6;
    /* border: 1.2px solid #474845; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      /* opacity: 0.8; */
      /* transition: 0.15s; */
      /* background-color: #474845; */
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
      /* border: 1px solid #474845; */
    }
    span {
      font-size: 15px;
      /* color: white; */
      width: 100%;
      &:hover {
        /* color: white; */
      }
    }
  }
  button {
    width: 100%;
    height: 45px;
    font-size: 15px;
    border-radius: 50px;
    background-color: #78866b;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      /* opacity: 0.8;
      transition: 0.15s; */
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;
