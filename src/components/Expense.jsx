import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Expense = ({ expense }) => {
  const { id, date, item, amount, description } = expense;
  const navigate = useNavigate();
  return (
    <>
      <StLi onClick={() => navigate(`/detail/${id}`)}>
        <StLiBox>
          <StLiBoxH3>{date}</StLiBoxH3>
          <StLiBoxP>
            {item} - {description}
          </StLiBoxP>
        </StLiBox>
        <StLiSpan>{`${amount}원`}</StLiSpan>
      </StLi>
    </>
  );
};

export default Expense;

const StLi = styled.li`
  background-color: #d1dad0c1;
  /* border: 1px solid #EC5800; */
  /* box-shadow: 0px 0px 10px 1px #ec560056; */
  color: #ec5800;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    /* scale: 1.01; */
    transition: 0.2s;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

const StLiBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const StLiBoxH3 = styled.h3`
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 2.5px;
  /* color: #f8f2eb; */
  /* color: #b4b4b4; */
`;

const StLiBoxP = styled.p`
  font-weight: 500;
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StLiSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
