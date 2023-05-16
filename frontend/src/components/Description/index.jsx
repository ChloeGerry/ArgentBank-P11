import styled from 'styled-components';

const DesciptionText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const Description = ({ text }) => {
  return <DesciptionText>{text}</DesciptionText>;
};

export default Description;
