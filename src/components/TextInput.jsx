import styled from "styled-components";

const TextInput = ({ type, htmlFor, name, placeholder }) => {
  return (
    <StBox>
      <StLabel htmlFor={htmlFor}>{name}</StLabel>
      <StInput type={type} id={htmlFor} name={name} placeholder={placeholder} />
    </StBox>
  );
};

export default TextInput;

const StBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const StInput = styled.input`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  padding: 0px 7px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    align-content: center;
  }
`;
