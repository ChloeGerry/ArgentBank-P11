import styled from 'styled-components';

export const IconStyled = styled.i`
  box-sizing: ${(props) => props.boxSizing && props.boxSizing};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  font-size: ${(props) => props.fontSize && props.fontSize};
`;
