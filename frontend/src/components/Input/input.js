import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  text-align: left;
  margin-bottom: 1rem;
  display: ${({ display }) => display && display};
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin-right: ${({ margin }) => margin && margin};
`;

export const InputStyled = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;
