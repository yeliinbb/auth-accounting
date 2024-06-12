import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from '../redux/slices/monthFilteredSlice';

const MonthNameList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const MonthsNavigation = () => {
  const dispatch = useDispatch();
  const monthFiltered = useSelector((state) => state.monthFiltered);

  // 클릭했을 때 해당 달 내역만 화면에 보여주기 위해 index 사용
  const handleClick = (index) => {
    dispatch(setMonth(index));
    localStorage.setItem('filteredByMonth', index);
  };

  return (
    <StSection>
      {MonthNameList.map((month, index) => {
        return (
          <StMonthBox $active={monthFiltered === index} key={month} onClick={() => handleClick(index)}>
            {month}
          </StMonthBox>
        );
      })}
    </StSection>
  );
};

export default MonthsNavigation;

const StSection = styled.section`
  background-color: #f6f5f4;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 1200px;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 15px;
`;

const StMonthBox = styled.div`
  background-color: ${(props) => (props.$active ? '#FFA07A' : '#80918e')};
  color: #f8f2eb;
  font-weight: 600;
  text-align: center;
  align-content: center;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${(props) => (props.$active ? '0px 0px 10px 2px rgba(0, 0, 0, 0.2);' : 'none')};
  &:hover {
    transition: 0.15s;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    background-color: #ffa07a;
  }
`;
