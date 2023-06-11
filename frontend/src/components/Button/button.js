import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: ${({ display }) => display && display};
  width: ${({ width }) => width && width};
  padding: ${({ padding }) => padding || '8px'};
  font-size: ${({ fontSize }) => fontSize && fontSize};
  font-weight: bold;
  margin: ${({ margin }) => margin && margin};
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  @media (min-width: 720px) {
    width: ${({ mediaQuery }) => mediaQuery && mediaQuery};
  }
`;
