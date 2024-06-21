import styled from 'styled-components';
import Expense from './Expense';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getExpenses } from '../api/expense';
import { queryKeys } from '../api/api';

const ExpenseListByMonth = () => {
  const monthFiltered = useSelector((state) => state.monthFiltered);

  // 데이터 가져오기
  const {
    data: expense = [],
    isPending,
    error,
    isSuccess,
  } = useQuery({
    queryKey: [queryKeys.expenses],
    queryFn: async () => {
      const data = await getExpenses();
      return data.filter(
        (expense) => new Date(expense.date).getMonth() === monthFiltered
      );
    },
  });

  if (isPending) {
    return <div>로딩중 입니다.</div>;
  }

  return (
    <StUl>
      {isSuccess ? (
        expense.map((list) => <Expense key={list.id} expense={list} />)
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
