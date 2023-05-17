import styled from 'styled-components';

const IconStyled = styled.i`
  box-sizing: ${(props) => props.boxSizing && props.boxSizing};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  font-size: ${(props) => props.fontSize && props.fontSize};
`;

const Icon = ({ boxSizing, backgroundColor, margin, padding, fontSize }) => {
  return (
    <IconStyled
      className="fa fa-user-circle"
      boxSizing={boxSizing}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
    ></IconStyled>
  );
};

export default Icon;
