import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: ${({ margin }) => margin && margin};
  color: ${({ color }) => color && color};
  &:hover {
    text-decoration: ${({ textDecoration }) =>
      textDecoration && textDecoration};
  }
`;
