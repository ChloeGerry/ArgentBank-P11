import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: ${(props) => props.margin && props.margin};
  color: ${(props) => props.color && props.color};
  &:hover {
    text-decoration: ${(props) => props.textDecoration && props.textDecoration};
  }
`;

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
