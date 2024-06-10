import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, updateExpense } from "../redux/slices/expenseSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const expenseList = useSelector((state) => state.expenseList);
  const params = useParams();
  // 기존 데이터 가져와서 각각 defaultValue에 넣어주기
  const prevData = expenseList.find((item) => item.id === params.id);
  const navigate = useNavigate();

  // 수정되는 값 반영을 위한 useRef 사용
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const expenseUpdate = () => {
    // 수정 이벤트가 실행될 때 데이터값 가져오기.
    // 함수 안에서 정의해줘야 수정된 데이터 값을 사용할 수 있음.
    const updatedDate = dateRef.current.value;
    const updatedItem = itemRef.current.value;
    const updatedAmount = amountRef.current.value;
    const updatedDescription = descriptionRef.current.value;

    const updatedList = {
      id: prevData.id,
      date: updatedDate,
      item: updatedItem,
      amount: Number(updatedAmount),
      description: updatedDescription,
    };
    dispatch(updateExpense(updatedList));
    navigate("/");
  };

  const expenseDelete = () => {
    if (confirm("정말로 이 항목을 삭제하시겠습니까?")) {
      dispatch(deleteExpense(prevData));
      localStorage.getItem("filteredByMonth");
      navigate("/");
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

  useEffect(() => {
    dateRef.current.focus();
  }, []);

  return (
    <StDetailSection>
      <StDetailInputBox>
        <StDetailLabel htmlFor="detail-date">Date</StDetailLabel>
        <StDetailInput
          type="date"
          id="detail-date"
          defaultValue={prevData.date}
          ref={dateRef}
        />
        <StDetailLabel htmlFor="detail-item">Item</StDetailLabel>
        <StDetailInput
          type="text"
          id="detail-item"
          defaultValue={prevData.item}
          ref={itemRef}
        />
        <StDetailLabel htmlFor="detail-amount">Amount</StDetailLabel>
        <StDetailInput
          type="number"
          id="detail-amount"
          defaultValue={prevData.amount}
          ref={amountRef}
        />
        <StDetailLabel htmlFor="detail-description">Details</StDetailLabel>
        <StDetailInput
          type="text"
          id="detail-description"
          defaultValue={prevData.description}
          ref={descriptionRef}
        />
      </StDetailInputBox>
      <StDetailBtnBox>
        <StDetailBtn $backgroundColor="#F0AD4E" onClick={expenseUpdate}>
          Edit
        </StDetailBtn>
        <StDetailBtn $backgroundColor="#D9534F" onClick={expenseDelete}>
          Delete
        </StDetailBtn>
        <StDetailBtn $backgroundColor="#418bca" onClick={() => navigate(-1)}>
          Back to Home
        </StDetailBtn>
      </StDetailBtnBox>
    </StDetailSection>
  );
};

export default Detail;

const StDetailSection = styled.section`
  background-color: #f6f5f4;
  width: 800px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StDetailInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const StDetailLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const StDetailInput = styled.input`
  border: 1.5px solid rgba(94, 94, 94, 0.3);
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 0px 7px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    align-content: center;
  }
`;

const StDetailBtnBox = styled.div`
  display: flex;
  gap: 7px;
`;

const StDetailBtn = styled.button`
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
