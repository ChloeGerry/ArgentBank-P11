import { InputLabel, InputWrapper, InputStyled } from './input';

const Input = ({ labelfor, type, id, text }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={labelfor}>{text}</InputLabel>
      <InputStyled type={type} id={id} />
    </InputWrapper>
  );
};

export default Input;
