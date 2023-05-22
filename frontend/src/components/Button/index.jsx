import { ButtonStyled } from './button';

const Button = ({
  text,
  padding,
  display,
  width,
  fontSize,
  marginTop,
  mediaQuery,
}) => {
  return (
    <ButtonStyled
      padding={padding}
      display={display}
      width={width}
      fontSize={fontSize}
      marginTop={marginTop}
      mediaQuery={mediaQuery}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
