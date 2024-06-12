import styled from 'styled-components';
import ExpenseListByMonth from '../components/ExpenseListByMonth';
import Form from '../components/Form';
import { useLocation } from 'react-router-dom';
import MonthsNavigation from '../components/MonthsNavigation';
import HeaderNavigationBar from '../Layout/HeaderNavigationBar';

const Home = () => {
  const location = useLocation();
  const isLoginPage = location.path === '/';
  return (
    <>
      {!isLoginPage && <HeaderNavigationBar />}
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
