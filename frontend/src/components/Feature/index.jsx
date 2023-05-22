import {
  FeaturesItemWrapper,
  FeaturesIcon,
  FeaturesItemTitle,
} from './feature';

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
