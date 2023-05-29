import { LinkStyled } from './link';

const LinkNavigation = ({
  to,
  children,
  margin,
  color,
  textDecoration,
  onClick,
}) => {
  return (
    <LinkStyled
      to={to}
      margin={margin}
      color={color}
      textDecoration={textDecoration}
      onClick={onClick}
    >
      {children}
    </LinkStyled>
  );
};

export default LinkNavigation;
