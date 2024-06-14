import styled from 'styled-components';

export const StDetailSection = styled.section`
  background-color: #f6f5f4;
  width: 800px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StDetailInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  label {
    font-size: 18px;
    font-weight: 600;
  }

  input {
    border: 1.5px solid rgba(94, 94, 94, 0.3);
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 0px 7px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 10px;
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.2);
    align-content: center;
  }
`;

export const StDetailBtnBox = styled.div`
  display: flex;
  gap: 7px;
`;

export const StDetailBtn = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  color: #f8f2eb;
  border: 0;
  width: max-content;
  padding: 0px 15px;
  height: 35px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    /* opacity: 0.8; */
    transition: 0.3s;
  }
`;

// const StDetailBtnFirst = styled(StDetailBtn)`
//   background-color: #f0ad4e;
// `;

// const StDetailBtnSecond = styled(StDetailBtn)`
//   background-color: #d9534f;
// `;

// const StDetailBtnThird = styled(StDetailBtn)`
//   background-color: #418bca;
// `;
