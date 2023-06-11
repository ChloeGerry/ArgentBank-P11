import styled from 'styled-components';

export const IconStyled = styled.i`
  box-sizing: ${({ boxSizing }) => boxSizing && boxSizing};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  font-size: ${({ fontSize }) => fontSize && fontSize};
`;
