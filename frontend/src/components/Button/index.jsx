import { ButtonStyled } from './button';

const Button = ({
  text,
  padding,
  display,
  width,
  fontSize,
  margin,
  mediaQuery,
  onClick,
  type,
}) => {
  return (
    <ButtonStyled
      padding={padding}
      display={display}
      width={width}
      fontSize={fontSize}
      margin={margin}
      mediaQuery={mediaQuery}
      onClick={onClick}
      type={type}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
