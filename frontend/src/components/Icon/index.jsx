import { IconStyled } from './icon';

const Icon = ({ boxSizing, backgroundColor, margin, padding, fontSize }) => {
  return (
    <IconStyled
      className="fa fa-user-circle"
      boxSizing={boxSizing}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
    ></IconStyled>
  );
};

export default Icon;
