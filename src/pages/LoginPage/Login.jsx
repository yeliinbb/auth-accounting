import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loginEmail from '../../assets/envelope-regular.svg';
import loginPassword from '../../assets/unlock-keyhole-solid.svg';
import loginPerson from '../../assets/user-large-solid.svg';
import { StFrom, StInputBox, StInputField, StInputImg, StLoginBtn, StSignUpBtn } from './Login.Styled';
import { faFingerprint, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div>
            <StFrom>
                <StInputBox>
                    {/* <StInputImg src={loginEmail}></StInputImg> */}
                    <FontAwesomeIcon icon={faFingerprint} />
                    <StInputField type="text" placeholder="id" />
                </StInputBox>
                <StInputBox>
                    {/* <StInputImg src={loginPassword}></StInputImg> */}
                    <FontAwesomeIcon icon={faUnlock} />
                    <StInputField type="password" placeholder="password" />
                </StInputBox>
                {/* {sign up 누를 경우에만 보여주기} */}
                <StInputBox>
                    {/* <StInputImg src={loginPerson}></StInputImg> */}
                    <FontAwesomeIcon icon={faUser} />
                    <StInputField type="text" placeholder="username" />
                </StInputBox>
                <StInputBox>
                    <StLoginBtn>Login</StLoginBtn>
                    <StSignUpBtn>Sign up</StSignUpBtn>
                </StInputBox>
            </StFrom>
        </div>
    );
};

export default Login;
