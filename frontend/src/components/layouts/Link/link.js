import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: ${(props) => props.margin && props.margin};
  color: ${(props) => props.color && props.color};
  &:hover {
    text-decoration: ${(props) => props.textDecoration && props.textDecoration};
  }
`;
