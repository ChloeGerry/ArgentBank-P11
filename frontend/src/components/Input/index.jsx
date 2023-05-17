import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const InputStyled = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const Input = ({ labelfor, type, id, text }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={labelfor}>{text}</InputLabel>
      <InputStyled type={type} id={id} />
    </InputWrapper>
  );
};

export default Input;
