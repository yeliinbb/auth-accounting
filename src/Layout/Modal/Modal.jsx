import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import ReactModal from 'react-modal';
import { updateProfile } from '../../api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/userSlice';

// const StyledModalOverlay = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
// `;

// const StyledModalContent = styled.div`
//   top: 50%;
//   left: 50%;
//   right: auto;
//   bottom: auto;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
//   position: absolute;
//   background: white;
//   border-radius: 4px;
//   padding: 20px;
//   max-width: 500px;
//   width: 100%;
// `;

const Modal = () => {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    console.log(formData);
    formData.append('nickname', nickname);
    formData.append('avatar', avatar);
    const response = await updateProfile(formData);
    console.log('response : 프로필 업데이트 성공', response);
    if (response.success) {
      dispatch(
        setUser({
          ...user,
          nickname: response.nickname,
          avatar: response.avatar
        })
      );
    }
    handleClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          backgroundColor: '#f6f5f4',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          background: 'white',
          borderRadius: '8px',
          padding: '25px',
          maxWidth: '500px',
          width: '100%',
          height: 'fit-content'
        }
      }}
    >
      <StModalBox>
        <StModalInputBox>
          <label htmlFor="profile-nickname">Change your username</label>
          <StModalInputField
            id="profile-nickname"
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </StModalInputBox>
        <StModalInputBox>
          <label htmlFor="profile-img">Profile Image</label>
          <StModalImgInputField
            type="file"
            accept="image/*"
            id="profile-img"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </StModalInputBox>
        <StModalBtn onClick={handleUpdateProfile}>Update Profile</StModalBtn>
      </StModalBox>
    </ReactModal>
  );
};

export default Modal;

const StModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-weight: 600;
`;

const StModalInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;

const StModalInputField = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 15px;
  /* font-size: 20px; */
  &:focus {
    border-color: none;
    /* outline: none; */
    outline-color: #b2b2b2;
    outline-offset: 0;
    outline-width: 0.1px;
  }
`;

const StModalImgInputField = styled.input`
  /* background-color: white; */
  /* width: 100%; */
  height: 40px;
  border: none;
  /* border-radius: 20px; */
  /* padding: 15px; */
  /* align-self: center; */
  ::-webkit-file-upload-button {
    cursor: pointer;
    background-color: black;
  }
`;

const StModalBtn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-radius: 50px;
  background-color: #78866b;
  color: white;
  /* margin-top: 15px; */
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.15s;
  }
`;
