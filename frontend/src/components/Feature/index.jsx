import styled from 'styled-components';

const FeaturesItemWrapper = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeaturesIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeaturesItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Feature = ({ icon, alt, title, text }) => {
  return (
    <FeaturesItemWrapper>
      <FeaturesIcon src={icon} alt={alt} />
      <FeaturesItemTitle>{title}</FeaturesItemTitle>
      <p>{text}</p>
    </FeaturesItemWrapper>
  );
};

export default Feature;
