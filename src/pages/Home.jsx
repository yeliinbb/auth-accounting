import styled from "styled-components";
import ExpenseListByMonth from "../components/ExpenseListByMonth";
import Form from "../components/Form";
import MonthsList from "../components/MonthList";

const Home = () => {
  return (
    <>
      <header>
        <h1>ACCOUNTING BOOK</h1>
      </header>
      <StMain>
        <Form />
        <MonthsList />
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
