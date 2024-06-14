import styled from 'styled-components';
import Expense from './Expense';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getExpense } from '../api/expense';

const ExpenseListByMonth = () => {
  const monthFiltered = useSelector((state) => state.monthFiltered);
  const dispatch = useDispatch();

  // 데이터 가져오기
  const { data: expense = [], isLoading, error } = useQuery({ queryKey: ['expense'], queryFn: getExpense });

  // console.log('expense => ', expense);

  // 저장된 데이터 중에서 선택한 달과 맞는 데이터 가져오기 -> getMonth()
  const filtered = expense.filter((expense) => new Date(expense.date).getMonth() === monthFiltered);

  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  }

  return (
    <StUl>
      {filtered.length > 0 ? (
        filtered.map((list) => <Expense key={list.id} expense={list} />)
      ) : (
        <StNoExpenseWrapper>
          <StNoExpenseBox>지출이 없습니다.</StNoExpenseBox>
        </StNoExpenseWrapper>
      )}
    </StUl>
  );
};

export default ExpenseListByMonth;

const StUl = styled.ul`
  background-color: #f6f5f4;
  width: 1200px;
  display: grid;
  /* grid-template-rows: repeat(auto-fit,minmax(70px, 1fr)); */
  grid-auto-rows: minmax(80px, auto);
  gap: 10px;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 15px;
`;

const StNoExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StNoExpenseBox = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #dbe1d9;
  text-align: center;
  align-content: center;
  font-size: 16px;
`;
