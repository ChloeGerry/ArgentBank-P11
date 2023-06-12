import { InputLabel, InputWrapper, InputStyled } from './input';

const Input = ({
  labelfor,
  type,
  name,
  id,
  text,
  flexDirection,
  alignItems,
  display,
  margin,
  onChange,
  value,
}) => {
  return (
    <InputWrapper
      flexDirection={flexDirection}
      alignItems={alignItems}
      display={display}
    >
      <InputLabel htmlFor={labelfor} margin={margin}>
        {text}
      </InputLabel>
      <InputStyled
        autoComplete="off"
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        id={id}
      />
    </InputWrapper>
  );
};

export default Input;
