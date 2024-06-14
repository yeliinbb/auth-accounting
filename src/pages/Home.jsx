import styled from 'styled-components';
import ExpenseListByMonth from '../components/ExpenseListByMonth';
import Form from '../components/Form';
import MonthsNavigation from '../components/MonthsNavigation';
import HeaderNavigationBar from '../layouts/Header/HeaderNavigationBar';

const Home = () => {
  return (
    <>
      <HeaderNavigationBar />
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
