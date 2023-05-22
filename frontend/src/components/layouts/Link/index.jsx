import { LinkStyled } from './link';

const LinkNavigation = ({ to, children, margin, color, textDecoration }) => {
  return (
    <LinkStyled
      to={to}
      margin={margin}
      color={color}
      textDecoration={textDecoration}
    >
      {children}
    </LinkStyled>
  );
};

export default LinkNavigation;
