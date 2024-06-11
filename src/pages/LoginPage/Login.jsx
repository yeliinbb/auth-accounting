import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StForm, StInputBox, StInputField, StLoginBtn, StSignUpBtn } from './Login.Styled';
import { faFingerprint, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import api from '../../axios/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ id: '', password: '', username: '', isLogin: false });
  const [users, setUsers] = useState(null);
  const [loginUsers, setLoginUsers] = useState(null);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/register');
        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.log('Error fetching users', error);
      }
    };
    fetchData();
  }, []);

  // 회원가입 로직
  const handleRegister = async (user) => {
    const { data } = await api.post('/register', user);
    setUsers([...users, data]);
  };

  const onSubmitRegister = (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!formData.id || !formData.password || !formData.username) {
      toast.warn('모든 항목을 입력해주세요.');
      return;
    } else if (formData.id > 4 || formData.id < 10) {
      toast.warn('아이디는 4글자에서 10글자 이내로만 가능합니다.');
      return;
    } else if (formData.password > 4 || formData.password < 15) {
      toast.warn('비밀번호는 4글자에서 15글자 이내로만 가능합니다.');
      return;
    } else if (formData.username > 4 || formData.username < 15) {
      toast.warn('닉네임는 1글자에서 10글자 이내로만 가능합니다.');
      return;
    }

    handleRegister({ ...formData, isLogin: true });
    navigate('/home');
    setFormData({ id: '', password: '', username: '' });
  };

  // 로그인 로직
  const handleLogin = async (user) => {
    try {
      const { data } = await api.post('/login', {
        id: user.id,
        password: user.password
      });
      console.log(user);
      if (data.length > 0) {
        toast.success('로그인 성공!');
        setLoginUsers(data[0]);
        navigate('/home');
      } else {
        toast.error('로그인에 실패했습니다.');
      }
    } catch (error) {
      console.log('Error logging in', error);
      toast.error('로그인 실패: 서버 오류입니다.');
    }
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    if (!formData.id || !formData.password) {
      toast.warn('이메일과 비밀번호를 입력해주세요.');
      return;
    }
    handleLogin(formData);
    setFormData({ id: '', password: '', username: '' });
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
        {isLoginForm && (
          <StInputBox>
            <FontAwesomeIcon icon={faUser} />
            <StInputField
              type="text"
              placeholder="username"
              onChange={handleChange}
              name="username"
              value={formData.username}
            />
          </StInputBox>
        )}
        {!isLoginForm ? (
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
