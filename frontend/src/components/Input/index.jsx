import { InputLabel, InputWrapper, InputStyled } from './input';

const Input = ({
  labelfor,
  type,
  id,
  text,
  flexDirection,
  alignItems,
  margin,
  onChange,
  value,
}) => {
  return (
    <InputWrapper flexDirection={flexDirection} alignItems={alignItems}>
      <InputLabel htmlFor={labelfor} margin={margin}>
        {text}
      </InputLabel>
      <InputStyled onChange={onChange} value={value} type={type} id={id} />
    </InputWrapper>
  );
};

export default Input;
