import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteExpense, getExpense, putExpense } from '../../api/expense';
import { toast } from 'react-toastify';
import { StDetailBtn, StDetailBtnBox, StDetailInputBox, StDetailSection } from './Detail.Styled';
import useForm from '../../hooks/useForm';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  // 데이터 가져오기
  const {
    data: selectedExpense,
    isLoading,
    error,
    isSuccess,
    refetch
  } = useQuery({
    queryKey: ['expense'],
    queryFn: getExpense
  });
  // console.log(selectedExpense);
  // console.log(error);
  // console.log(isSuccess);
  // refetch();

  // 기존 데이터 가져와서 각각 defaultValue에 넣어주기
  const prevData = isSuccess ? selectedExpense.find((item) => item.id === id) : {};
  // console.log(prevData);

  const mutationEdit = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      navigate('/home');
      queryClient.invalidateQueries(['expense']);
    }
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expense']);
    }
  });

  const { formDataState, onChangeHandler } = useForm({
    date: prevData.date,
    item: prevData.item,
    amount: prevData.amount,
    description: prevData.description
  });

  const { date, item, amount, description } = formDataState;

  const expenseUpdate = () => {
    if (amount <= 0) {
      toast.warn('유효한 금액을 입력해주세요.');
      return;
    }

    const updatedList = {
      id: id,
      date: date,
      item: item,
      amount: Number(amount),
      description: description
    };

    // console.log(updatedList);
    mutationEdit.mutate(updatedList);
    toast.success('수정이 완료되었습니다.');
  };

  const expenseDelete = () => {
    if (confirm('정말로 이 항목을 삭제하시겠습니까?')) {
      mutationDelete.mutate(id);
      navigate('/home');
    } else {
      toast.warn('삭제가 취소되었습니다.');
    }
  };

  if (isLoading) {
    return <div>데이터를 가져오는 중입니다.</div>;
  }

  return (
    <StDetailSection>
      {isSuccess && (
        <StDetailInputBox>
          <label htmlFor="detail-date">Date</label>
          <input type="date" id="detail-date" name="date" value={date} onChange={onChangeHandler} />
          <label htmlFor="detail-item">Item</label>
          <input type="text" id="detail-item" name="item" value={item} onChange={onChangeHandler} />
          <label htmlFor="detail-amount">Amount</label>
          <input type="text" id="detail-amount" name="amount" value={amount} onChange={onChangeHandler} />
          <label htmlFor="detail-description">Details</label>
          <input
            type="text"
            id="detail-description"
            name="description"
            value={description}
            onChange={onChangeHandler}
          />
        </StDetailInputBox>
      )}
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
