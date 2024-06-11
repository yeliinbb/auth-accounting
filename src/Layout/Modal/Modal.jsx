import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import ReactModal from 'react-modal';

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
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleClose = () => {
    dispatch(closeModal());
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
          <label htmlFor="profile-username">Change your username</label>
          <StModalInputField id="profile-username" type="text" placeholder="username" />
        </StModalInputBox>
        <StModalInputBox>
          <label htmlFor="profile-img">Profile Image</label>
          <StModalImgInputField type="file" accept="img/*" id="profile-img" />
        </StModalInputBox>
        <StModalBtn>Update Profile</StModalBtn>
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
