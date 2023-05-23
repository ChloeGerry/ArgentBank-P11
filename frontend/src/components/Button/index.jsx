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
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
