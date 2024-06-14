import styled from 'styled-components';

export const StModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-weight: 600;
  h2 {
    font-size: 27px;
    margin-bottom: 5px;
    /* text-align: center; */
  }
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

export const StModalImgInputLabel = styled.label`
  /* width: 100px; */
  font-size: 15px;
  padding: 5px 8px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  align-self: center;
  &:hover {
    background-color: white;
  }
`;

export const StModalImgInputField = styled.input`
  height: 40px;
  border: none;
  width: 0;
  height: 0;
  opacity: 0;
  ::-webkit-file-upload-button {
    cursor: pointer;
    background-color: black;
  }
`;

export const StModalImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  align-self: center;
  border-radius: 50%;
`;

export const StModalBtnBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  button {
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
  }
  button:last-child {
    background-color: #b2b2b2;
  }
`;
