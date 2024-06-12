import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StForm, StInputBox, StInputField, StLoginBtn, StSignUpBtn } from './Login.Styled';
import { faFingerprint, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { login, register } from '../../api/auth';

const Login = () => {
  const [formData, setFormData] = useState({ id: '', password: '', nickname: '' });
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // 회원가입
  const onSubmitRegister = async (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!formData.id || !formData.password || !formData.nickname) {
      toast.warn('모든 항목을 입력해주세요.');
      return;
    } else if (formData.id > 4 || formData.id < 10) {
      toast.warn('아이디는 4글자에서 10글자 이내로만 가능합니다.');
      return;
    } else if (formData.password > 4 || formData.password < 15) {
      toast.warn('비밀번호는 4글자에서 15글자 이내로만 가능합니다.');
      return;
    } else if (formData.username > 4 || formData.nickname < 15) {
      toast.warn('닉네임는 1글자에서 10글자 이내로만 가능합니다.');
      return;
    }

    const response = await register({ ...formData });
    if (response) {
      navigate('/home');
      setFormData({ id: '', password: '', nickname: '' });
      toast.success('회원가입이 완료되었습니다.');
    }
  };

  // 로그인
  const onSubmitLogin = async () => {
    const { userId, nickname, avatar } = await login({
      id: formData.id,
      password: formData.password
    });

    toast.success('로그인 성공!');
    dispatch(setUser({ userId, nickname, avatar }));
    navigate('/home');
  };

  // 로그인폼 토글
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <StForm>
        <StInputBox>
          <FontAwesomeIcon icon={faFingerprint} />
          <StInputField type="text" placeholder="id" onChange={handleChange} name="id" value={formData.id} />
        </StInputBox>
        <StInputBox>
          <FontAwesomeIcon icon={faUnlock} />
          <StInputField
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </StInputBox>
        {!isLoginForm && (
          <StInputBox>
            <FontAwesomeIcon icon={faUser} />
            <StInputField
              type="text"
              placeholder="nickname"
              onChange={handleChange}
              name="nickname"
              value={formData.nickname}
            />
          </StInputBox>
        )}
        {isLoginForm ? (
          <StInputBox>
            <StLoginBtn type="submit" onClick={onSubmitLogin}>
              Login
            </StLoginBtn>
            <StSignUpBtn type="submit" onClick={toggleForm}>
              Sign up
            </StSignUpBtn>
          </StInputBox>
        ) : (
          <StInputBox>
            <StLoginBtn type="submit" onClick={toggleForm}>
              Login
            </StLoginBtn>
            <StSignUpBtn type="submit" onClick={onSubmitRegister}>
              Sign up
            </StSignUpBtn>
          </StInputBox>
        )}
      </StForm>
    </div>
  );
};

export default Login;
