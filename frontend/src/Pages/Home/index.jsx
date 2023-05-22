import Description from '../../components/Description';
import Feature from '../../components/Feature';
import Header from '../../components/layouts/Header';
import Title from '../../components/Title';
import {
  Main,
  BankDescriptionWrapper,
  BankDescriptionContent,
  BankDescriptionText,
  FeaturesWrapper,
} from './home';

const Home = () => {
  return (
    <>
      <Header login="false" />
      <Main>
        <BankDescriptionWrapper>
          <BankDescriptionContent>
            <Title title="Promoted Content" />
            <Description text="No fees." />
            <Description text="No minimum deposit." />
            <Description text="High interest rates." />
            <BankDescriptionText>
              Open a savings account with Argent Bank today !
            </BankDescriptionText>
          </BankDescriptionContent>
        </BankDescriptionWrapper>
        <FeaturesWrapper>
          <Title title="Features" />
          <Feature
            icon="/assets/icon-chat.png"
            alt="Chat Icon"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            icon="/assets/icon-money.png"
            alt="Money Icon"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be !"
          />
          <Feature
            icon="/assets/icon-security.png"
            alt="Security Icon"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </FeaturesWrapper>
      </Main>
    </>
  );
};

export default Home;
