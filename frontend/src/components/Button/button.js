import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: ${(props) => props.display && props.display};
  width: ${(props) => props.width && props.width};
  padding: ${(props) => props.padding || '8px'};
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: bold;
  margin-top: ${(props) => props.marginTop && props.marginTop};
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  @media (min-width: 720px) {
    width: ${(props) => props.mediaQuery && props.mediaQuery};
  }
`;