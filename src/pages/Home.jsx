import styled from 'styled-components';
import ExpenseListByMonth from '../components/ExpenseListByMonth';
import Form from '../components/Form';

import MonthsNavigation from '../components/MonthsNavigation';

const Home = () => {
  return (
    <>
      {/* <StHeaderBox>
        <h1>ACCOUNTING BOOK</h1>
      </StHeaderBox> */}
      <StMain>
        <Form />
        <MonthsNavigation />
        <ExpenseListByMonth />
      </StMain>
    </>
  );
};

export default Home;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const StHeaderBox = styled.div`
  background-color: #f6f5f4;
  width: 1200px;
  /* h1 세로축 가운데 정렬 하드 코딩 */
  height: 70px;
  padding-top: 7px;
  box-sizing: border-box;
  /*  */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 45px;
  font-weight: 600;
`;
