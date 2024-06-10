import uuid from "react-uuid";
import TextInput from "./TextInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/slices/expenseSlice";

const Form = () => {
  const monthFiltered = useSelector((state) => state.monthFiltered);
  const dispatch = useDispatch();

  // 새로운 리스트를 추가하는 함수
  const addList = (nextList) => {
    dispatch(addExpense(nextList));
  };

  // 폼이 제출됐을 때 데이터 저장
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    const nextList = {
      id: uuid(),
      date,
      item,
      amount: Number(amount),
      description,
    };

    if (!date || !item || !amount || !description) {
      alert("내용을 모두 입력해주세요.");
    } else if (parseInt(amount, 10) <= 0) {
      alert("유효한 금액을 입력해주세요.");
    } else {
      alert("내용이 입력됐습니다.");
      addList(nextList);
      event.target.reset();
    }
  };

  const month = ("0" + (monthFiltered + 1)).slice(-2);

  return (
    <StFrom onSubmit={onSubmitHandler}>
      <TextInput
        type="date"
        htmlFor="date"
        name="date"
        placeholder={`2024-${month}-01`}
      />
      <TextInput type="text" htmlFor="item" name="item" placeholder="item" />
      <TextInput
        type="number"
        htmlFor="amount"
        name="amount"
        placeholder="amount"
      />
      <TextInput
        type="text"
        htmlFor="description"
        name="description"
        placeholder="description"
      />
      <StBtn type="submit">Save</StBtn>
    </StFrom>
  );
};

export default Form;

const StFrom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f4;
  width: 1200px;
  padding: 30px 50px;
  box-sizing: border-box;
  border-radius: 15px;
  gap: 20px;
`;

const StBtn = styled.button`
  background-color: #78866b;
  color: #f8f2eb;
  border: 0;
  width: 70px;
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
