import { InputLabel, InputWrapper, InputStyled } from './input';

const Input = ({
  labelfor,
  type,
  id,
  text,
  flexDirection,
  alignItems,
  margin,
}) => {
  return (
    <InputWrapper flexDirection={flexDirection} alignItems={alignItems}>
      <InputLabel htmlFor={labelfor} margin={margin}>
        {text}
      </InputLabel>
      <InputStyled type={type} id={id} />
    </InputWrapper>
  );
};

export default Input;
