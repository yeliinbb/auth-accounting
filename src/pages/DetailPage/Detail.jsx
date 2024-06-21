import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteExpense, getExpenses, putExpense } from '../../api/expense';
import { toast } from 'react-toastify';
import {
  StDetailBtn,
  StDetailBtnBox,
  StDetailInputBox,
  StDetailSection,
} from './Detail.Styled';
import { useFormRef } from '../../hooks/useForm';
import { queryKeys } from '../../api/api';
import { useEffect, useRef } from 'react';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  // 데이터 가져오기
  const {
    data: selectedExpense,
    isPending,
    error,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: [queryKeys.expenses, id], // 이렇게 관리 필요.. 이럴 경우 find 매서드 사용할 필요 없음.
    // queryFn: () => getDetailExpense(id),
    queryFn: async () => {
      const data = await getExpenses();
      // console.log('data => ', data);
      return data.find((item) => item.id === id);
    },
  });
  console.log('selectedExpense => ', selectedExpense);

  // refetch();

  const mutationEdit = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      navigate('/home');
      // 데이터를 다시 받아와서 상태를 다시 업데이트를 해주는 거기 때문에
      // id를 쿼리키에 넣어줄 필요는 없다.
      queryClient.invalidateQueries([queryKeys.expenses]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.expenses]);
    },
  });

  // 초기 상태값 세팅
  const {
    formRefs,
    formDataState,
    setFormDataState,
    onChangeHandler,
    resetForm,
    getFormData,
  } = useFormRef({
    date: '',
    item: '',
    amount: '',
    description: '',
  });

  // useQuery가 실행될 떄와 같은 순서로 초기 상태 업데이트 해주기
  // 의존 배열에 selectedExpense 넣어주어 해당 데이터 상태 업데이트 시에만 리렌더링
  useEffect(() => {
    if (selectedExpense) {
      setFormDataState({
        date: selectedExpense.date || '',
        item: selectedExpense.item || '',
        amount: selectedExpense.amount || '',
        description: selectedExpense.description || '',
      });

      Object.keys(selectedExpense).forEach((key) => {
        if (formRefs.current[key]) {
          formRefs.current[key].value = selectedExpense[key];
        }
      });
    }
  }, [selectedExpense]);

  if (isPending) {
    return <div>로딩중 입니다...</div>;
  }

  const expenseUpdate = () => {
    const { date, item, amount, description } = getFormData();

    if (amount <= 0) {
      toast.warn('유효한 금액을 입력해주세요.');
      return;
    }

    const updatedList = {
      id: id,
      date: date,
      item: item,
      amount: Number(amount),
      description: description,
    };

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

  return (
    <StDetailSection>
      {isSuccess && (
        <StDetailInputBox>
          <label htmlFor="detail-date">Date</label>
          <input
            type="date"
            id="detail-date"
            name="date"
            ref={(el) => (formRefs.current.date = el)}
            value={formDataState.date}
            onChange={onChangeHandler}
          />
          <label htmlFor="detail-item">Item</label>
          <input
            type="text"
            id="detail-item"
            name="item"
            ref={(el) => (formRefs.current.item = el)}
            value={formDataState.item}
            onChange={onChangeHandler}
          />
          <label htmlFor="detail-amount">Amount</label>
          <input
            type="text"
            id="detail-amount"
            name="amount"
            ref={(el) => (formRefs.current.amount = el)}
            value={formDataState.amount}
            onChange={onChangeHandler}
          />
          <label htmlFor="detail-description">Details</label>
          <input
            type="text"
            id="detail-description"
            name="description"
            ref={(el) => (formRefs.current.description = el)}
            value={formDataState.description}
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
