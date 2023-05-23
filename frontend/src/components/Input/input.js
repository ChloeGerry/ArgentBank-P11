import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  align-items: ${(props) => props.alignItems && props.alignItems};
  text-align: left;
  margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin-right: ${(props) => props.margin && props.margin};
`;

export const InputStyled = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;
