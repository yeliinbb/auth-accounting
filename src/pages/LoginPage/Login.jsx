import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StForm, StInputBox, StInputField, StLoginBox } from './Login.Styled';
import { faFingerprint, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { login, register } from '../../api/auth';
import defaultImg from '../../assets/default-profile.jpg';
import { useForm } from '../../hooks/useForm';
import { loginHandler } from '../../redux/slices/authSlice';

const Login = () => {
  console.log('login');
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const { formDataState, onChangeHandler, resetForm } = useForm({
    id: '',
    password: '',
    nickname: '',
    profileImg: '',
  });
  const { id, password, nickname, profileImg } = formDataState;
  // 패스워드랑 아이디 스트링화

  // 회원가입
  const onSubmitRegister = async (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!id || !password || !nickname) {
      toast.warn('모든 항목을 입력해주세요.');
      return;
    } else if (id > 4 || id < 10) {
      toast.warn('아이디는 4글자에서 10글자 이내로만 가능합니다.');
      return;
    } else if (password > 4 || password < 15) {
      toast.warn('비밀번호는 4글자에서 15글자 이내로만 가능합니다.');
      return;
    } else if (nickname > 4 || nickname < 15) {
      toast.warn('닉네임는 1글자에서 10글자 이내로만 가능합니다.');
      return;
    }

    const response = await register({ ...formDataState });
    if (response) {
      setIsLoginForm(true);
      resetForm();
      toast.success('회원가입이 완료되었습니다.');
    }
  };

  // 로그인
  const onSubmitLogin = async (event) => {
    event.preventDefault();
    // console.log(id);
    // console.log(idRef.current.value);
    const defaultAvatar =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUjRIqKbMtVgLiRq_68xIGAiYPRr_uVBdug&s'; // 기본 이미지 경로 설정
    console.log('defaultAvatar => ', defaultAvatar);
    const {
      userId,
      nickname,
      avatar = defaultAvatar,
    } = await login({
      id: id,
      password: password,
      // avatar: profileImg
    });

    // 이 로직은 작동하지 않는데 왜 그런건지???
    console.log('avatar => ', avatar);

    // const userAvatar = avatar || defaultAvatar; // avatar가 없으면 기본 이미지 사용
    // dispatch(setUser({ userId, nickname, avatar: userAvatar }));

    // dispatch(setUser({ userId, nickname, avatar }));
    dispatch(loginHandler());
    toast.success('로그인 성공!');
    console.log('navigate test');
    navigate('/');
  };

  // 로그인폼 토글
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <StForm onSubmit={isLoginForm ? onSubmitLogin : onSubmitRegister}>
        {isLoginForm ? <h2>Login</h2> : <h2>Sign Up</h2>}
        <StInputBox>
          <FontAwesomeIcon icon={faFingerprint} />
          <StInputField
            type="text"
            placeholder="id"
            onChange={onChangeHandler}
            name="id"
            value={id}
          />
          {/* <StInputField type="text" placeholder="id" ref={idRef} /> */}
        </StInputBox>
        <StInputBox>
          <FontAwesomeIcon icon={faUnlock} />
          <StInputField
            type="password"
            placeholder="password"
            onChange={onChangeHandler}
            name="password"
            value={password}
          />
        </StInputBox>
        {!isLoginForm && (
          <StInputBox>
            <FontAwesomeIcon icon={faUser} />
            <StInputField
              type="text"
              placeholder="nickname"
              onChange={onChangeHandler}
              name="nickname"
              value={nickname}
            />
          </StInputBox>
        )}
        <StLoginBox>
          <button>{isLoginForm ? 'Login' : 'Sign up'}</button>
          <div onClick={toggleForm}>
            <span>{isLoginForm ? 'Move to Sign up' : 'Move to Login'}</span>
          </div>
        </StLoginBox>
      </StForm>
    </div>
  );
};

export default Login;
