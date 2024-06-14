import styled from 'styled-components';

export const StModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-weight: 600;
`;

export const StModalInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;

export const StModalInputField = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 15px;
  /* font-size: 20px; */
  &:focus {
    border-color: none;
    /* outline: none; */
    outline-color: #b2b2b2;
    outline-offset: 0;
    outline-width: 0.1px;
  }
`;

export const StModalImgInputField = styled.input`
  /* background-color: white; */
  /* width: 100%; */
  height: 40px;
  border: none;
  /* border-radius: 20px; */
  /* padding: 15px; */
  /* align-self: center; */
  ::-webkit-file-upload-button {
    cursor: pointer;
    background-color: black;
  }
`;

export const StModalBtn = styled.button`
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
