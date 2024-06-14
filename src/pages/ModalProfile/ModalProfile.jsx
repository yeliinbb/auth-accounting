import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import ReactModal from 'react-modal';
import { updateProfile } from '../../api/auth';
import { useRef, useState } from 'react';
import { setUser } from '../../redux/slices/userSlice';
import {
  StModalBox,
  StModalImg,
  StModalImgInputField,
  StModalInputBox,
  StModalInputField,
  StModalBtnBox,
  StModalImgInputLabel
} from './ModalProfile.Styled';
import { toast } from 'react-toastify';

const ModalProfile = () => {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const imgRef = useRef();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    // console.log(formData);
    formData.append('nickname', nickname);
    formData.append('avatar', avatar);
    const response = await updateProfile(formData);
    // console.log('response : 프로필 업데이트 성공', response);
    if (response.success) {
      dispatch(
        setUser({
          ...user,
          nickname: response.nickname,
          avatar: response.avatar
        })
      );
      toast.success('프로필 업데이트가 완료되었습니다.');
    }
    handleClose();
  };

  const saveImgFileHandler = () => {
    const file = imgRef.current.files[0];
    // 이미지 미리보기 FileReader API
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  const cancelBtnHandler = () => {
    setAvatar(null);
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
        <h2>[ Update Your Profile ]</h2>
        <StModalInputBox>
          <label htmlFor="profile-nickname">Nickname</label>
          <StModalInputField
            id="profile-nickname"
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </StModalInputBox>
        <StModalInputBox>
          <p>Profile image</p>
          <StModalImg src={avatar ? avatar : user.avatar} alt="프로필 이미지" />
          <StModalImgInputLabel htmlFor="profile-img">Upload Image</StModalImgInputLabel>
          <StModalImgInputField
            type="file"
            accept="image/*"
            id="profile-img"
            onChange={saveImgFileHandler}
            ref={imgRef}
          />
        </StModalInputBox>

        <StModalBtnBox>
          <button onClick={handleUpdateProfile}>Confirm</button>
          <button onClick={cancelBtnHandler}>Cancel</button>
        </StModalBtnBox>
      </StModalBox>
    </ReactModal>
  );
};

export default ModalProfile;
